import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import CustomLink from '@/components/custom-link'
import { formatDate } from '@/lib/date'
import { capitalizeString } from '@/utils/transformText'

export const Card = ({ children, variant, customPadding }) => {
  return (
    <CardWrapper styleCustomPadding={customPadding} className={variant}>
      {children}
    </CardWrapper>
  )
}

export const BlogCard = ({
  title,
  excerpt,
  publishedAt,
  categories,
  coverImg,
  href,
}) => {
  return (
    <CustomLink href={href}>
      <BlogCardWrapper>
        {coverImg && (
          <picture>
            <source srcSet={coverImg?.avif} type="image/avif" />
            <img src={coverImg?.jpg} alt="Thumbnail for Post" />
          </picture>
        )}

        <div>
          <h4>{title}</h4>
          <h5>{excerpt}</h5>
          <span className="date">{formatDate(publishedAt)}</span>

          {categories && (
            <ul>
              {categories.map((category) => (
                <li key={category}>
                  <span className="category">{capitalizeString(category)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </BlogCardWrapper>
    </CustomLink>
  )
}

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: var(--cardRadius);
  ${({ styleCustomPadding }) => ({
    padding: styleCustomPadding || 'padding: 2rem',
  })}

  &.primary {
    background-color: var(--color-blue);
    color: var(--color-white);
  }

  &.secondary {
    background-color: var(--color-white-2);
    color: var(--color-black);
  }

  &.tertiary {
    background-color: transparent;
    border: var(--cardBorder);
    box-shadow: var(--cardBoxShadow);
    color: var(--color-black);
  }
`

const BlogCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--cardRadius);
  gap: 2rem;
  height: 100%;
  margin: 0 -2rem;
  padding: 2.4rem 2rem;
  transition: background-color var(--baseTransition);

  &:hover {
    background-color: var(--color-white-2);
  }

  & h5 {
    color: var(--color-black-3);
    font-weight: 400;
    max-height: 5.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
  }

  & picture {
    display: block;
  }

  & picture,
  & source,
  & img {
    width: 100%;
    height: 18rem;
    object-fit: cover;
    border-radius: var(--cardRadius);
  }

  &.date {
    display: block;
    margin-top: 1.4rem;
    color: var(--color-gray);
  }

  & ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    overflow-x: auto;
    padding: 0.2rem 0;
    scrollbar-width: none;
    white-space: nowrap;
  }

  & ul:hover {
    scrollbar-width: thin;
  }

  & .category {
    padding: 0.4rem 1.5rem;
    background-color: var(--color-white-4);
    border-radius: var(--buttonRadius-max);
    color: var(--color-black-2);
  }
`

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  variant: PropTypes.string,
  customPadding: PropTypes.string,
}

BlogCard.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  categories: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  publishedAt: PropTypes.string,
  coverImg: PropTypes.object,
  href: PropTypes.string.isRequired,
}
