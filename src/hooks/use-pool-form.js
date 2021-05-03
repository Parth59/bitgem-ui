import * as React from 'react';
import {formatEth} from 'lib/blockchain';

function usePoolForm(pool) {
  const [formValues, setFormValues] = React.useState({
    gems: 1,
    duration: 1,
    price: parseFloat(formatEth(pool.ethPrice))
  });

  const handleSubmit = (event) => {
    event?.preventDefault();
  };

  const handleDurationChange = (event) => {
    if (isNaN(event.target.value)) {
      return;
    }
    const slen = parseFloat(event.target.value) * 86400.0;
    if (slen === 0) {
      return;
    }
    if (pool.minTime.lte(slen) && pool.maxTime.gte(slen)) {
      const ep = parseFloat(formatEth(pool.ethPrice));
      const price = (ep * pool.minTime) / slen;
      if (price > ep || price < ep / pool.maxTime.toNumber()) {
        return;
      }
      setFormValues({
        gems: formValues.gems,
        duration: event.target.value,
        price
      });
    }
  };

  const handlePriceChange = (event) => {
    if (isNaN(event.target.value)) {
      return;
    }
    const amount = event.target.value;
    if (amount === 0 || isNaN(amount)) {
      return;
    }
    const ep = parseFloat(formatEth(pool.ethPrice));
    let length = (pool.minTime.toNumber() * ep) / amount;

    if (length < pool.minTime.toNumber() || length > pool.maxTime.toNumber()) {
      return;
    }
    length = length / 86400.0;
    setFormValues({
      gems: formValues.gems,
      duration: length,
      price: event.target.value
    });
  };

  const handleGemsChange = (event) => {
    setFormValues({
      ...formValues,
      gems: event.target.value
    });
    // this.poolForm.patchValue({ length });
    // this.valid = true;
  };

  return {
    formValues,
    handleSubmit,
    handleDurationChange,
    handlePriceChange,
    handleGemsChange
  };
}

export {usePoolForm};
