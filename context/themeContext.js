import { createContext, useState, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)
  const themes = ['light', 'dark', 'darker']

  useEffect(() => {
    const root = window.document.documentElement

    // Sets state for intial theme on load
    const initialColorValue = root.getAttribute('id')

    setTheme(initialColorValue)
  }, [])

  const contextValue = useMemo(() => {
    function handleTheme() {
      // Checks current theme & returns new value
      const newThemeValue =
        themes.length - 1 > themes.indexOf(theme)
          ? themes[themes.indexOf(theme) + 1]
          : themes[0]

      // Toggles theme based on passed value
      localStorage.setItem('theme', newThemeValue)

      setTheme(newThemeValue)

      const root = window.document.documentElement
      root.id = newThemeValue
    }

    return {
      theme,
      handleTheme,
      themes,
    }
  }, [theme, setTheme])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.any,
}
