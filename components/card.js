import CustomLink from './custom-link'

import PropTypes from 'prop-types'

const Card = ({ title, description, coverImg, href }) => {
  return (
    <>
      <CustomLink href={href}>
        <div className="card">
          <picture>
            <source srcSet={coverImg?.avif} type="image/avif" />
            <img src={coverImg?.jpg} alt="Thumbnail for Post" />
          </picture>
          <div className="card-content">
            <h3>{title}</h3>
          </div>
        </div>
      </CustomLink>

      <style jsx>
        {`
          .card {
            display: block;
            border-radius: var(--cardRadius);
          }

          .card-content {
            padding: 1rem 0;
          }

          picture,
          source,
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 1.6rem 1.6rem 0 0;
          }
        `}
      </style>
    </>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  coverImg: PropTypes.string,
  href: PropTypes.string.isRequired
}

export default Card
