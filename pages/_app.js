import { ThemeProvider } from 'context/themeContext'
import { DefaultSeo } from 'next-seo'
import PropTypes from 'prop-types'
import SEO from '../next-seo.config'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.any,
}

export default MyApp
