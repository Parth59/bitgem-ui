import * as React from 'react';
import {formatEther, parseEther} from 'lib/blockchain';
import {ethers} from 'ethers';
import produce from 'immer';

const reducer = produce((draft, {type, payload}) => {
  console.log({type, payload});
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
      draft.values.gems = payload;
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

  React.useEffect(() => {
    console.log(formState);
  }, [formState]);

  const handleSubmit = (event) => {
    event?.preventDefault();
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
    console.log('NEW PRICE IS', price);

    if (price === 0) {
      dispatch({type: 'ZERO_PRICE', payload: event.target.value});
      return;
    }

    let length = (pool.minTime * formatEther(pool.ethPrice)) / price;

    console.log({
      price,
      length,
      eth: formatEther(pool.ethPrice),
      mte: pool.minTime * formatEther(pool.ethPrice),
      minTime: pool.minTime.toNumber(),
      maxTime: pool.maxTime.toNumber()
    });

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
    dispatch({type: 'SET_GEMS', payload: event.target.value});
  };

  return {
    formValues: formState.values,
    formErrors: formState.errors,
    enabled: formState.enabled,
    handleSubmit,
    handleDurationChange,
    handlePriceChange,
    handleGemsChange
  };
}

export {usePoolForm};
