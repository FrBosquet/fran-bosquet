import Image from "next/image"
import { dateFormatter } from "../lib/dateFormatter"
import { Post } from "../lib/types"
import { Tag } from "./Tag"

type Props = Post

export const PostHeader = ({ title, date, tags, image }: Props) => {
	return <>
		<header className="border-b-2 border-gray-500 pb-2 mb-4">
			<h1 className="text-4xl md:text-5xl bg-gradient-to-r from-teal-100 to-orange-200 text-transparent py-2 bg-clip-text font-mono">{title}</h1>
			<span className="text-sm text-teal-300">{dateFormatter.format(new Date(date))}</span>
			<div className="py-2 flex gap-2">
				{tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
			</div>
			{image ? <><div className="w-full h-60 relative rounded-lg overflow-hidden my-2 shadow-lg">
				<Image alt="splash" src={`/images/${image.src}`} fill style={{ objectFit: 'cover' }}></Image>
			</div> <section className="text-slate-600 pb-1 text-xs">
					<div>Foto de <a className="text-slate-500 transition hover:text-teal-300" href={image.authorUrl}>{image.author}</a> {image.sourceUrl ? <>en <a className="text-slate-500 transition hover:text-teal-300" href={image.sourceUrl}>{image.source}</a></> : null}</div>
				</section></> : null}
		</header>
	</>
}
