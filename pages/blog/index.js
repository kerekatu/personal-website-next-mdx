import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getPosts } from '@/lib/mdxData'
import {
  faGripLines,
  faGripHorizontal,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { capitalizeString } from '@/lib/transformText'

import Layout from '@/components/layout'
import { BlogCard } from '@/components/card'
import Button from '@/components/button'
import { Section, SectionTitle } from '@/components/section'
import Select from '@/components/select'

const SORTING_OPTIONS = ['Latest', 'Oldest']

const Blog = ({ postsData }) => {
  const [isFlowRow, setIsFlowRow] = useState(false)
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const [filteredPosts, setFilteredPosts] = useState(null)
  const [sorting, setSorting] = useState('Latest')

  const filterCategories = () => {
    const allCategories = postsData.map((post) =>
      post.frontMatter.categories.map((category) => capitalizeString(category))
    )
    const concatedCategories = allCategories.concat.apply([], allCategories)
    const filteredCategories = concatedCategories.filter(
      (category, index) => concatedCategories.indexOf(category) === index
    )

    if (filteredCategories) {
      setCategories(() => filteredCategories)
    }
  }

  const filterPostsWithCategory = (category) => {
    setActiveCategory(() => capitalizeString(category))
    setFilteredPosts(() =>
      postsData.filter((post) =>
        post.frontMatter.categories
          .map((category) => capitalizeString(category))
          .includes(capitalizeString(category))
      )
    )
  }

  const sortPosts = (sorting) => {
    setSorting(() => sorting)

    // ! NEEDS ABSTRACTION

    if (filteredPosts && sorting === SORTING_OPTIONS[0]) {
      // Sort by Latest
      const sortedPosts = filteredPosts.sort(
        (a, b) =>
          a.frontMatter.publishedAt.split('-').join('') -
          b.frontMatter.publishedAt.split('-').join('')
      )
      setFilteredPosts(() => sortedPosts)
    } else if (filteredPosts && sorting === SORTING_OPTIONS[1]) {
      // Sort by Oldest
      const sortedPosts = filteredPosts.sort(
        (a, b) =>
          b.frontMatter.publishedAt.split('-').join('') -
          a.frontMatter.publishedAt.split('-').join('')
      )
      setFilteredPosts(() => sortedPosts)
    } else if (!filteredPosts && sorting === SORTING_OPTIONS[0]) {
      // Sort by Latest
      return postsData.sort(
        (a, b) =>
          a.frontMatter.publishedAt.split('-').join('') -
          b.frontMatter.publishedAt.split('-').join('')
      )
    } else if (!filteredPosts && sorting === SORTING_OPTIONS[1]) {
      // Sort by Oldest
      return postsData.sort(
        (a, b) =>
          b.frontMatter.publishedAt.split('-').join('') -
          a.frontMatter.publishedAt.split('-').join('')
      )
    }
  }

  useEffect(() => {
    filterCategories()
  }, [])

  return (
    <>
      <Layout>
        <Section
          gridColumns={isFlowRow ? '1fr' : 'repeat(3, minmax(0, 1fr))'}
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
            <Select
              options={SORTING_OPTIONS}
              selectedOption={sorting}
              handleSelect={sortPosts}
            />
          </SectionTitle>

          <SectionTitle>
            {categories.map((category) => (
              <Button
                variant={
                  activeCategory === category
                    ? 'quaternary active'
                    : 'quaternary'
                }
                label={category}
                key={category}
                onClick={() => filterPostsWithCategory(category)}
              />
            ))}
            {activeCategory && (
              <Button
                variant="quaternary active"
                label="Reset"
                icon={faTimes}
                onClick={() => {
                  setActiveCategory(null)
                  setFilteredPosts(null)
                }}
              ></Button>
            )}
          </SectionTitle>

          {!filteredPosts
            ? postsData.map((post) => {
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
            : filteredPosts.map((post) => {
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
      postsData,
    },
  }
}

Blog.propTypes = {
  postsData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
}

export default Blog
