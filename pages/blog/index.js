import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getPosts } from '@/lib/mdxData'
import { capitalizeString } from '@/utils/transformText'

import { BlogCard } from '@/components/card'
import Button from '@/components/button'
import { Section, SectionRow } from '@/layouts/section'
import Select from '@/components/select'
import Newsletter from '@/components/newsletter'

const SORTING_OPTIONS = ['Latest', 'Oldest']

const Blog = ({ postsData }) => {
  const [isFlowRow, setIsFlowRow] = useState(false)
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const [filteredPosts, setFilteredPosts] = useState(postsData)
  const [sorting, setSorting] = useState('Latest')

  // Searches for all categories inside of postsData and removes duplicates
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
      // Latest Date
      if (sortingType === SORTING_OPTIONS[0]) {
        return (
          b.frontMatter.publishedAt.split('-').join('') -
          a.frontMatter.publishedAt.split('-').join('')
        )

        // Oldest Date
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

  // Filters posts with activeCategory
  const filterPostsWithCategory = (category) => {
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

  // Invokes initial settings on mount
  useEffect(() => {
    filterCategories()
    sortPosts(sorting, filteredPosts)
  }, [])

  return (
    <>
      <Section
        gridColumns={isFlowRow ? '1fr' : 'repeat(3, minmax(0, 1fr))'}
        gridGap="4rem 6rem"
      >
        <SectionRow title="Blog">
          <Button
            variant={`tertiary ${isFlowRow ? 'active' : ''}`}
            onClick={() => setIsFlowRow(true)}
            icon="grip-lines"
          />
          <Button
            variant={`tertiary ${!isFlowRow ? 'active' : ''}`}
            onClick={() => setIsFlowRow(false)}
            icon="grip-horizontal"
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
                activeCategory === category ? 'quaternary active' : 'quaternary'
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
              icon="times"
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
