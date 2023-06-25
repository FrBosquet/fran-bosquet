import { PostHeader } from "components/PostHeader";
import { getPost, getPostSlugs } from "lib/posts";
import { Post } from "lib/types";
import { Metadata } from "next";
import { MdxContent } from "./MdxContent";

type Props = {
  params: {
    slug: string
  }
}

export default async function Page({ params: { slug } }: Props) {
  const post = await getPost(slug)
  const meta = post.frontmatter as Post

  return <section className='flex flex-col gap-4 py-6'>
    <PostHeader {...meta} />
    <MdxContent source={post} />
  </section>
}

export async function generateStaticParams() {
  const filenames = getPostSlugs()

  return filenames.map(slug => ({ slug }))
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const post = await getPost(params.slug)

  return {
    title: post.frontmatter.title as string,
  }
}