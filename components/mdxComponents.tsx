/* eslint-disable @next/next/no-img-element */
import { HTMLAttributes } from "react"

const h1 = (props: HTMLAttributes<HTMLHeadingElement>) => <h1 className='text-2xl text-violet-400 mt-4 mb-2'>{props.children}</h1>
const h2 = (props: HTMLAttributes<HTMLHeadingElement>) => <h2 className='text-lg font-medium text-orange-300 mt-4 mb-2'>{props.children}</h2>
const h3 = (props: HTMLAttributes<HTMLHeadingElement>) => <h3 className='text-md text-orange-200 mt-4 mb-1 '>{props.children}</h3>
const p = (props: HTMLAttributes<HTMLParagraphElement>) => <p className='text-sm font-ligth pb-3'>{props.children}</p>
const img = (props: HTMLImageElement) => <div className="flex flex-col items-center">
		<img className="w-auto" alt={props.alt} src={props.src}/>
		<p className="font-thin">{props.alt}</p>
</div>

export const mdxComponents = {
	h1,
	h2,
	h3,
	p,
	img
}