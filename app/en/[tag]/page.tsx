import { PostLink } from "components/PostLink"
import { Lang, getPosts } from "lib/posts"
import Link from "next/link"

export default async function Page({ params: { tag } }: { params: { tag: string } }) {
  const posts = await getPosts(Lang.EN, tag)

  return <>
    <h1 className='text-xl pb-6'>Post containing tag <pre className="inline text-teal-300 hover:text-orange-400">{tag}<Link href='/'>(x)</Link></pre></h1>
    <section className='grid gap-4 lg:gap-8 xl:gap-12 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
      {posts.map((post) => {
        return <PostLink post={post} key={post.slug} lang={Lang.EN} />
      })}
    </section>
  </>
}