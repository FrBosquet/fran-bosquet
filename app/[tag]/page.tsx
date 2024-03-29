import { PostLink } from "components/PostLink"
import { getPosts } from "lib/posts"
import Link from "next/link"

export default async function Page({ params: { tag } }: { params: { tag: string } }) {
  const posts = await getPosts(tag)

  return <>
    <h1 className='text-xl pb-6'>Post que contienen el tag <pre className="inline text-teal-300 hover:text-orange-400">{tag}<Link href='/'>(x)</Link></pre></h1>
    <section className='grid gap-4 lg:gap-8 xl:gap-12 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
      {posts.map((post, index) => {
        return <PostLink post={post} key={post.slug} featured={index === 0} />
      })}
    </section>
  </>
}