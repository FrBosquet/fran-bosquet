import { mdxComponents } from 'components/mdx-components'
import fs from 'fs'
import { CompileMDXResult, compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import { cache } from 'react'
import remarkUnwrapImages from 'remark-unwrap-images'
import { Post } from './types'

const ignore = ['api', '_app.tsx', '_document.tsx', '_error.tsx', 'index.tsx']

export enum Lang {
  ES = 'es',
  EN = 'en'
}
const POSTS_DIRECTORY = path.join(process.cwd(), 'posts')

export const getPostsFileNames = (lang: Lang): string[] => {
  const fileNames = fs.readdirSync(path.join(POSTS_DIRECTORY, lang))

  return fileNames.filter((name) => !ignore.includes(name))
}

export const getPostSlugs = (lang: Lang): string[] => {
  const fileNames = getPostsFileNames(lang)

  return fileNames.map((name) => name.replace('.mdx', ''))
}

export const getPosts = async (
  lang?: Lang,
  keyword?: string
): Promise<Post[]> => {
  const fileNames = getPostsFileNames(lang ?? Lang.ES)

  const posts: Post[] = await Promise.all(
    fileNames
      .filter((name) => !ignore.includes(name))
      .map(async (name) => {
        const filename = path.join(POSTS_DIRECTORY, lang ?? Lang.ES, name)
        const raw = fs.readFileSync(filename)

        const { frontmatter } = await compileMDX<Post>({
          source: raw,
          components: mdxComponents,
          options: {
            parseFrontmatter: true
          }
        })

        return { ...frontmatter, slug: name.replace('.mdx', '') } as Post
      })
  )

  return posts
    .filter((post) => {
      if (keyword === 'debug_all_posts') return true

      const date = new Date(post.date)

      const isDev = process.env.NODE_ENV === 'development'

      if (date > new Date() && !isDev) return false

      return post.published && (!keyword || post.keywords?.includes(keyword))
    })
    .sort((a, b) =>
      new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1
    )
}

export const getPost = cache(
  async (slug: string, lang = Lang.ES): Promise<CompileMDXResult<Post>> => {
    const filename = path.join(POSTS_DIRECTORY, lang, slug + '.mdx')
    const raw = fs.readFileSync(filename)

    return await compileMDX<Post>({
      source: raw,
      components: mdxComponents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkUnwrapImages]
        }
      }
    })
  }
)

export const baseDescription =
  'Blog de programación web, tecnología y desarrollo de carrera. Tips para desarrollo de aplicaciones fullstack con Typescript, Next, Tailwind y otras tecnologías.'

export const engDescription =
  'Web dev, technology and career development blog. Tips for fullstack application development with Typescript, Next, Tailwind and other technologies.'
