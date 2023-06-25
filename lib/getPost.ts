import fs from 'fs';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

export const getPost = async (slug: string): Promise<MDXRemoteSerializeResult> => {
	const pn = path.join('posts')

	const filename = path.join(pn, slug + '.mdx')
	const raw = fs.readFileSync(filename);
	const serilized = await serialize(raw, {
		parseFrontmatter: true,
	})

	return serilized
}