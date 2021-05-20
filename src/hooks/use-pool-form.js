import * as React from 'react';
import {formatEther} from 'lib/blockchain';
import produce from 'immer';
import {BigNumber} from '@ethersproject/bignumber';
import {parseEther} from 'lib/blockchain';

const reducer = produce((draft, {type, payload}) => {
  switch (type) {
    case 'SET_VALUES': {
      let {price, duration} = payload;
      draft.values.price = price;
      draft.values.duration = duration;
      draft.errors = {};
      draft.enabled = true;
      break;
    }
    case 'SET_GEMS': {
      // if (/^[0]+$/.test(payload)) draft.values.gems = '0';
      draft.values.gems = /^[0]+$/.test(payload) ? '0' : payload;
      draft.errors.gems = payload > 0 ? undefined : 'You must specify > 0 Gems';
      break;
    }
    case 'ZERO_PRICE': {
      draft.values.price = payload;
      draft.values.duration = 0;
      draft.errors.duration = draft.messages.durationRange;
      draft.enabled = false;
      break;
    }
    case 'ZERO_DURATION': {
      draft.values.duration = payload;
      draft.values.price = 0;
      draft.errors.duration = draft.messages.durationRange;
      draft.enabled = false;
      break;
    }
    case 'DURATION_ERROR': {
      draft.errors.duration = draft.messages.durationRange;
      draft.enabled = true;
    }
  }
});

const getInitialState = (pool) => ({
  values: {
    gems: 1,
    duration: pool.minTime.toNumber() / 86400.0,
    price: formatEther(pool.ethPrice.toString())
  },
  errors: {},
  enabled: true,
  messages: {
    durationRange: `Staking duration must be between ${
      pool.minTime / 86400
    } and ${pool.maxTime / 86400}`
  }
});

function usePoolForm(pool) {
  const [formState, dispatch] = React.useReducer(
    reducer,
    getInitialState(pool)
  );

  const handleSubmit = (event) => {
    event?.preventDefault();
    const {values} = formState;
    const timeframe = BigNumber.from(values.duration * 86400);
    const count = BigNumber.from(values.gems);
    const ethPrice = BigNumber.from(parseEther(values.price));
    const myPrice = ethPrice.mul(pool.minTime).div(timeframe);
    if (timeframe.gt(pool.maxTime) || myPrice.gt(ethPrice)) {
      return;
    }
    return pool.contract.createClaims(timeframe, count, {
      value: ethPrice.mul(count).toHexString()
    });
  };

  const handleDurationChange = (event) => {
    if (!/^[\d]*\.?[\d]{0,4}$/.test(event.target.value)) return;
    let duration = ['.', ''].includes(event.target.value)
      ? 0
      : parseFloat(event.target.value);

    if (duration === 0) {
      dispatch({
        type: 'ZERO_DURATION',
        payload: event.target.value
      });
      return;
    }

    const durationInSeconds = Math.round(
      parseFloat(event.target.value) * 86400.0
    );

    if (
      pool.minTime.lte(durationInSeconds) &&
      pool.maxTime.gte(durationInSeconds)
    ) {
      const ethPrice = parseFloat(formatEther(pool.ethPrice));
      const price = (ethPrice * pool.minTime) / durationInSeconds;
      dispatch({
        type: 'SET_VALUES',
        payload: {price, duration: event.target.value}
      });
    } else {
      dispatch({type: 'DURATION_ERROR'});
    }
  };

  const handlePriceChange = (event) => {
    if (!/^[\d]*\.?[\d]{0,18}$/.test(event.target.value)) return;

    let price = ['.', ''].includes(event.target.value)
      ? 0
      : parseFloat(event.target.value);

    if (price === 0) {
      dispatch({type: 'ZERO_PRICE', payload: event.target.value});
      return;
    }

    let length = (pool.minTime * formatEther(pool.ethPrice)) / price;

    if (length > pool.minTime.toNumber() && length < pool.maxTime.toNumber()) {
      dispatch({
        type: 'SET_VALUES',
        payload: {
          price: event.target.value,
          duration: (length / 86400).toPrecision(5)
        }
      });
    } else {
      dispatch({type: 'DURATION_ERROR'});
    }
  };

  const handleGemsChange = (event) => {
    if (!/^[\d]*$/.test(event.target.value)) return;
    dispatch({type: 'SET_GEMS', payload: event.target.value});
  };

  return {
    formValues: formState.values,
    formErrors: formState.errors,
    enabled: formState.enabled && formState.values.gems > 0,
    handleSubmit,
    handleDurationChange,
    handlePriceChange,
    handleGemsChange
  };
}

export {usePoolForm};
