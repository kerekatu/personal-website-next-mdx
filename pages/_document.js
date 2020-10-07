import Document, { Html, Head, Main, NextScript } from 'next/document'

function setColorsByTheme() {
  const matchMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const prefersDarkFromMediaQuery = matchMediaQuery.matches
  const storedThemePreference = localStorage.getItem('theme')

  const root = document.documentElement

  let theme = 'light'

  const hasStoredThemePreference = typeof storedThemePreference === 'string'

  if (storedThemePreference && hasStoredThemePreference) {
    theme = storedThemePreference
  } else {
    theme = prefersDarkFromMediaQuery ? 'dark' : 'light'
  }

  root.id = theme
}

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
