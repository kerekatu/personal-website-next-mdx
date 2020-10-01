import fs from 'fs'
import path from 'path'

export const PATH = path.join(process.cwd(), 'posts')

// Get all mdx filenames from the PATH directory

export const postPaths = fs
  .readdirSync(PATH)
  .filter((path) => /\.mdx?$/.test(path))
