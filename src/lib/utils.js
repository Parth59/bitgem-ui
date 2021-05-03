export const verifyContext = (state, contextName) => {
  if (state === null)
    throw new Error('Hook called outside Provider ', contextName);
  return state;
};
