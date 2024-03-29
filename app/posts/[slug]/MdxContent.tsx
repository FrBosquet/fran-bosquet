'use client'
import { PostHeader } from 'components/PostHeader';
import { YoutubeEmbed } from 'components/YoutubeEmbed';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { HTMLAttributes } from 'react';
import { Tweet } from 'react-tweet';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type MdxContentProps = {
  source: MDXRemoteSerializeResult
};

const code = (props: HTMLAttributes<HTMLElement>) => {
  const { children, className } = props

  if (!children) return null

  const isBlock = (children as string).includes('\n');

  if (!isBlock) return <code {...props} className="bg-gray-900 text-teal-200 p-1 rounded-md">{children}</code>

  const meta = className?.replace('language-', '')

  const [language, filename] = meta?.split('@') ?? []

  return <article className='overflow-hidden rounded-xl bg-zinc-950 border border-teal-50/25 shadow-xl'>
    {
      filename
        ? <header className='text-xs text-zinc-500 p-2'>{filename}</header>
        : null
    }
    <SyntaxHighlighter wrapLongLines language={language} style={dracula} customStyle={{ borderRadius: 0, margin: 0 }}>
      {children as string}
    </SyntaxHighlighter>
  </article>
}

const mdxComponents = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => <h1 className='text-4xl bg-gradient-to-r from-teal-200 to-orange-200 bg-clip-text text-transparent mt-8 mb-4'>{props.children}</h1>,
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => <h2 className='text-3xl font-medium text-orange-300 mt-3'>{props.children}</h2>,
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => <h3 className='text-2xl text-orange-200 mb-1 '>{props.children}</h3>,
  p: (props: HTMLAttributes<HTMLParagraphElement>) => <p className='text-lg font-ligth pb-3 leading-8 tracking-[0.1rem]'>{props.children}</p>,
  img: (props: any) => <img className="w-auto mb-1" alt={props.alt} src={props.src} />,
  blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => <blockquote className="p-3 bg-gray-950 rounded-lg mb-4 shadow-md text-lg text-slate-100 leading-8 tracking-wide">{props.children}</blockquote>,
  ul: (props: HTMLAttributes<HTMLUListElement>) => <ul className="mb-4">{props.children}</ul>,
  li: (props: HTMLAttributes<HTMLLIElement>) => <li className="ml-4 list-item list-disc">{props.children}</li>,
  a: (props: HTMLAttributes<HTMLAnchorElement>) => <a {...props} target="_blank" className="text-orange-400 visited:text-teal-300">{props.children}</a>,
  em: (props: HTMLAttributes<HTMLElement>) => <em {...props} className="font-ligh text-gray-400">{props.children}</em>,
  code,
  PostHeader,
  YoutubeEmbed,
  Tweet: (props: any) => <div className='flex justify-center'><Tweet {...props} /></div>,
}

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={mdxComponents} />;
}