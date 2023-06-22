export type Post = {
	title: string
	slug: string
	date: string
	tags: string[]
	published: boolean
	image: {
		src: string,
		author: string,
		authorUrl: string,
		source?: string,
		sourceUrl?: string
	}
}