import PropTypes from 'prop-types'

const Footer = ({ includeNewsletter = true }) => {
  return (
    <>
      <footer></footer>

      <style jsx>
        {`
          footer {
          }
        `}
      </style>
    </>
  )
}

Footer.propTypes = {
  includeNewsletter: PropTypes.bool,
}

export default Footer
