/* eslint-disable @next/next/no-img-element */
import { FC, HTMLAttributes } from "react"

const h1 = (props: HTMLAttributes<HTMLHeadingElement>) => <h1 className='text-2xl text-violet-400 mb-4'>{props.children}</h1>
const h2 = (props: HTMLAttributes<HTMLHeadingElement>) => <h2 className='text-lg font-medium text-orange-300 mb-4'>{props.children}</h2>
const h3 = (props: HTMLAttributes<HTMLHeadingElement>) => <h3 className='text-md text-orange-200 mb-1 '>{props.children}</h3>
const p = (props: HTMLAttributes<HTMLParagraphElement>) => <p className='text-sm font-ligth pb-3'>{props.children}</p>
const img = (props: any) => <div className="flex flex-col items-center my-4">
		<img className="w-auto" alt={props.alt} src={props.src}/>
		<p className="font-thin">{props.alt}</p>
</div>
const blockquote = (props: HTMLAttributes<HTMLParagraphElement>) => <blockquote className="p-3 bg-gray-800 rounded-lg mb-4">{props.children}</blockquote>

export const mdxComponents: Record<string, FC> = {
	h1,
	h2,
	h3,
	p,
	img,
	blockquote
}