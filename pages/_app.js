import PropTypes from 'prop-types'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'context/themeContext'

// Includs icons globally
import { library } from '@fortawesome/fontawesome-svg-core'
import { ICONS } from '@/utils/icons'

// Default SEO when no other is provided
import SEO from '../next-seo.config'

import Layout from '@/components/layout'

library.add(ICONS)

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.any,
}

export default MyApp
