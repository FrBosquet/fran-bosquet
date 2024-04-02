export type Post = {
	title: string
	subtitle?: string
	slug: string
	date: string
	tags: string[]
	published: boolean
	featured?: boolean
	image: {
		src: string,
		author: string,
		authorUrl: string,
		source?: string,
		sourceUrl?: string
	}
}