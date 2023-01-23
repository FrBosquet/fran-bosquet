import fs from 'fs';
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
	const pn = path.join(__dirname, '../../../pages')
	const fileNames = fs.readdirSync(pn)

	const posts = await Promise.all(fileNames.filter(name => !ignore.includes(name)).map(async name => {				
		const { meta } = await import('/pages/' + name) as unknown as { meta: Post }

		return { ...meta, slug: name.replace('.mdx', '')}
	}))
	

	return posts
}