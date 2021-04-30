import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Open24DisplaySt.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Open24DisplaySt.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Pixelated.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Pixelated.eot"
            as="font"
            type="font/eot"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Pixelated.svg"
            as="font"
            type="font/svg"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/PressStart2P-Regular.woff2"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/PressStart2P-Regular.woff"
            as="font"
            type="font/eot"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/PressStart2P-Regular.svg"
            as="font"
            type="font/svg"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
