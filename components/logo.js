import PropTypes from 'prop-types'

const Logo = () => {
  return (
    <>
      <img src="/static/logo-black.svg" alt="Logo" />

      <style jsx>
        {`
          img {
            display: block;
            height: 3.6rem;
            filter: var(--color-svg);
          }

          img:hover {
            filter: var(--color-svg-2);
          }
        `}
      </style>
    </>
  )
}

Logo.propTypes = {
  altColor: PropTypes.bool
}

export default Logo
