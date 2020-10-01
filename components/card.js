import CustomLink from './custom-link'

import PropTypes from 'prop-types'

const Card = ({ title, description, coverImg, href }) => {
  return (
    <>
      <CustomLink href={href}>
        <div className="card">
          {coverImg ? (
            <picture>
              <source srcSet={coverImg?.avif} type="image/avif" />
              <img src={coverImg?.jpg} alt="Thumbnail for Post" />
            </picture>
          ) : (
            <div className="img-placeholder"></div>
          )}

          <div className="card-content">
            <h4>{title}</h4>
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

          .img-placeholder {
            background-color: var(--color-blue);
            width: 100%;
            height: 18rem;
            border-radius: var(--cardRadius);
          }

          picture,
          source,
          img {
            width: 100%;
            height: 18rem;
            object-fit: cover;
            border-radius: var(--cardRadius);
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
