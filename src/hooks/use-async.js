import * as React from 'react';

const defaultState = {status: 'idle', data: null, error: null};
const simpleReducer = (state, updates) => ({...state, ...updates});

// @pricklywiggles: Need to make this safe for unmounting.
// TODO: Type this
const useAsync = (initialState) => {
  const initialStateRef = React.useRef({
    ...defaultState,
    ...initialState
  });
  // state dipatch function and state utility fns
  const [state, setState] = React.useReducer(
    simpleReducer,
    initialStateRef.current
  );
  const setData = React.useCallback(
    (data) => setState({data, status: 'success'}),
    []
  );
  const setError = React.useCallback(
    (error) => setState({error, status: 'error'}),
    []
  );
  const reset = React.useCallback(() => setState(initialStateRef.current), []);

  // Runs and asynchronous function and handles updating all state hooks.
  const run = React.useCallback(
    (promise) => {
      // this clears when using setData and setError below.
      setState({status: 'loading'});
      promise.then(
        (data) => {
          setData(data);
          return data;
        },
        (error) => {
          setError(error);
          return Promise.reject(error);
        }
      );
    },
    [setData, setError]
  );

  return {
    isLoading: state.status === 'loading',
    isError: state.status === 'error',
    isSuccess: state.status === 'success',
    isIdle: state.status === 'idle',
    reset,
    setData,
    setError,
    run,
    ...state
  };
};

export {useAsync};
