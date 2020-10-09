import PropTypes from 'prop-types'
import Container from '@/components/container'
import Header from '@/components/header'
import Footer from '@/components/footer'

import globalStyles from '@/styles/globalStyles'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />

      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
