import * as React from 'react';
import {createPortal} from 'react-dom';
import {useTimerTrigger} from '../hooks/use-timer-trigger';
export const ToastContext = React.createContext(null);

const TOAST_DURATION = 6000;
const generateId = () => {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = ('000' + first.toString(36)).slice(-3);
  second = ('000' + second.toString(36)).slice(-3);

  return first + second;
};

const ToastProvider = ({children}) => {
  const [toasts, setToasts] = React.useState([]);

  const add = React.useCallback(
    (message) => setToasts((prev) => [...prev, {id: generateId(), message}]),
    []
  );
  const remove = React.useCallback(
    (id) => setToasts((prev) => prev.filter((t) => t.id !== id)),
    []
  );
  const contextValue = React.useMemo(() => ({add, remove}), [add, remove]);

  const isServer = typeof document === 'undefined';
  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      {isServer ? (
        <div className="absolute bottom-0 right-0"></div>
      ) : (
        createPortal(
          <div className="absolute bottom-0 right-0">
            {toasts.map((toast) => (
              <Toast key={toast.id} remove={remove} {...toast} />
            ))}
          </div>,
          document.body
        )
      )}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const state = React.useContext(ToastContext);
  if (state === null)
    throw new Error('useToast called outside a ToastProvider');
  return state;
};

const Toast = ({id, message, remove}) => {
  useTimerTrigger({duration: TOAST_DURATION, fn: remove, arg: id});

  return (
    <div className="relative z-40 w-56 m-6 rounded-md font-pixel border-2 opacity-90 border-yellow-300 px-5 py-4 bg-blue-800 text-green-400 text-shadow-sm">
      <span>{message}</span>
    </div>
  );
};

export {ToastProvider, useToast};
