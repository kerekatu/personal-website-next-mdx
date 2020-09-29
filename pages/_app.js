import { DefaultSeo } from 'next-seo'
import PropTypes from 'prop-types'
import SEO from '../next-seo.config'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.any
}

export default MyApp
