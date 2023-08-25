import Image from "next/image"
import Link from "next/link"
import { dateFormatter } from "../lib/dateFormatter"
import { Post } from "../lib/types"
import { Tag } from "./Tag"

type Props = {
	post: Post
	featured?: boolean
}

export const PostLink = ({ post, featured }: Props) => {
	const isFeatured = featured || post.featured

	return <Link href={`/posts/${post.slug}`
	} data-featured={isFeatured} className="w-full gap-6 flex group transition-all border-b border-white/30
	lg:data-[featured=true]:col-span-2
	xl:data-[featured=true]:col-span-3
	" >
		<div data-featured={isFeatured} className='aspect-[1/2] w-28 relative overflow-hidden
		transition-all
		filter
		group-hover:brightness-125
		lg:data-[featured=true]:aspect-square
		lg:data-[featured=true]:w-[33%]
		'>
			<Image
				alt={`imagen de ${post.image.author}`}
				src={`/images/${post.image.src}`}
				fill
				style={{ objectFit: 'cover' }}
			/>
		</div>
		<div className='flex justify-between flex-col flex-1 h-full gap-2'>

			<h2 data-featured={isFeatured} className='text-lg text-teal-200 sm:text-2xl
			lg:data-[featured=true]:text-4xl
			transition-all
			group-hover:text-white
			'>{post.title}</h2>

			<div className='flex-1 gap-2 hidden sm:flex py-2'>
				{post.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
			</div>

			<span className='text-teal-100/60 text-xs lg:text-sm py-4'>
				{dateFormatter.format(new Date(post.date))}
			</span>


		</div>
	</Link>
}