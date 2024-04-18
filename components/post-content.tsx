import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const PostContent = ({ children }: Props) => {
  return <section className='flex flex-col gap-4 py-6 relative container max-w-[700px] mx-auto'>
    {children}
  </section>
}
