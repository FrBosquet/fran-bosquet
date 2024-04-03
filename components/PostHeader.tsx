import Image from "next/image"
import { dateFormatter } from "../lib/dateFormatter"
import { Post } from "../lib/types"
import { Tag } from "./Tag"

type Props = Post

export const PostHeader = ({ title, date, keywords, image, subtitle }: Props) => {
	return <>
		<header className="border-b-2 border-gray-500 pb-2 mb-4">
			<h1 className="text-4xl md:text-5xl bg-gradient-to-r from-teal-100 to-orange-200 text-transparent py-2 bg-clip-text font-mono">{title}</h1>
			{subtitle ? <p className="text-sm uppercase text-teal-200 py-4">{subtitle}</p> : null}
			{image ? <><div className="w-full h-60 relative rounded-lg overflow-hidden my-2 shadow-lg">
				<Image title="splash" alt="splash" src={`/images/${image.src}`} fill style={{ objectFit: 'cover' }}></Image>
			</div> <section className="text-slate-600 pb-1 text-xs">
					<div>Foto de <a className="text-slate-500 transition hover:text-teal-300" title={image.author} href={image.authorUrl || image.sourceUrl}>{image.author}</a> {image.sourceUrl ? <>en <a title={image.source} className="text-slate-500 transition hover:text-teal-300" href={image.sourceUrl}>{image.source}</a></> : null}</div>
				</section></> : null}
			<div className="flex justify-between items-end">
				<div className="py-2 flex gap-2">
					{keywords.map(keyword => <Tag key={keyword}>{keyword}</Tag>)}
				</div>
				<span className="text-sm text-orange-300">{dateFormatter.format(new Date(date))}</span>
			</div>
		</header>
	</>
}
