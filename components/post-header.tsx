import { Lang } from "lib/posts"
import Image from "next/image"
import { getDateString } from "../lib/dateFormatter"
import { Post } from "../lib/types"
import { Tag } from "./Tag"

type Props = Post & { lang: Lang }

export const PostHeader = ({ title, date, keywords, image, description, lang }: Props) => {
	return <>
		<header className="border-b-2 border-gray-500 pb-2 mb-4">
			<h1 className="text-4xl md:text-5xl bg-gradient-to-r from-teal-100 to-orange-200 text-transparent py-2 bg-clip-text font-mono">{title}</h1>
			{description ? <p className="text-sm uppercase text-teal-200 py-4">{description}</p> : null}
			{image ? <><div className="w-full h-60 relative rounded-lg overflow-hidden my-2 shadow-lg">
				<Image
					title="splash"
					alt="splash"
					src={`/images/${image.src}.webp`}
					placeholder="blur"
					blurDataURL={`/images/placeholder/${image.src}.webp`}
					fill
					style={{ objectFit: 'cover' }} />
			</div> <section className="text-slate-600 pb-1 text-xs">
					<div>Foto de <a className="text-slate-500 transition hover:text-teal-300" title={image.author} href={image.authorUrl || image.sourceUrl}>{image.author}</a> {image.sourceUrl ? <>en <a title={image.source} className="text-slate-500 transition hover:text-teal-300" href={image.sourceUrl}>{image.source}</a></> : null}</div>
				</section></> : null}
			<div className="flex justify-between items-end">
				<div className="py-2 flex gap-2">
					{keywords.map(keyword => <Tag lang={lang} key={keyword}>{keyword}</Tag>)}
				</div>
				<span className="text-sm text-orange-300">{getDateString(date, lang)}</span>
			</div>
		</header>
	</>
}
