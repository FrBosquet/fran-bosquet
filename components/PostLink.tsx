import Image from "next/image"
import Link from "next/link"
import { dateFormatter } from "../lib/dateFormatter"
import { Post } from "../lib/types"
import { Tag } from "./Tag"

type Props = {
	post: Post
}

export const PostLink = ({ post }: Props) => {
	return <Link href={`/posts/${post.slug}`
	} className="w-full p-2 sm:p-3 gap-4 bg-gray-600 flex hover:translate-x-2 transition-all rounded-lg shadow-md" >
		<div className='aspect-square w-28 relative rounded-md overflow-hidden'>
			<Image alt={`imagen de ${post.image.author}`} src={`/images/${post.image.src}`} fill style={{ objectFit: 'cover' }} />
		</div>
		<div className='flex justify-between flex-col flex-1 h-28'>
			<h2 className='text-lg text-orange-400 flex-1 sm:text-2xl'>{post.title}</h2>
			<div className='flex justify-between '>
				<div className='gap-2 flex-1 hidden sm:flex'>
					{post.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
				</div>
				<span className='text-violet-100 text-sm sm:text-md'>
					{dateFormatter.format(new Date(post.date))}
				</span>
			</div>
		</div>
	</Link>
}