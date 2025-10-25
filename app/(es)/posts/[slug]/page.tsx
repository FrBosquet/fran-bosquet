import { PostBacklink } from 'components/post-backlink'
import { PostContent } from 'components/post-content'
import { PostHeader } from 'components/post-header'
import { Lang, baseDescription, getPost, getPostSlugs } from 'lib/posts'
import { Metadata } from 'next/types'

type Props = {
  params: {
    slug: string
  }
}

export default async function Page({ params: { slug } }: Props) {
  const { frontmatter, content } = await getPost(slug, Lang.ES)

  return (
    <PostContent>
      <PostBacklink href="/" />
      <PostHeader lang={Lang.ES} {...frontmatter} slug={slug} />
      {content}
    </PostContent>
  )
}

export async function generateStaticParams() {
  const filenames = getPostSlugs(Lang.ES)

  return filenames.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug, Lang.ES)

  return {
    title: `${post.frontmatter.title as string} | Fran Bosquet`,
    description: (post.frontmatter.description as string) || baseDescription,
    robots: 'index, follow',
    alternates: {
      canonical: `/posts/${params.slug}`,
      languages: {
        'es-ES': `/posts/${params.slug}`,
        ...(post.frontmatter.enSlug && {
          'en-US': `https://www.en.franbosquet.com/posts/${post.frontmatter.enSlug}`
        })
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.frontmatter.title as string} | Fran Bosquet`,
      description: (post.frontmatter.description as string) || baseDescription,
      creator: '@frbosquet',
      images: [`/images/${post.frontmatter.image.src}.webp`]
    },
    openGraph: {
      description: (post.frontmatter.description as string) || baseDescription,
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
