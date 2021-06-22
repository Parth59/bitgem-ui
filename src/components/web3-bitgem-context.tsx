// import * as React from 'react';
// import {useWeb3React} from '@web3-react/core';
// import {useVerifiedContext} from 'hooks/use-verified-context';
// import {Web3Provider} from '@ethersproject/providers';
// import {useQuery} from 'react-query';
// import {loadBitgemContext} from 'lib/blockchain';
// import {ConfirmationModal} from 'components/confirmation-modal';
// import {useToggle} from 'hooks/use-toggle';
// import {
//   NFTGemMultiToken,
//   ERC20GemTokenFactory,
//   NFTGemGovernor,
//   NFTGemPoolFactory
// } from '../../types';
// import {ethers} from 'ethers';

// export type GemContracts = {
//   token: NFTGemMultiToken | null;
//   factory: NFTGemPoolFactory | null;
//   tokenFactory: ERC20GemTokenFactory | null;
//   governor: NFTGemGovernor | null;
// };

// export type Web3BitgemContext = {
//   chainId: number;
//   library: Web3Provider;
//   account: string;
//   contracts: GemContracts;
//   signer: ethers.providers.JsonRpcSigner;
// };

// export const emptyContextData = {
//   chainId: null,
//   account: null,
//   library: null,
//   signer: null,
//   contracts: {
//     factory: null,
//     tokenFactory: null,
//     token: null,
//     governor: null
//   }
// };

// const Web3BitgemContext = React.createContext<Web3BitgemContext>(null);
// Web3BitgemContext.displayName = 'Web3BitgemContext';

// const Web3BitgemProvider = ({
//   children
// }: {
//   children: React.ReactNode;
// }): JSX.Element => {
//   const [isErrorModalOpen, toggleErrorModal] = useToggle(false);
//   const {chainId, library, account} = useWeb3React<Web3Provider>();
//   const {
//     data: web3BitgemData,
//     error,
//     isError
//   } = useQuery<Web3BitgemContext, Error>(
//     ['blockchain', chainId, account],
//     () => loadBitgemContext(chainId, library, account),
//     {
//       initialData: emptyContextData,
//       enabled: !!library && !!account,
//       refetchOnWindowFocus: false
//     }
//   );

//   React.useEffect(() => {
//     if (isError) {
//       toggleErrorModal();
//     }
//   }, [isError, toggleErrorModal]);

//   return (
//     <Web3BitgemContext.Provider value={web3BitgemData}>
//       {children}
//       <ConfirmationModal
//         title="Error while connecting"
//         hasCancel={false}
//         text={error?.message}
//         open={isErrorModalOpen}
//         toggle={toggleErrorModal}
//       />
//     </Web3BitgemContext.Provider>
//   );
// };

// const useWeb3Bitgem = (): Web3BitgemContext => {
//   return useVerifiedContext(Web3BitgemContext);
// };

// export {Web3BitgemProvider, useWeb3Bitgem};
