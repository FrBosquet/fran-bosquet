import { Lang } from 'lib/posts'
import Image from 'next/image'
import { getDateString } from '../lib/dateFormatter'
import { Post } from '../lib/types'
import { Tag } from './Tag'

type Props = Post & { lang: Lang }

export const PostHeader = ({
  title,
  date,
  keywords,
  image,
  description,
  lang,
  slug
}: Props) => {
  return (
    <header className="mb-4 border-b-2 border-gray-500 pb-2">
      <h1 className="bg-gradient-to-r from-teal-100 to-orange-200 bg-clip-text py-2 font-mono text-4xl text-transparent md:text-5xl" style={{
        viewTransitionName: slug
      }}>
        {title}
      </h1>
      {description ? (
        <p style={{
          viewTransitionName: `desc-${slug}`,
        }} className="py-4 text-sm uppercase text-teal-200">{description}</p>
      ) : null}
      {image ? (
        <>
          <Image
            priority
            alt="splash"
            blurDataURL={`/images/placeholder/${image.src}.webp`}
            className="relative my-2 h-60 w-full overflow-hidden rounded-lg shadow-lg"
            height={240}
            placeholder="blur"
            src={`/images/${image.src}.webp`}
            style={{ objectFit: 'cover' }}
            title="splash"
            width={700}
          />
          <section className="pb-1 text-xs text-slate-600">
            <div>
              Foto de{' '}
              <a
                className="text-slate-500 transition hover:text-teal-300"
                href={image.authorUrl || image.sourceUrl}
                title={image.author}
              >
                {image.author}
              </a>{' '}
              {image.sourceUrl ? (
                <>
                  en{' '}
                  <a
                    className="text-slate-500 transition hover:text-teal-300"
                    href={image.sourceUrl}
                    title={image.source}
                  >
                    {image.source}
                  </a>
                </>
              ) : null}
            </div>
          </section>
        </>
      ) : null}
      <div className="flex items-end justify-between">
        <div className="flex gap-2 py-2">
          {keywords.map((keyword) => (
            <Tag key={keyword} lang={lang}>
              {keyword}
            </Tag>
          ))}
        </div>
        <span className="text-sm text-orange-300">
          {getDateString(date, lang)}
        </span>
      </div>
    </header>
  )
}
