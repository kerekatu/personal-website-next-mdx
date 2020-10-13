import Document, { Html, Head, Main, NextScript } from 'next/document'
import setColorsByTheme from '@/utils/setColorsByTheme'

const ThemeScriptTag = () => {
  const invokeTheme = `(${String(setColorsByTheme)})()`

  return <script dangerouslySetInnerHTML={{ __html: invokeTheme }} />
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ThemeScriptTag />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
