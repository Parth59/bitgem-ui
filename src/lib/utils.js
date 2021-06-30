export const verifyContext = (state, contextName) => {
  if (state === null)
    throw new Error(`Hook called outside Provider: ${contextName}`);
  return state;
};

// returns a sequence of numbers starting at x, incrementing by a specified amount,
// and stopping before y.
export const range = (x, y, increment = 1) =>
  [...new Array(y - x).keys()].map((i) => (i + x) * increment);

// Takes a string that represents a floating point number and truncates it to a particular precision.
// Should only be used to present data, the result should not be saved or used to later calculate anything.
export const setStringPrecision = (numberString, precision) => {
  const i = numberString.indexOf('.');
  return i === -1 ? numberString : numberString.substring(0, i + precision + 1);
};
