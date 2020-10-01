import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import { postPaths, PATH } from '@/lib/mdxPaths'

// Fetches content of a specific .mdx file from the PATH directory with slug

export const getPost = (slug) => {
  const post = postPaths
    .filter((path) => slug === path.replace(/\.mdx/, ''))
    .join('')

  const content = fs.readFileSync(path.join(PATH, post), 'utf8')

  return {
    slug: post.replace(/\.mdx/, ''),
    content,
    frontMatter: matter(content).data
  }
}

// Fetches content of all .mdx files from the PATH directory

export const getPosts = () => {
  return postPaths.map((post) => {
    const content = fs.readFileSync(path.join(PATH, post), 'utf8')

    return {
      slug: post.replace(/\.mdx/, ''),
      content,
      frontMatter: matter(content).data
    }
  })
}
