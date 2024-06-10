import { PostGrid } from 'components/post-grid'
import { PostLink } from 'components/post-link'
import { Lang, getPosts } from 'lib/posts'

export default async function Page() {
  const posts = await getPosts(Lang.EN)

  return (
    <>
      <h1 className="hidden">Posts:</h1>
      <PostGrid>
        {posts.map((post) => {
          return <PostLink key={post.slug} lang={Lang.EN} post={post} />
        })}
      </PostGrid>
    </>
  )
}
