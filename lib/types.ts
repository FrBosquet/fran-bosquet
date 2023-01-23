export type Post = {
	title: string
	date: string
	tags: string[]
	image?: {
		src: string,
		author: string,
		authorUrl: string,
		source: string,
		sourceUrl: string
	}
}