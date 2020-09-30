import { useState } from 'react'
import PropTypes from 'prop-types'

const Logo = ({ altColor = false }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <img
        src={
          isHovered
            ? '/static/logo-blue.svg'
            : altColor
            ? '/static/logo-white.svg'
            : '/static/logo-black.svg'
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        alt="Logo"
      />
      <style jsx>
        {`
          img {
            display: block;
            height: 3.6rem;
          }
        `}
      </style>
    </>
  )
}

Logo.propTypes = {
  altColor: PropTypes.bool,
}

export default Logo
