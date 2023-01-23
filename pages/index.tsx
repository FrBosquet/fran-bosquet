import Head from 'next/head'
import Link from 'next/link'
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
      <section>
        {posts.map(post => {
          return <Link href={`/${post.slug}`} key={post.title}>
            <h2>{post.title}</h2>
          </Link>
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