import { PostBacklink } from "components/post-backlink";
import { PostContent } from "components/post-content";
import { PostHeader } from "components/post-header";
import { Lang, engDescription, getPost, getPostSlugs } from "lib/posts";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string
  }
}

export default async function Page({ params: { slug } }: Props) {
  const { frontmatter, content } = await getPost(slug, Lang.EN)

  return <PostContent >
    <PostBacklink href="/en" />
    <PostHeader lang={Lang.EN} {...frontmatter} />
    {content}
  </PostContent>
}

export async function generateStaticParams() {
  const filenames = getPostSlugs(Lang.EN)

  return filenames.map(slug => ({ slug }))
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const post = await getPost(params.slug, Lang.EN)

  return {
    title: `${post.frontmatter.title as string} | Fran Bosquet`,
    description: post.frontmatter.description as string || engDescription,
    robots: 'index, follow',
  }
}