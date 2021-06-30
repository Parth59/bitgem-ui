import * as React from 'react';
import produce from 'immer';
import {BigNumber} from '@ethersproject/bignumber';
import {useMutation, useQueryClient} from 'react-query';
import {formatEther, parseEther} from 'ethers/lib/utils';
import {PoolType} from 'components/pool';
import {usePoolContract} from './use-contract';
import {ClaimProps} from 'components/claim';
import {
  REFETCH_INTERVAL_WITH_PENDING,
  useQueryManager
} from 'components/query-manager-context';
import {ClaimRequestParams, submitClaim} from 'lib/blockchain';

type PoolFormValues = {
  gems: number;
  duration: number;
  price: string;
};

type PoolFormErrors = {
  gems?: string;
  duration?: string;
  price?: string;
};

type PoolForm = {
  formValues: PoolFormValues;
  formErrors: PoolFormErrors;
  enabled: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleDurationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleGemsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const reducer = produce((draft, {type, payload}) => {
  switch (type) {
    case 'SET_VALUES': {
      const {price, duration} = payload;
      draft.values.price = price;
      draft.values.duration = duration;
      draft.errors = {};
      draft.enabled = true;
      break;
    }
    case 'SET_GEMS': {
      draft.values.gems = /^[0]+$/.test(payload) ? '0' : payload;
      draft.errors.gems = payload > 0 ? undefined : 'You must specify > 0 Gems';
      break;
    }
  }
});

const getInitialState = (pool: PoolType) => ({
  values: {
    gems: 1,
    duration: parseFloat(pool.minTimeSecs),
    price: formatEther(pool.stakingPrice)
  },
  errors: {},
  enabled: true,
  messages: {
    durationRange: `Staking duration must be between ${pool.minTimeSecs} and ${pool.maxTimeSecs}`
  }
});

const usePoolForm = (pool: PoolType): PoolForm => {
  const [formState, dispatch] = React.useReducer(
    reducer,
    getInitialState(pool)
  );
  const poolContract = usePoolContract(pool.id);
  const {setClaimRefetchInterval} = useQueryManager();

  const queryClient = useQueryClient();
  const {mutate} = useMutation<string, Error, ClaimRequestParams, ClaimProps>(
    (variables) => submitClaim(variables),
    {
      onSettled: (transactionHash, error, {stakingTime, gemCount, total}) => {
        if (error) {
          console.log('Error submitting transaction', error);
        }
        // Create a pending claim and save it to the pending cache.
        const claim: ClaimProps = {
          id: transactionHash, // temporary
          stakedAmount: total.toString(),
          quantity: gemCount.toString(),
          createdAtTimestamp: Date.now().toString(),
          stakedTimeSeconds: stakingTime.toString(),
          transactionHash,
          status: 'pendingSubmit',
          gemPool: {
            id: pool.id,
            symbol: pool.symbol,
            name: pool.name
          }
        };
        // Keeping our pending cache in react-query
        queryClient.setQueryData<ClaimProps[]>('pendingClaims', (previous) => [
          ...previous,
          claim
        ]);
        setClaimRefetchInterval(REFETCH_INTERVAL_WITH_PENDING);
      }
    }
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const {values} = formState;
    const minPoolDuration = BigNumber.from(pool.minTimeSecs);
    const minPoolPrice = BigNumber.from(pool.stakingPrice);
    const stakingTime = BigNumber.from(values.duration);
    const gemCount = BigNumber.from(values.gems);
    const pricePerUnit = minPoolPrice.mul(minPoolDuration).div(stakingTime);
    const shownPricePerUnit = parseEther(values.price);

    // Grand total is the price at the min duration * (minimum staking time / duration selected) * items requested
    const total = pricePerUnit.mul(gemCount);

    // sanity check, make sure we're never giving out the farm at a discount
    if (
      stakingTime.gt(BigNumber.from(pool.maxTimeSecs)) ||
      !pricePerUnit.eq(shownPricePerUnit)
    ) {
      return;
    }

    mutate({poolContract, stakingTime, gemCount, total});
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const duration = parseInt(event.target.value);
    const minPriceWei = BigNumber.from(pool.stakingPrice);

    const priceWei = minPriceWei
      .mul(BigNumber.from(pool.minTimeSecs))
      .div(BigNumber.from(duration));

    dispatch({
      type: 'SET_VALUES',
      payload: {price: formatEther(priceWei), duration: event.target.value}
    });
  };

  const handleGemsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^[\d]*$/.test(event.target.value)) return;
    dispatch({type: 'SET_GEMS', payload: event.target.value});
  };

  return {
    formValues: formState.values,
    formErrors: formState.errors,
    enabled: formState.enabled && formState.values.gems > 0,
    handleSubmit,
    handleDurationChange,
    handleGemsChange
  };
};

export {usePoolForm};
