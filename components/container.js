import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Container = ({ children, main = true, fullWidth = false }) => {
  return (
    <ContainerWrapper styleFullWidth={fullWidth} styleMain={main}>
      {children}
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled.main(({ styleFullWidth, styleMain }) => ({
  display: 'block',
  height: 'inherit',
  padding: '0 2rem',
  position: 'relative',
  maxWidth: styleFullWidth ? '100%' : 'var(--baseMainWidth)',
  margin: styleFullWidth ? '0' : '0 auto',
  marginTop: styleMain && 'var(--baseHeaderHeight) !important',
}))

Container.propTypes = {
  children: PropTypes.node,
  main: PropTypes.bool,
  fullWidth: PropTypes.bool,
}

export default Container
