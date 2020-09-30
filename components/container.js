import PropTypes from 'prop-types'

const Container = ({ children, main = true, fullWidth = false }) => {
  return (
    <>
      <div className="container">{children}</div>

      <style jsx>
        {`
          .container {
            height: inherit;
            padding: 0 2rem;
          }
        `}
      </style>

      <style jsx>
        {`
          .container {
            max-width: ${fullWidth ? '100%' : 'var(--baseMainWidth);'};
            margin: ${fullWidth ? '0' : '0 auto'};
            ${main && 'margin-top: var(--baseHeaderHeight) !important'}
          }
        `}
      </style>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  main: PropTypes.bool,
  fullWidth: PropTypes.bool,
}

export default Container
