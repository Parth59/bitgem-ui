import React, {useState, useContext, useCallback, useMemo} from 'react';
import {createPortal} from 'react-dom';
import {useTimerTrigger} from '../hooks/useTimerTrigger';
export const ToastContext = React.createContext(null);

const TOAST_DURATION = 6000;
const generateId = () => {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = ('000' + first.toString(36)).slice(-3);
  second = ('000' + second.toString(36)).slice(-3);

  return first + second;
};

function ToastProvider({children}) {
  const [toasts, setToasts] = useState([]);

  const add = useCallback(
    (message) => setToasts((prev) => [...prev, {id: generateId(), message}]),
    []
  );
  const remove = useCallback(
    (id) => setToasts((prev) => prev.filter((t) => t.id !== id)),
    []
  );
  const contextValue = useMemo(() => ({add, remove}), [add, remove]);

  const isServer = typeof document === 'undefined';
  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      {isServer ? (
        <div className="absolute top-0 right-0"></div>
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
}

function useToast() {
  const state = useContext(ToastContext);
  if (state === null)
    throw new Error('useToast called outside a ToastProvider');
  return state;
}

function Toast({id, message, remove}) {
  useTimerTrigger({duration: TOAST_DURATION, fn: remove, arg: id});

  return (
    <div className="relative z-40 w-56 m-6 rounded-md font-pixel border-2 opacity-90 border-yellow-300 px-5 py-4 bg-blue-800 text-green-400 text-shadow-sm">
      <span>{message}</span>
    </div>
  );
}

export {ToastProvider, useToast};
