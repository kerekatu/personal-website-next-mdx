import PropTypes from 'prop-types'
import Container from '@/components/container'
import Header from '@/components/header'
import Footer from '@/components/footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
