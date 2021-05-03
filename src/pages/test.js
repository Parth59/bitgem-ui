import {useWeb3React} from '@web3-react/core';
import * as React from 'react';
import {getData, networkCoins, formatEth} from 'lib/blockchain';

function Test() {
  const {active, chainId, library} = useWeb3React();
  const [data, setData] = React.useState(null);
  // const {isLoading, error, data} = useQuery(
  //   ['contractData', chainId],
  //   (args) => getData(args, library),
  //   {refetchOnWindowFocus: false, retry: false, enabled: chainId !== undefined}
  // );
  // const [poolFactory, setPoolFactory] = React.useState(null);

  React.useEffect(() => {
    if (active && library && chainId) {
      getData(chainId, library).then(setData);
    }
  }, [active, chainId, library]);

  console.log(data);
  // React.useEffect(() => {
  //   if (contractData) {
  //     const signer = library.getSigner();
  //     console.log(signer);
  //     getPoolFactory(contractData, signer).then((factory) =>
  //       setPoolFactory(factory)
  //     );
  //   }
  // }, [contractData, library]);

  // this.ethers = new ethers.providers.Web3Provider(this.provider); // create ethers instance
  // this.networkId = this.network.chainId;

  // React.useEffect(() => {});
  // try {
  //   this.contractData = await import(
  //     `../../abis/${this.networkId}/bitgems.json`
  //   );
  // } catch (e) {
  //   this.isLoading = false;
  //   return invalidNetwork();
  // }
  // async getContractRef(contract: any, address?: any): Promise<any> {
  //   const tokenData = this.contractData.contracts[contract];
  //   if (tokenData) {
  //     return new ethers.Contract(address ? address : tokenData.address, tokenData.abi, this.signer);
  //   }
  // }
  // this.factory = (await this.getContractRef(
  //   'NFTGemPoolFactory'
  // )) as NFTGemPoolFactory;
  // const allPoolsCount = await this.factory.allNFTGemPoolsLength();

  console.dir(data);
  let {gemList = [], claimList = []} = data ?? {};

  return (
    <div className="text-green-500 text-shadow-sm">
      {data ? (
        <div>
          {networkCoins[chainId]} staked:{' '}
          {parseFloat(formatEth(data.totalStaked)).toFixed(4)}{' '}
          {networkCoins[chainId]} - claims {data.totalClaims} - minted:{' '}
          {data.totalMinted} gems
        </div>
      ) : null}
      {claimList.map(({item}) => (
        <div key={item.hash}>{item.hash}</div>
      ))}
    </div>
  );
}

export default Test;
