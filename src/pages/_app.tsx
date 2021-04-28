import {AppProps} from 'next/app';
import {Header} from 'components/header';
import {Footer} from 'components/footer';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <div className="font-pixel bg-blue-1000 bg-app-wallpaper">
      <div className="max-w-5xl min-h-screen flex flex-col mx-auto px-3 md:px-10">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
