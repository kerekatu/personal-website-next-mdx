import PropTypes from 'prop-types'

const Container = ({ children, fullWidth = false }) => {
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
          }
        `}
      </style>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  fullWidth: PropTypes.bool
}

export default Container
