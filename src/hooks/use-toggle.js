import * as React from 'react';

const useToggle = (initialState) => {
  const [isOn, setIsOn] = React.useState(initialState || false);
  const toggle = React.useCallback(() => setIsOn((prev) => !prev), []);

  return [isOn, toggle, setIsOn];
};

export {useToggle};
