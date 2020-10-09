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
import { Section, SectionRow } from '@/components/section'
import Select from '@/components/select'
import Newsletter from '@/components/newsletter'

const SORTING_OPTIONS = ['Latest', 'Oldest']

const Blog = ({ postsData }) => {
  const [isFlowRow, setIsFlowRow] = useState(false)
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const [filteredPosts, setFilteredPosts] = useState(postsData)
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
      setCategories(filteredCategories)
    }
  }

  const sortPosts = (sortingType, data = filteredPosts) => {
    const sortedPosts = data.sort((a, b) => {
      // Latest
      if (sortingType === SORTING_OPTIONS[0]) {
        return (
          b.frontMatter.publishedAt.split('-').join('') -
          a.frontMatter.publishedAt.split('-').join('')
        )

        // Oldest
      } else if (sortingType === SORTING_OPTIONS[1]) {
        return (
          a.frontMatter.publishedAt.split('-').join('') -
          b.frontMatter.publishedAt.split('-').join('')
        )
      }
    })

    if (sortingType !== sorting) {
      setSorting(sortingType)
      setFilteredPosts(sortedPosts)
    }
  }

  const filterPostsWithCategory = (category) => {
    // TODO: Add Filtering by Multiple Categories
    if (activeCategory !== category) {
      setActiveCategory(category)
      sortPosts(sorting, postsData)
      setFilteredPosts(() =>
        postsData.filter((post) =>
          post.frontMatter.categories
            .map((category) => capitalizeString(category))
            .includes(capitalizeString(category))
        )
      )
    }
  }

  useEffect(() => {
    filterCategories()
    sortPosts(sorting, filteredPosts)
  }, [])

  return (
    <>
      <Layout>
        <Section
          gridColumns={isFlowRow ? '1fr' : 'repeat(3, minmax(0, 1fr))'}
          gridGap="4rem 6rem"
        >
          <SectionRow title="Blog">
            <Button
              variant={`tertiary ${isFlowRow ? 'active' : ''}`}
              onClick={() => setIsFlowRow(true)}
              icon={faGripLines}
            />
            <Button
              variant={`tertiary ${!isFlowRow ? 'active' : ''}`}
              onClick={() => setIsFlowRow(false)}
              icon={faGripHorizontal}
            />
            <Select
              options={SORTING_OPTIONS}
              selectedOption={sorting}
              handleSelect={sortPosts}
            />
          </SectionRow>

          <SectionRow>
            {categories.map((category) => (
              <Button
                variant={
                  activeCategory === category
                    ? 'quaternary active'
                    : 'quaternary'
                }
                label={category}
                key={category}
                onClick={() => {
                  filterPostsWithCategory(category)
                }}
              />
            ))}
            {activeCategory && (
              <Button
                variant="quaternary active"
                label="Reset"
                icon={faTimes}
                onClick={() => {
                  setActiveCategory(null)
                  setFilteredPosts(postsData)
                }}
              ></Button>
            )}
          </SectionRow>

          {filteredPosts &&
            filteredPosts.map((post) => {
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
        <Newsletter />
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
