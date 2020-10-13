export default function setColorsByTheme() {
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
