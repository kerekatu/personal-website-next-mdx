import { Fragment } from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import { formatDate } from '@/lib/date'

const BlogArticle = ({ source, frontMatter }) => {
  const content = hydrate(source)

  return (
    <>
      <BlogArticleWrapper>
        <div className="article-front">
          <span className="article-details">
            {formatDate(frontMatter.publishedAt, 'MMMM dd, yyyy')} &bull;{' '}
            {frontMatter.categories.join(', ')}
          </span>
          <h2>{frontMatter.title}</h2>
          <h5>{frontMatter.excerpt}</h5>

          {frontMatter.coverImg && (
            <div className="article-cover">
              <picture>
                <source srcSet={frontMatter.coverImg?.avif} type="image/avif" />
                <img src={frontMatter.coverImg?.jpg} alt="Thumbnail for Post" />
              </picture>
            </div>
          )}
        </div>
        <article className="article-content">{content}</article>
        <div className="article-back">{/* SHARE */}</div>
      </BlogArticleWrapper>

      <Global
        styles={css`
          .article-content p {
            line-height: var(--lineHeight-post);
            font-size: var(--headingSize-5);
          }

          .article-content nav > ol {
            list-style-position: inside;
            color: var(--color-primary);
          }

          .article-content ::marker {
            color: var(--color-text);
          }

          .article-content a {
            color: var(--color-primary);
            font-weight: 700;
          }

          .article-content a:hover {
            text-decoration: underline;
          }

          .article-content strong {
            font-weight: 700;
          }

          .article-content em {
            background-color: var(--color-primary);
            font-style: normal;
            color: var(--color-white);
            padding: 0.3rem 0.8rem;
            border-radius: var(--buttonRadius);
          }

          .article-content h1,
          .article-content h2,
          .article-content h3,
          .article-content h4,
          .article-content h5 {
            margin-top: 4rem;
          }
        `}
      />
    </>
  )
}

const BlogArticleWrapper = styled.div`
  padding: 6rem 0 20rem 0;
  margin: 0 auto;
  width: 70ch;

  .article-front {
    margin-bottom: 6rem;
  }

  .article-front > h5 {
    margin-top: 2rem;
    color: var(--color-gray-2);
  }

  .article-details {
    display: block;
    margin-bottom: 2rem;
    color: var(--color-primary);
    font-weight: 700;
    text-align: center;
  }

  .article-cover {
    margin-top: 4rem;
    padding: 1.5rem;
    border: 0.2rem solid var(--color-white-2);
    border-radius: var(--cardRadius);
  }

  picture {
    display: block;
    box-shadow: var(--cardBoxShadow);
  }

  picture,
  source,
  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
    border-radius: var(--cardRadius);
  }

  .article-content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem 0;
  }
`

BlogArticle.propTypes = {
  source: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  frontMatter: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
}

export default BlogArticle
