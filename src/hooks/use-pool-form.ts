import * as React from 'react';
import {formatEther} from 'lib/blockchain';
import produce from 'immer';
import {BigNumber} from '@ethersproject/bignumber';
import {useMutation, useQueryClient} from 'react-query';
import {GemPool} from 'graph';
import {parseEther} from 'ethers/lib/utils';

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

const getInitialState = (pool: GemPool) => ({
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

const usePoolForm = (pool: GemPool): PoolForm => {
  const [formState, dispatch] = React.useReducer(
    reducer,
    getInitialState(pool)
  );
  // const queryClient = useQueryClient();
  const {mutate} = useMutation(
    (claimValues: PoolFormValues) => submitClaim(claimValues),
    {
      // onMutate: async (claimValues: PoolFormValues) => {
      //   // create our temporary token. The made up hash value will
      //   // help us delete this temp item once tx fails or succeeds.
      //   const hash = Date.now().toString(36);
      //   const token = {
      //     type: 1,
      //     id: 0,
      //     hash,
      //     name: pool.name,
      //     symbol: pool.symbol,
      //     unlockTime: 0,
      //     amount: BigNumber.from(0),
      //     quantity: BigNumber.from(claimValues.gems),
      //     token: '',
      //     pool
      //   };
      //   // Cancel any currently running queries.
      //   await queryClient.cancelQueries('tokens');
      //   // manually insert optimistic update
      //   queryClient.setQueryData('tokens', (previous) => {
      //     let newQueryData = [...previous, token];
      //     console.log('SETTING QUERY DATA TO', newQueryData);
      //     return newQueryData;
      //   });
      //   console.log('QUERYCLIENT', queryClient);
      //   return {hash};
      // },
      // onSettled: (txReceipt, error, variables, context) => {
      //   console.log('Claim settled', {txReceipt, context});
      //   queryClient.invalidateQueries('tokens');
      //   // queryClient.setQueryData('tokens', (previous) =>
      //   //   previous.filter((token) => token.hash !== context.hash)
      //   // );
      // }
    }
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    // submitClaim(formState.values);
    mutate(formState.values);
  };

  const submitClaim = async (values: PoolFormValues) => {
    const timeframe = BigNumber.from(values.duration);
    const count = BigNumber.from(values.gems);
    const pricePerUnit = parseEther(values.price);

    // just in case, make sure we're never giving out the farm at a discount
    if (
      timeframe.gt(BigNumber.from(pool.maxTimeSecs)) ||
      pricePerUnit.lt(parseEther(pool.stakingPrice))
    ) {
      return;
    }
    // const txResponse = await pool.contract.createClaims(timeframe, count, {
    //   value: ethPrice.mul(count).toHexString()
    // });

    // return txResponse.wait();
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const duration = parseInt(event.target.value);
    const minPrice = BigNumber.from(pool.stakingPrice);

    const price = minPrice
      .mul(BigNumber.from(pool.minTimeSecs))
      .div(BigNumber.from(duration));

    dispatch({
      type: 'SET_VALUES',
      payload: {price: formatEther(price), duration: event.target.value}
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
