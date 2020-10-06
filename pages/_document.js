import Document, { Html, Head, Main, NextScript } from 'next/document'
import Terser from 'terser'
import { COLORS } from '@/lib/themeStyles'

function setColorsByTheme() {
  const storedThemePreference = localStorage.getItem('theme')
  let theme = 'light'

  if (storedThemePreference) {
    theme = storedThemePreference
  }

  const root = document.documentElement

  root.style.setProperty('--theme', theme)

  Object.entries(COLORS).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`

    root.style.setProperty(cssVarName, colorByTheme[theme])
  })
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
