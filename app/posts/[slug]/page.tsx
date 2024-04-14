import { PostHeader } from "components/PostHeader";
import { BackIcon } from "components/icons";
import { baseDescription, getPost, getPostSlugs } from "lib/posts";
import { Post } from "lib/types";
import { Metadata } from "next";
import Link from "next/link";
import { MdxContent } from "./MdxContent";

type Props = {
  params: {
    slug: string
  }
}

export default async function Page({ params: { slug } }: Props) {
  const post = await getPost(slug)
  const meta = post.frontmatter as Post

  return <section className='flex flex-col gap-4 py-6 relative container max-w-[700px] mx-auto'>
    <aside className="sticky top-0 h-0 hidden md:block">
      <Link href="/" title="Volver" className="-left-20 p-8 text-white hover:text-teal-400 hover:-left-24 absolute transition-all">
        <BackIcon className="w-6 h-6 transition-all" />
      </Link>
    </aside>
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
    title: `${post.frontmatter.title as string} | Fran Bosquet`,
    description: post.frontmatter.description as string || baseDescription,
    robots: 'index, follow',
  }
}