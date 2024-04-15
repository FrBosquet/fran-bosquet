import { PostLink } from "components/PostLink"
import { PostGrid } from "components/post-grid"
import { getPosts } from "lib/posts"

export default async function Page() {
  const posts = await getPosts()

  return <>
    <h1 className="hidden">Posts:</h1>
    <PostGrid>
      {posts.map((post) => {
        return <PostLink post={post} key={post.slug} />
      })}
    </PostGrid>
  </>
}