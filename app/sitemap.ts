import { Lang, getPosts } from 'lib/posts'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.franbosquet.com'
  const enBaseUrl = 'https://www.en.franbosquet.com'

  // Get all posts for both languages
  const spanishPosts = await getPosts(Lang.ES)
  const englishPosts = await getPosts(Lang.EN)

  // Map Spanish posts to sitemap entries
  const spanishPostEntries: MetadataRoute.Sitemap = spanishPosts.map(
    (post) => ({
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.8
    })
  )

  // Map English posts to sitemap entries
  const englishPostEntries: MetadataRoute.Sitemap = englishPosts.map(
    (post) => ({
      url: `${enBaseUrl}/posts/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.8
    })
  )

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: enBaseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    ...spanishPostEntries,
    ...englishPostEntries
  ]
}
