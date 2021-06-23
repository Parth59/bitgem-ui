import * as React from 'react';
import {AppProps} from 'next/app';
import {Header} from 'components/header';
import {Footer} from 'components/footer';
import Head from 'next/head';
import '../styles/globals.css';
import {Web3ReactProvider} from '@web3-react/core';
import {ethers} from 'ethers';
import {ToastProvider} from 'components/toast-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Web3ReactManager} from 'components/web3-react-manager';
import {opengraphData} from 'lib/data';
import {QueryManagerProvider} from 'components/query-manager-context';
import dynamic from 'next/dynamic';
import {BitgemContractDataProvider} from 'components/bitgem-contract-data-context';
import {BitGemEventManager} from 'components/bitgem-event-manager';

const Web3ProviderNetwork = dynamic(
  () => import('components/web3-provider-network'),
  {ssr: false}
);

const queryClient = new QueryClient();

const getLibrary = (provider) => {
  return new ethers.providers.Web3Provider(provider);
};

const ServerCacheProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>
          {opengraphData[Component.displayName]?.title ??
            'Bitgem. Stake anything, get NFT Gems.'}
        </title>
        {Object.entries(
          opengraphData[Component.displayName]?.openGraph ?? {}
        ).map(([property, content]) => (
          <meta
            property={property}
            content={content as string}
            key={property}
          />
        ))}
      </Head>

      <ServerCacheProvider>
        <ToastProvider>
          <Web3ReactProvider getLibrary={getLibrary}>
            <Web3ProviderNetwork getLibrary={getLibrary}>
              <Web3ReactManager>
                <BitgemContractDataProvider>
                  <BitGemEventManager>
                    <QueryManagerProvider>
                      <div className="font-pixel bg-blue-1000 bg-app-wallpaper">
                        <div className="max-w-5xl min-h-screen flex flex-col mx-auto px-3 md:px-10">
                          <Header />
                          <Component {...pageProps} />
                          <Footer />
                        </div>
                      </div>
                    </QueryManagerProvider>
                  </BitGemEventManager>
                </BitgemContractDataProvider>
              </Web3ReactManager>
            </Web3ProviderNetwork>
          </Web3ReactProvider>
        </ToastProvider>
      </ServerCacheProvider>
    </>
  );
};

export default MyApp;
