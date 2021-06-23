import * as React from 'react';

const useVerifiedContext = <T>(context: React.Context<T>): T => {
  const state = React.useContext(context);
  if (state === null)
    throw new Error(`Hook called outside Provider ${context.displayName}`);
  return state;
};

export {useVerifiedContext};
