import PropTypes from 'prop-types'
import { getPosts } from '@/lib/mdxData'

import Layout from '@/components/layout'
import Grid from '@/components/grid'
import Card from '@/components/card'

const Blog = ({ postsData }) => {
  console.log(postsData)
  return (
    <Layout>
      <Grid gridDisplay="grid" gridColumns="repeat(3, 1fr)" gridGap="4rem">
        {postsData.map((post) => {
          const { slug, frontMatter } = post

          return (
            <Card
              href={`/blog/${slug}`}
              title={frontMatter.title}
              coverImg={frontMatter.coverImg}
              key={slug}
            />
          )
        })}
      </Grid>
    </Layout>
  )
}

export async function getStaticProps() {
  const postsData = getPosts()

  return {
    props: {
      postsData
    }
  }
}

Blog.propTypes = {
  postsData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
}

export default Blog
