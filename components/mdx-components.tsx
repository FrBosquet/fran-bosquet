import { YoutubeEmbed } from 'components/YoutubeEmbed'
import { PostHeader } from 'components/post-header'
import Image from 'next/image'
import imageSizes from 'public/images/image_sizes.json'
import { HTMLAttributes } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Tweet } from 'react-tweet'

const code = (props: HTMLAttributes<HTMLElement>) => {
  const { children, className } = props

  if (!children) return null

  const isBlock = (children as string).includes('\n')

  if (!isBlock)
    return (
      <code
        {...props}
        className="inline-block rounded-md bg-gray-900 px-1 leading-8 text-teal-200"
      >
        {children}
      </code>
    )

  const meta = className?.replace('language-', '')

  const [language, filename] = meta?.split('@') ?? []

  return (
    <article className="overflow-hidden rounded-xl border border-teal-50/25 bg-zinc-950 shadow-xl">
      {filename ? (
        <header className="p-2 text-xs text-zinc-500">{filename}</header>
      ) : null}
      <SyntaxHighlighter
        wrapLongLines
        customStyle={{ borderRadius: 0, margin: 0 }}
        language={language}
        style={dracula}
      >
        {children as string}
      </SyntaxHighlighter>
    </article>
  )
}

export const mdxComponents = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mb-4 mt-8 bg-gradient-to-r from-teal-200 to-orange-200 bg-clip-text text-4xl text-transparent">
      {props.children}
    </h1>
  ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-3 text-3xl font-medium text-orange-300">
      {props.children}
    </h2>
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mb-1 text-2xl text-orange-200 ">{props.children}</h3>
  ),
  h4: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mb-1 text-xl text-orange-100 ">{props.children}</h3>
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="pb-3 text-sm font-medium leading-7 tracking-wide md:text-lg md:leading-10 md:tracking-normal">
      {props.children}
    </p>
  ),
  img: (props: any) => {
    const { width, height } = imageSizes[props.src as keyof typeof imageSizes]
    const [alt, caption] = props.alt.split('@')

    const hasCaption = caption !== undefined

    return (
      <figure className="m-auto mb-1">
        <Image
          alt={alt}
          blurDataURL={`/images/placeholder/${props.src}.webp`}
          height={height}
          loading="lazy"
          placeholder="blur"
          src={`/images/${props.src}.webp`}
          width={width}
        />
        {hasCaption ? (
          <figcaption className="text-center text-xs text-slate-300">
            {caption || alt}
          </figcaption>
        ) : null}
      </figure>
    )
  },
  blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="mb-4 rounded-lg bg-gray-950 p-3 text-sm leading-8 tracking-wide text-slate-100 shadow-md md:text-lg">
      {props.children}
    </blockquote>
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 text-lg">{props.children}</ul>
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => (
    <li className="ml-4 list-item list-disc py-2 text-sm md:text-lg">
      {props.children}
    </li>
  ),
  a: (props: HTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className="text-orange-400 visited:text-teal-300"
      target="_blank"
      title={typeof props.children === 'string' ? props.children : 'link'}
    >
      {props.children}
    </a>
  ),
  em: (props: HTMLAttributes<HTMLElement>) => (
    <em {...props} className="font-light text-gray-400">
      {props.children}
    </em>
  ),
  code,
  PostHeader,
  YoutubeEmbed,
  Tweet: (props: any) => (
    <div className="flex justify-center">
      <Tweet {...props} />
    </div>
  )
}
