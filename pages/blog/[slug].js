import PropTypes from 'prop-types'
import { prismStyle } from '@/styles/prismStyles'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'

// TODO: Find a way to include only needed languages to decrease the bundle size (maybe refractor?)
import rehypePrism from '@mapbox/rehype-prism'

import autolink from 'rehype-autolink-headings'
import slug from 'rehype-slug'

// TODO: Develop a better solution for TOC
// import toc from 'rehype-toc'

import Meta from '@/components/meta'
import Layout from '@/components/layout'
import { Section } from '@/components/section'
import Button from '@/components/button'
import { getPost } from '@/lib/mdxData'
import { postPaths } from '@/lib/mdxPaths'
import { formatDate } from '@/lib/date'

const BlogPost = ({ source, frontMatter }) => {
  const content = hydrate(source)

  return (
    <>
      <Meta pageSubtitle={frontMatter.title} />
      <Layout>
        <Section>
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

            {frontMatter.coverImg && (
              <div className="article-cover">
                <picture>
                  <source
                    srcSet={frontMatter.coverImg?.avif}
                    type="image/avif"
                  />
                  <img
                    src={frontMatter.coverImg?.jpg}
                    alt="Thumbnail for Post"
                  />
                </picture>
              </div>
            )}
          </div>
          <article className="article-content">{content}</article>
          <span className="article-date">
            Post published: {formatDate(frontMatter.publishedAt)}
          </span>
        </Section>
      </Layout>

      <style jsx>
        {`
          .article-front {
            margin-bottom: 10rem;
          }

          .article-categories {
            display: flex;
            gap: 1rem;
            list-style: none;
            margin-bottom: 2rem;
          }

          .article-categories :global(button) {
            cursor: initial;
          }

          h5 {
            color: var(--color-gray-2);
            margin-top: 1rem;
          }

          .article-date {
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

          .article-content :global(p) {
            line-height: var(--lineHeight-body);
            font-size: var(--headingSize-5);
          }

          .article-content :global(h1, h2, h3, h4, h5) {
            line-height: var(--lineHeight-body);
            color: var(--color-primary);
          }

          .article-content :global(nav > ol) {
            list-style-position: inside;
            color: var(--color-primary);
          }

          .article-content :global(::marker) {
            color: var(--color-text);
          }

          .article-content :global(a) {
            color: var(--color-primary);
            font-weight: 700;
          }

          .article-content :global(a:hover) {
            text-decoration: underline;
          }

          .article-content :global(strong, em) {
            font-weight: 700;
          }
        `}
      </style>

      <style jsx>{prismStyle}</style>
    </>
  )
}

BlogPost.propTypes = {
  source: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  frontMatter: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
}

export async function getStaticProps({ params }) {
  const { content, frontMatter } = getPost(params.slug)

  const mdxSource = await renderToString(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypePrism,
        slug,
        [autolink, { behaviour: 'wrap' }],
        // toc,
      ],
    },
  })

  return {
    props: {
      source: mdxSource,
      frontMatter,
    },
  }
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: postPaths.map((postPath) => ({
      params: {
        slug: postPath.replace(/\.mdx/, ''),
      },
    })),
  }
}

export default BlogPost
