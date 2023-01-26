import Head from 'next/head'
import { PostLink } from '../components/PostLink'
import { getPosts } from '../lib/getPosts'
import { Post } from '../lib/types'

type Props = {
  posts: Post[]
}

export default function Home({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Fran Bosquet</title>
        <meta name="description" content="Blog de Fran Bosquet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='flex flex-col gap-4'>
        {posts.map(post => {
          return <PostLink post={post} key={post.slug} />
        })}
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts()

  return {
    props: {
      posts
    }
  }
}