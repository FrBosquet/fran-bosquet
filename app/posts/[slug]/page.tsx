import { PostHeader } from "components/PostHeader";
import { getPost } from "lib/getPost";
import { Post } from "lib/types";
import { MdxContent } from "./MdxContent";

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const post = await getPost(slug)
  const meta = post.frontmatter as Post

  return <section className='flex flex-col gap-4 py-6'>
    <PostHeader {...meta} />
    <MdxContent source={post} />
  </section>
}