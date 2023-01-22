import Image from "next/image"
import { FC } from "react"

type Props = {
	title: string
	date: Date
	tags: string[]
	image: string
	Author: FC
}

const formatter = new Intl.DateTimeFormat(['es-ES', 'en-US'], { year: "numeric", month: "long", day: "numeric" })

export const PostHeader = ({ title, date, tags, image, Author }: Props) => {
	return <header className="border-b-2 border-gray-500">
		<div className="py-2 flex gap-2">
			{tags.map(tag => <span className="px-2 bg-violet-800 rounded-md " key={tag}>{tag}</span>)}
		</div>
		<h1 className="text-5xl bg-gradient-to-r from-orange-500 to-orange-200 text-transparent  py-2 bg-clip-text">{title}</h1>
		<span className="text-sm text-violet-300">{formatter.format(date)}</span>
		<div className="w-full h-60 relative rounded-lg overflow-hidden my-2">
			<Image alt="splash" src={`/images/${image}`} fill style={{ objectFit: 'cover' }}></Image>
		</div>
		<section className="author">
			<Author />
		</section>
	</header>
}