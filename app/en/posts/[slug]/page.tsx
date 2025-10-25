import { PostBacklink } from 'components/post-backlink'
import { PostContent } from 'components/post-content'
import { PostHeader } from 'components/post-header'
import { Lang, engDescription, getPost, getPostSlugs } from 'lib/posts'
import { Metadata } from 'next'

type Props = {
  params: {
    slug: string
  }
}

export default async function Page({ params: { slug } }: Props) {
  const { frontmatter, content } = await getPost(slug, Lang.EN)

  return (
    <PostContent>
      <PostBacklink href="/en" />
      <PostHeader lang={Lang.EN} {...frontmatter} slug={slug} />
      {content}
    </PostContent>
  )
}

export async function generateStaticParams() {
  const filenames = getPostSlugs(Lang.EN)

  return filenames.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug, Lang.EN)

  return {
    title: `${post.frontmatter.title as string} | Fran Bosquet`,
    description: (post.frontmatter.description as string) || engDescription,
    robots: 'index, follow',
    alternates: {
      canonical: `/posts/${params.slug}`,
      languages: {
        'es-ES': `/posts/${params.slug}`,
        'en-US': `/en/posts/${params.slug}`
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.frontmatter.title as string} | Fran Bosquet`,
      description: (post.frontmatter.description as string) || engDescription,
      creator: '@frbosquet',
      images: ['/images/${post.frontmatter.image.src}.webp']
    },
    openGraph: {
      description: (post.frontmatter.description as string) || engDescription,
      type: 'website',
      locale: 'es_ES',
      siteName: 'Fran Bosquet',
      images: [
        {
          url: `/images/${post.frontmatter.image.src}.webp`,
          width: 700,
          height: 700,
          alt: 'Fran Bosquet'
        }
      ]
    }
  }
}
