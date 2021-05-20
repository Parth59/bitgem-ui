export const verifyContext = (state, contextName) => {
  if (state === null)
    throw new Error('Hook called outside Provider ', contextName);
  return state;
};

// returns a sequence of numbers starting at x, incrementing by a specified amount,
// and stopping before y.
export const range = (x, y, increment = 1) =>
  [...new Array(y - x).keys()].map((i) => (i + x) * increment);
