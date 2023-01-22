import { FunctionComponent, HTMLAttributes } from "react"

const h1 = (props: HTMLAttributes<HTMLHeadingElement>) => <h1 className='text-2xl text-violet-400 mt-4 mb-2'>{props.children}</h1>
const h2 = (props: HTMLAttributes<HTMLHeadingElement>) => <h2 className='text-lg font-medium text-orange-300 mt-4 mb-2'>{props.children}</h2>
const h3 = (props: HTMLAttributes<HTMLHeadingElement>) => <h3 className='text-md text-orange-200 mt-4 mb-1 '>{props.children}</h3>
const p = (props: HTMLAttributes<HTMLHeadingElement>) => <p className='text-sm font-ligth'>{props.children}</p>

export const mdxComponents: Record<string, FunctionComponent> = {
	h1,
	h2,
	h3,
	p
}