import {createWeb3ReactRoot} from '@web3-react/core';

const Web3ReactProviderDefault = createWeb3ReactRoot('NETWORK');

type Web3ProvierNetworkProps = {
  children: JSX.Element;
  getLibrary: any;
};

const Web3ProviderNetwork = ({
  children,
  getLibrary
}: Web3ProvierNetworkProps): JSX.Element => {
  return (
    <Web3ReactProviderDefault getLibrary={getLibrary}>
      {children}
    </Web3ReactProviderDefault>
  );
};

export default Web3ProviderNetwork;
