import { PostLink } from "components/PostLink"
import { getPosts } from "lib/posts"

export default async function Page() {
  const posts = await getPosts()

  return <section className='flex flex-col gap-4 py-6'>
    {posts.map(post => {
      return <PostLink post={post} key={post.slug} />
    })}
  </section>
}