import { getDateString } from "lib/dateFormatter"
import { Lang } from "lib/posts"
import { Link } from "next-view-transitions"
import Image from "next/image"
import { Post } from "../lib/types"
import { Tag } from "./Tag"

type Props = {
	post: Post,
	lang: Lang
}

export const PostLink = ({ post, lang }: Props) => {
	const { slug } = post

	return <article className="w-full gap-6 flex group transition-all border-b border-white/30" >
		<div className='aspect-[1/2] w-28 relative overflow-hidden
		transition-all
		filter
		group-hover:brightness-125
		image
		'>
			<Image
				alt={`imagen de ${post.image.author}`}
				src={`/images/${post.image.src}`}
				fill
				style={{ objectFit: 'cover', viewTransitionName: `image-${slug}` }}
			/>
		</div>
		<div className='flex justify-between flex-col flex-1 h-full py-4 lg:pt-6 gap-2'>
			<Link href={`${lang === 'en' ? '/en' : ''}/posts/${slug}`} className='title font-mono
			text-teal-200
			text-lg sm:text-2xl
			transition-all
			group-hover:text-white
			'><h2 style={{ viewTransitionName: slug }}>{post.title}</h2></Link>

			{post.description ? <p style={{
				viewTransitionName: `desc-${slug}`

			}} className='text-teal-100/60 text-sm lg:text-base flex-1 pb-2 pr-2'>{post.description}</p> : null}

			<div className='flex-1 items-end gap-2 hidden sm:flex pt-4'>
				{post.keywords.map(keyword => <Tag lang={lang} key={keyword}>{keyword}</Tag>)}
			</div>

			<span className='text-orange-300/60 text-xs lg:text-sm'>
				{getDateString(post.date, lang)}
			</span>


		</div>
	</article>
}