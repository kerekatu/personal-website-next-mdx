import { createContext, useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { COLORS } from '@/lib/themeStyles'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const root = window.document.documentElement

    const initialColorValue = root.style.getPropertyValue('--theme')

    setTheme(initialColorValue)
  }, [])

  const contextValue = useMemo(() => {
    function handleTheme(newValue) {
      const root = window.document.documentElement

      localStorage.setItem('theme', newValue)

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`

        root.style.setProperty(cssVarName, colorByTheme[newValue])
      })

      setTheme(newValue)
    }

    return {
      theme,
      handleTheme,
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
