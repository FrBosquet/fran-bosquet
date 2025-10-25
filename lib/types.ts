export type Post = {
  title: string
  description?: string
  slug: string
  date: string
  keywords: string[]
  published: boolean
  featured?: boolean
  enSlug?: string
  esSlug?: string
  image: {
    src: string
    author: string
    authorUrl: string
    source?: string
    sourceUrl?: string
  }
}
