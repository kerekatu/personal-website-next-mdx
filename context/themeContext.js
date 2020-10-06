import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    const root = window.document.documentElement

    const initialColorValue = root.style.getPropertyValue('--colorMode-white')

    setTheme(initialColorValue)
  }, [])

  const setColorMode = () => {}

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.any
}
