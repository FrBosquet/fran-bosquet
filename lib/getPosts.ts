import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import { Post } from './types';

const ignore = [
	'api',
	'_app.tsx',
	'_document.tsx',
	'_error.tsx',
	'index.tsx',
]

export const getPosts = async (): Promise<Post[]> => {
	const pn = path.join('posts')
	const fileNames = fs.readdirSync(pn)

	const posts: Post[] = await Promise.all(fileNames.filter(name => !ignore.includes(name)).map(async name => {
		const filename = path.join(pn, name)
		const raw = fs.readFileSync(filename);
		const serilized = await serialize(raw, {
			parseFrontmatter: true,
		})

		const meta = serilized.frontmatter as Post

		return { ...meta, slug: name.replace('.mdx', '') } as Post
	}))

	return posts
		.filter(post => post.published)
		.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1)
}