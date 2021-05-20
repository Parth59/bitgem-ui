import * as React from 'react';

function useVerifiedContext(context) {
  const state = React.useContext(context);
  if (state === null)
    throw new Error(`Hook called outside Provider ${context.displayName}`);
  return state;
}

export {useVerifiedContext};
