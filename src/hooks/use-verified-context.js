import * as React from 'react';

const useVerifiedContext = (context) => {
  const state = React.useContext(context);
  if (state === null)
    throw new Error(`Hook called outside Provider ${context.displayName}`);
  return state;
};

export {useVerifiedContext};
