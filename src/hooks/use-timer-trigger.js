import * as React from 'react';

// Beware: arg needs to have a stable identity (use useMemo on refrence types)
const useTimerTrigger = ({duration, fn, arg}) => {
  const fnRef = React.useRef();
  fnRef.current = fn;

  React.useEffect(() => {
    const tid = setTimeout(() => fnRef.current(arg), duration);
    return () => clearTimeout(tid);
  }, [arg, duration]);
};

export {useTimerTrigger};
