import Document, { Html, Head, Main, NextScript } from 'next/document'
import GoogleFonts from 'next-google-fonts'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
