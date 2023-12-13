import fs from 'fs';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
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

const POSTS_DIRECTORY = path.join(process.cwd(), 'app/blog/_content')

export const getPostsFileNames = (): string[] => {
	const fileNames = fs.readdirSync(POSTS_DIRECTORY)

	return fileNames.filter(name => !ignore.includes(name))
}

export const getPostSlugs = (): string[] => {
	const fileNames = getPostsFileNames()

	return fileNames.map(name => name.replace('.mdx', ''))
}

export const getPosts = async (tag?: string): Promise<Post[]> => {
	const fileNames = getPostsFileNames()

	const posts: Post[] = await Promise.all(fileNames.filter(name => !ignore.includes(name)).map(async name => {
		const filename = path.join(POSTS_DIRECTORY, name)
		const raw = fs.readFileSync(filename);
		const serilized = await serialize(raw, {
			parseFrontmatter: true,
		})

		const meta = serilized.frontmatter as Post

		return { ...meta, slug: name.replace('.mdx', '') } as Post
	}))

	return posts
		.filter(post => post.published && (!tag || post.tags?.includes(tag)))
		.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1)
}

export const getPost = async (slug: string): Promise<MDXRemoteSerializeResult> => {
	const filename = path.join(POSTS_DIRECTORY, slug + '.mdx')
	const raw = fs.readFileSync(filename);
	const serilized = await serialize(raw, {
		parseFrontmatter: true,
	})

	return serilized
}