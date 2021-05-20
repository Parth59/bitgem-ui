import React from 'react';
import {useToast} from 'components/toast-context';
import {useQueryClient} from 'react-query';

function useWeb3Event(contract, eventId, eventHandler) {
  const eventHandlerRef = React.useRef();

  React.useEffect(() => {
    eventHandlerRef.current = eventHandler;
  }, [eventHandler]);

  React.useEffect(() => {
    const eventListener = (event) => eventHandlerRef.current(event);

    if (contract) {
      contract.on(eventId, eventListener);
      return () => {
        contract.off(eventId, eventListener);
      };
    }
  }, [contract, eventId]);
}

function useWeb3Notification(contract, eventId, message) {
  const {add} = useToast();
  const handler = React.useCallback(() => {
    add(message);
  }, [add, message]);
  useWeb3Event(contract, eventId, handler);
}

function useCacheInvalidationOnEvent(contract, eventId, queryKey) {
  const queryClient = useQueryClient();
  const handler = React.useCallback(() => {
    queryClient.invalidateQueries(queryKey);
  }, [queryClient, queryKey]);
  useWeb3Event(contract, eventId, handler);
}

export {useWeb3Event, useWeb3Notification, useCacheInvalidationOnEvent};
