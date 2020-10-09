import PropTypes from 'prop-types'
import Meta from '@/components/meta'
import { getPost } from '@/lib/mdxData'
import { postPaths } from '@/lib/mdxPaths'
import Layout from '@/components/layout'
import { Section } from '@/components/section'
import Button from '@/components/button'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import rehypePrism from '@mapbox/rehype-prism'
import autolink from 'rehype-autolink-headings'
import slug from 'rehype-slug'
import { faLink } from '@fortawesome/free-solid-svg-icons'

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
          </div>
          <article className="article-content">{content}</article>
        </Section>
      </Layout>

      <style jsx>
        {`
          .article-front {
            margin-bottom: 6rem;
          }

          .article-categories {
            display: flex;
            gap: 1rem;
            list-style: none;
            margin-bottom: 2rem;
          }

          h5 {
            color: var(--color-gray-2);
            margin-top: 1rem;
          }

          .article-content {
            display: flex;
            width: 70ch;
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
        `}
      </style>
    </>
  )
}

BlogPost.propTypes = {
  source: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  frontMatter: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired
}

export async function getStaticProps({ params }) {
  const { content, frontMatter } = getPost(params.slug)

  const mdxSource = await renderToString(content, {
    mdxOptions: {
      rehypePlugins: [rehypePrism, slug, autolink]
    }
  })

  return {
    props: {
      source: mdxSource,
      frontMatter
    }
  }
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: postPaths.map((postPath) => ({
      params: {
        slug: postPath.replace(/\.mdx/, '')
      }
    }))
  }
}

export default BlogPost
