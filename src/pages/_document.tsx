import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/favicon192.png"></link>
          <meta name="theme-color" content="#794BC4" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}