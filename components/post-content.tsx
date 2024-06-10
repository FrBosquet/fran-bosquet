import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const PostContent = ({ children }: Props) => {
  return (
    <section className="container relative mx-auto flex max-w-[700px] flex-col gap-1 py-6">
      {children}
    </section>
  )
}
