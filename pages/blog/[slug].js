import PropTypes from 'prop-types'
import Meta from '@/components/meta'
import { getPost } from '@/lib/mdxData'
import { postPaths } from '@/lib/mdxPaths'

const BlogPost = ({ postData }) => {
  const { slug, content, frontMatter } = postData

  return <Meta pageSubtitle={frontMatter.title} />
}

BlogPost.propTypes = {
  postData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
}

export async function getStaticProps({ params }) {
  const postData = getPost(params.slug)

  return {
    props: {
      postData
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
