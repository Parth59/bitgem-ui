import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="prefetch"
            href="/fonts/Open24DisplaySt.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/Open24DisplaySt.woff"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/Pixelated.woff"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/Pixelated.eot"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/Pixelated.svg"
            as="image"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/PressStart2P-Regular.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/PressStart2P-Regular.woff"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/PressStart2P-Regular.svg"
            as="image"
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
