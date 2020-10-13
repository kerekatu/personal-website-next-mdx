import hydrate from 'next-mdx-remote/hydrate'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import Button from '@/components/button'
import { formatDate } from '@/lib/date'
import Newsletter from './newsletter'

const BlogArticle = ({ source, frontMatter }) => {
  const content = hydrate(source)

  return (
    <>
      <BlogArticleWrapper>
        <div className="article-front">
          <ul className="article-categories">
            {frontMatter.categories.map((category) => (
              <li key={category}>
                <Button variant="quaternary active" label={category} />
              </li>
            ))}
          </ul>
          <h1>{frontMatter.title}</h1>
          <h5 className="article-excerpt">{frontMatter.excerpt}</h5>

          {/* {frontMatter.coverImg && (
            <div className="article-cover">
              <picture>
                <source srcSet={frontMatter.coverImg?.avif} type="image/avif" />
                <img src={frontMatter.coverImg?.jpg} alt="Thumbnail for Post" />
              </picture>
            </div>
          )} */}
        </div>
        <article className="article-content">{content}</article>
        <div className="article-back">
          <span className="article-date">
            Post published: {formatDate(frontMatter.publishedAt)}
          </span>
          <Newsletter />
        </div>
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

          .article-categories > button {
            cursor: initial !important;
          }
        `}
      />
    </>
  )
}

const BlogArticleWrapper = styled.div`
  .article-front {
    margin-bottom: 10rem;
  }

  .article-categories {
    display: flex;
    gap: 1rem;
    list-style: none;
    margin-bottom: 2rem;
  }

  .article-categories {
    cursor: initial;
  }

  h5 {
    color: var(--color-gray-2);
    margin-top: 1rem;
  }

  .article-date {
    display: block;
    color: var(--color-gray-2);
    margin-top: 4rem;
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
    height: 40rem;
    object-fit: cover;
    border-radius: var(--cardRadius);
  }

  .article-content {
    position: relative;
    display: flex;
    width: 80ch;
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
