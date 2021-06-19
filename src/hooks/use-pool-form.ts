import * as React from 'react';
import produce from 'immer';
import {BigNumber} from '@ethersproject/bignumber';
import {useMutation, useQueryClient} from 'react-query';
import {formatEther, parseEther} from 'ethers/lib/utils';
import {PoolType} from 'components/pool';
import { usePoolContract } from './use-contract';
import { useWeb3React } from '@web3-react/core';

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

type ClaimRequestParams = {
  stakingTime: BigNumber;
  gemCount: BigNumber;
  total: BigNumber;
}

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
  const {account} = useWeb3React();

  const queryClient = useQueryClient();
  const {mutate} = useMutation(
    (variables: ClaimRequestParams) => submitClaim(variables),
    {
      onMutate: async ({stakingDuration, gemCount, total}) => {
        // create our temporary token. The made up hash value will
        // help us delete this temp item once tx fails or succeeds.
        // const hash = Date.now().toString(36);
        //  let a = 3;
        // const claim = {
        //   stakedAmount: 1
        //  };
        // const claim = {
        //   stakedAmount: total,
        //   quantity: gemCount,
        //   createdAtTimestamp: Date.now().toString(),
        //   stakedTimeSeconds: "0",
        //   transactionHash: "0",
        //   gemPool: {
        //       id: pool.id,
        //     symbol: pool.symbol,
        //     name: pool.name
        //    }
        // }
        // Cancel any currently running queries.
        // await queryClient.cancelQueries('tokens');
        // manually insert optimistic update
        // queryClient.setQueryData('tokens', (previous) => {
        //   let newQueryData = [...previous, token];
        //   console.log('SETTING QUERY DATA TO', newQueryData);
        //   return newQueryData;
        // });
        console.log('QUERYCLIENT', queryClient);
        return;
      },
      onSettled: (txReceipt, error, variables, context) => {
        console.log('Claim settled', {txReceipt, context});
        console.log('QUERYCLIENT2', queryClient);
        queryClient.invalidateQueries('GetUserClaims');
        queryClient.invalidateQueries(['GetUserStats', {id: account}]);
        // queryClient.setQueryData('tokens', (previous) =>
        //   previous.filter((token) => token.hash !== context.hash)
        // );
      }
    }
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const {values} = formState;
    const minPoolDuration = BigNumber.from(pool.minTimeSecs);
    const minPoolPrice = BigNumber.from(pool.stakingPrice)
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

    // total = BigNumber.from("117361111111110");
    // console.log("CREATING CLAIM WITH", {
    //   duration: durationRequested,
    //   dparsed: durationRequested.toString(),
    //   qty: values.gems,
    //   price: pricePerUnit,
    //   pparsed: pricePerUnit.toString(),
    //   total: total.toString(),
    //   value: pricePerUnit.mul(values.gems).toHexString(),
    //   contract: poolContract,
    //   settings: await poolContract.settings()
    // })


    mutate({stakingTime, gemCount, total});
  };

  const submitClaim = async ({stakingTime, gemCount, total}: ClaimRequestParams) => {
    const txResponse = await poolContract.createClaims(stakingTime, gemCount, {
      value: total.toHexString()
    });

    return txResponse.wait();
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
