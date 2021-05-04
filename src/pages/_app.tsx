import * as React from 'react';
import {AppProps} from 'next/app';
import {Header} from 'components/header';
import {Footer} from 'components/footer';
import Head from 'next/head';
import '../styles/globals.css';
import {Web3ReactProvider} from '@web3-react/core';
import {ethers} from 'ethers';
import {ToastProvider} from 'components/toast-context';
import {BlockchainProvider} from 'components/blockchain-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {opengraphData} from 'lib/data';

const queryClient = new QueryClient();

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

function MyApp({Component, pageProps}: AppProps): JSX.Element {
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
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <Web3ReactProvider getLibrary={getLibrary}>
            <BlockchainProvider>
              <div className="font-pixel bg-blue-1000 bg-app-wallpaper">
                <div className="max-w-5xl min-h-screen flex flex-col mx-auto px-3 md:px-10">
                  <Header />
                  <Component {...pageProps} />
                  <Footer />
                </div>
              </div>
            </BlockchainProvider>
          </Web3ReactProvider>
        </QueryClientProvider>
      </ToastProvider>
    </>
  );
}

export default MyApp;
