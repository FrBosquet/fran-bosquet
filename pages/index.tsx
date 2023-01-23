import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Tag } from '../components/Tag'
import { dateFormatter } from '../lib/dateFormatter'
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
          return <Link href={`/${post.slug}`} key={post.title} className="w-full p-2 sm:p-3 gap-2 bg-gray-600 flex hover:bg-gray-900 transition-all rounded-lg">
            <div className='aspect-square w-20 relative rounded-md overflow-hidden'>
              <Image alt={`imagen de ${post.image.author}`} src={`/images/${post.image.src}`} fill/>
            </div>
            <div className='flex justify-between flex-col flex-1 h-20'>
              <h2 className='text-2xl text-orange-400'>{post.title}</h2>
              <div className='flex justify-between '>
                <div className='gap-2 flex-1 hidden sm:flex'>
                  {post.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </div>
                <span className='text-gray-800'>
                  {dateFormatter.format(new Date(post.date))}
                </span>
              </div>
            </div>
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