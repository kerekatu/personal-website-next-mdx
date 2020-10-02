import CustomLink from '@/components/custom-link'

import PropTypes from 'prop-types'
import Button from './button'

export const BlogCard = ({
  title,
  excerpt,
  publishedAt,
  categories,
  coverImg,
  href
}) => {
  return (
    <>
      <CustomLink href={href}>
        <div className="card">
          {coverImg && (
            <picture>
              <source srcSet={coverImg?.avif} type="image/avif" />
              <img src={coverImg?.jpg} alt="Thumbnail for Post" />
            </picture>
          )}

          <div className="card-content">
            <h4>{title}</h4>
            <h5>{excerpt}</h5>
            <span className="date">{publishedAt}</span>

            {categories && (
              <ul>
                {categories.map((tag) => (
                  <li key={tag}>
                    <span className="category">{tag}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </CustomLink>

      <style jsx>
        {`
          .card {
            display: flex;
            flex-direction: column;
            border-radius: var(--cardRadius);
            gap: 2rem;
            margin: 0 -2rem;
            padding: 2.4rem 2rem;
          }

          .card:hover {
            background-color: var(--color-white-2);
          }

          .card-content {
            padding: 0;
          }

          .img-placeholder {
            background-color: var(--color-blue);
            width: 100%;
            height: 18rem;
            border-radius: var(--cardRadius);
          }

          h5 {
            color: var(--color-black-3);
            font-weight: 400;
          }

          picture {
            display: block;
          }

          picture,
          source,
          img {
            width: 100%;
            height: 18rem;
            object-fit: cover;
            border-radius: var(--cardRadius);
          }

          .date {
            display: block;
            margin-top: 1.4rem;
            color: var(--color-gray);
          }

          ul {
            list-style: none;
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
          }

          .category {
            padding: 0.4rem 1rem;
            background-color: var(--color-blue);
            border-radius: var(--buttonRadius-max);
            color: var(--color-white);
          }
        `}
      </style>
    </>
  )
}

BlogCard.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  categories: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  publishedAt: PropTypes.string,
  coverImg: PropTypes.object,
  href: PropTypes.string.isRequired
}
