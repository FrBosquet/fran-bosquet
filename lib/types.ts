export type Post = {
  title: string
  description?: string
  slug: string
  date: string
  keywords: string[]
  published: boolean
  featured?: boolean
  image: {
    src: string
    author: string
    authorUrl: string
    source?: string
    sourceUrl?: string
  }
}
