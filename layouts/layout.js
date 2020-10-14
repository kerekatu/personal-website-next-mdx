import PropTypes from 'prop-types'

import { Global } from '@emotion/core'
import globalStyles from '@/styles/globalStyles'

import Container from '@/layouts/container'
import Header from '@/layouts/header'
import Footer from '@/layouts/footer'

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
