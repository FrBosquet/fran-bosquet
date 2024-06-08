import { getDateString } from 'lib/dateFormatter'
import { Lang } from 'lib/posts'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '../lib/types'
import { Tag } from './Tag'

type Props = {
  post: Post
  lang: Lang
}

export const PostLink = ({ post, lang }: Props) => {
  return (
    <article className="group flex w-full gap-6 border-b border-white/30 transition-all">
      <div
        className="relative aspect-[1/2] w-28
		overflow-hidden
		transition-all
		image
    group-hover:brightness-125
    "
      >
        <Image
          fill
          alt={`imagen de ${post.image.author}`}
          blurDataURL={`/images/placeholder/${post.image.src}.webp`}
          className="bg-zinc-950"
          placeholder="blur"
          src={`/images/${post.image.src}.webp`}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex h-full flex-1 flex-col justify-between gap-2 py-4 lg:pt-6">
        <Link
          className="font-mono
          text-lg
              text-teal-200
              transition-all title
              group-hover:text-white
              sm:text-2xl
			"
          href={`${lang === 'en' ? '/en' : ''}/posts/${post.slug}`}
        >
          <h2>{post.title}</h2>
        </Link>

        {post.description ? (
          <p className="flex-1 pb-2 pr-2 text-sm text-teal-100/60 lg:text-base">
            {post.description}
          </p>
        ) : null}

        <div className="hidden flex-1 items-end gap-2 pt-4 sm:flex">
          {post.keywords.map((keyword) => (
            <Tag key={keyword} lang={lang}>
              {keyword}
            </Tag>
          ))}
        </div>

        <span className="text-xs text-orange-300/60 lg:text-sm">
          {getDateString(post.date, lang)}
        </span>
      </div>
    </article>
  )
}
