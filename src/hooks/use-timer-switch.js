import {useState, useEffect, useCallback} from 'react';

export const useTimerSwitch = (
  initialDuration = 1500,
  isInitiallyOn = false
) => {
  const [isOn, setIsOn] = useState(isInitiallyOn);
  const [duration, setDuration] = useState(initialDuration);

  const turnOn = useCallback(() => setIsOn(true), []);

  useEffect(() => {
    if (isOn) {
      const id = setTimeout(() => setIsOn(false), duration);

      return () => clearTimeout(id);
    }
  }, [duration, isOn]);

  return {isOn, turnOn, setDuration};
};

export default useTimerSwitch;
