import * as React from 'react';
import {injected} from 'lib/connectors';
import {isMobile} from 'react-device-detect';
import {useWeb3React as useWeb3ReactCore} from '@web3-react/core';

const useEagerConnect = (): boolean => {
  const {activate, active} = useWeb3ReactCore(); // specifically using useWeb3ReactCore because of what this hook does
  const [tried, setTried] = React.useState(false);

  React.useEffect(() => {
    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        if (isMobile && (window as any).ethereum) {
          activate(injected, undefined, true).catch(() => {
            setTried(true);
          });
        } else {
          setTried(true);
        }
      }
    });
  }, [activate]); // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  React.useEffect(() => {
    if (active) {
      setTried(true);
    }
  }, [active]);

  return tried;
};

export default useEagerConnect;
