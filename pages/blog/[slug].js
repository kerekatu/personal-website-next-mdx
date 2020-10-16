import PropTypes from 'prop-types'
import { prismStyle } from '@/styles/prismStyles'
import renderToString from 'next-mdx-remote/render-to-string'
import { Global } from '@emotion/core'

// TODO: Find a way to include only needed languages to decrease the bundle size (maybe refractor?)
import rehypePrism from '@mapbox/rehype-prism'

// TODO: Develop a better solution for TOC
// import toc from 'rehype-toc'
// import autolink from 'rehype-autolink-headings'
// import slug from 'rehype-slug'

import Meta from '@/components/meta'
import { Section } from '@/layouts/section'
import BlogArticle from '@/layouts/blog-article'

import { getPost } from '@/lib/mdxData'
import { postPaths } from '@/lib/mdxPaths'
import Newsletter from '@/components/newsletter'

const BlogPost = ({ source, frontMatter }) => {
  return (
    <>
      <Meta pageSubtitle={frontMatter.title} />
      <Section initialPadding={false}>
        <BlogArticle source={source} frontMatter={frontMatter} />
        <Newsletter />
      </Section>
      <Global styles={prismStyle} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const { content, frontMatter } = getPost(params.slug)

  const mdxSource = await renderToString(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypePrism,
        // slug,
        // [autolink, { behaviour: 'wrap' }],
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

BlogPost.propTypes = {
  source: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  frontMatter: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
}

export default BlogPost
