import * as React from 'react';
import {AppProps} from 'next/app';
import {Header} from 'components/header';
import {Footer} from 'components/footer';
import '../styles/globals.css';
import {Web3ReactProvider} from '@web3-react/core';
import {ethers} from 'ethers';
import {ToastProvider} from 'components/toast-context';
import {BlockchainProvider} from 'components/blockchain-context';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
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
  );
}

export default MyApp;
