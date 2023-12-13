import { PostLink } from "components/PostLink"
import { getPosts } from "lib/posts"

export default async function Page() {
  const posts = await getPosts()

  return <section className='grid gap-x-4 lg:gap-x-8 xl:gap-x-12 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
    {posts.map((post, index) => {
      return <PostLink post={post} key={post.slug} featured={index === 0} />
    })}
  </section>
}