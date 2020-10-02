import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getPosts } from '@/lib/mdxData'
import {
  faGripLines,
  faGripHorizontal
} from '@fortawesome/free-solid-svg-icons'

import Layout from '@/components/layout'
import { BlogCard } from '@/components/card'
import Button from '@/components/button'
import { Section, SectionTitle } from '@/components/section'

const Blog = ({ postsData }) => {
  const [isFlowRow, setIsFlowRow] = useState(false)
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const [filteredPosts, setFilteredPosts] = useState([])

  const filterCategories = () => {
    const allCategories = postsData.map((post) => post.frontMatter.categories)
    const concatedCategories = allCategories.concat.apply([], allCategories)
    const filteredPosts = concatedCategories.filter(
      (category, index) => concatedCategories.indexOf(category) === index
    )

    if (filteredPosts) {
      setCategories(() => filteredPosts)
    }
  }

  const filterPostsWithCategory = (category) => {
    setFilteredPosts(() =>
      postsData.filter((post) => post.frontMatter.categories.includes(category))
    )
  }

  useEffect(() => {
    const filter = filterCategories()

    return () => filter
  }, [])

  useEffect(() => {
    const filter = filterPostsWithCategory(activeCategory)

    return () => filter
  }, [activeCategory])

  console.log(filteredPosts)

  return (
    <>
      <Layout>
        <Section
          gridColumns={isFlowRow ? '1fr' : 'repeat(3, 1fr)'}
          gridGap="4rem 6rem"
        >
          <SectionTitle title="Blog">
            <Button
              variant={`tertiary ${isFlowRow && 'active'}`}
              onClick={() => setIsFlowRow(true)}
              icon={faGripLines}
            />
            <Button
              variant={`tertiary ${!isFlowRow && 'active'}`}
              onClick={() => setIsFlowRow(false)}
              icon={faGripHorizontal}
            />
          </SectionTitle>
          <SectionTitle>
            {categories.map((category) => (
              <Button
                variant="secondary"
                label={category}
                key={category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </SectionTitle>

          {filteredPosts !== []
            ? filteredPosts.map((post) => {
                const { slug, frontMatter } = post

                return (
                  <BlogCard
                    href={`/blog/${slug}`}
                    title={frontMatter.title}
                    excerpt={frontMatter.excerpt}
                    publishedAt={frontMatter.publishedAt}
                    categories={frontMatter.categories}
                    coverImg={!isFlowRow && frontMatter.coverImg}
                    key={slug}
                  />
                )
              })
            : postsData.map((post) => {
                const { slug, frontMatter } = post

                return (
                  <BlogCard
                    href={`/blog/${slug}`}
                    title={frontMatter.title}
                    excerpt={frontMatter.excerpt}
                    publishedAt={frontMatter.publishedAt}
                    categories={frontMatter.categories}
                    coverImg={!isFlowRow && frontMatter.coverImg}
                    key={slug}
                  />
                )
              })}
        </Section>
      </Layout>

      <style jsx>{``}</style>
    </>
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
