import { PostLink } from 'components/post-link'
import { Lang, getPosts } from 'lib/posts'
import Link from 'next/link'

export default async function Page({
  params: { tag }
}: {
  params: { tag: string }
}) {
  const posts = await getPosts(Lang.EN, tag)

  return (
    <>
      <h1 className="pb-6 text-xl">
        Post containing tag{' '}
        <pre className="inline text-teal-300 hover:text-orange-400">
          {tag}
          <Link href="/en">(x)</Link>
        </pre>
      </h1>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-12">
        {posts.map((post) => {
          return <PostLink key={post.slug} lang={Lang.EN} post={post} />
        })}
      </section>
    </>
  )
}
