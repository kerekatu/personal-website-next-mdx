import CustomLink from '@/components/custom-link'
import { formatDate } from '@/lib/date'
import { capitalizeString } from '@/lib/transformText'

import PropTypes from 'prop-types'

export const Card = ({ children, variant, customPadding }) => {
  return (
    <>
      <div className={`card ${variant}`}>{children}</div>

      <style jsx>
        {`
          .card {
            width: 100%;
            height: 100%;
            display: block;
            border-radius: var(--cardRadius);
          }

          .primary {
            background-color: var(--color-blue);
            color: var(--color-white);
          }

          .secondary {
            background-color: var(--color-white-2);
            color: var(--color-black);
          }

          .tertiary {
            background-color: transparent;
            border: var(--cardBorder);
            box-shadow: var(--cardBoxShadow);
            color: var(--color-black);
          }

          .gradient-white {
            background-image: linear-gradient(
              135deg,
              var(--color-blue-2) 10%,
              var(--color-blue) 100%
            );
          }
        `}
      </style>

      <style jsx>
        {`
          .card {
            ${customPadding ? `padding: ${customPadding}` : 'padding: 2rem'};
          }
        `}
      </style>
    </>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  variant: PropTypes.string,
  customPadding: PropTypes.string
}

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
        <div className="blog-card">
          {coverImg && (
            <picture>
              <source srcSet={coverImg?.avif} type="image/avif" />
              <img src={coverImg?.jpg} alt="Thumbnail for Post" />
            </picture>
          )}

          <div className="blog-card-content">
            <h4>{title}</h4>
            <h5>{excerpt}</h5>
            <span className="date">{formatDate(publishedAt)}</span>

            {categories && (
              <ul>
                {categories.map((category) => (
                  <li key={category}>
                    <span className="category">
                      {capitalizeString(category)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </CustomLink>

      <style jsx>
        {`
          .blog-card {
            display: flex;
            flex-direction: column;
            border-radius: var(--cardRadius);
            gap: 2rem;
            height: 100%;
            margin: 0 -2rem;
            padding: 2.4rem 2rem;
          }

          .blog-card:hover {
            background-color: var(--color-white-2);
          }

          .blog-card-content {
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
            max-height: 5.8rem;
            overflow: hidden;
            text-overflow: ellipsis;
            position: relative;
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
            overflow-x: auto;
            padding: 0.2rem 0;
            scrollbar-width: none;
            white-space: nowrap;
          }

          ul:hover {
            scrollbar-width: thin;
          }

          .category {
            padding: 0.4rem 1.5rem;
            background-color: var(--color-white-4);
            border-radius: var(--buttonRadius-max);
            color: var(--color-black-2);
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
