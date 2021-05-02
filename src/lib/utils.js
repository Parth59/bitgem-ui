import * as React from 'react';

export const verifyContext = (state, contextName) => {
  console.dir(state);
  if (state === null)
    throw new Error('Hook called outside Provider ', contextName);
  return state;
};
