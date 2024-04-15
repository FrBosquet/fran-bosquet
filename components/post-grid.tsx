import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const PostGrid = ({ children }: Props) => {
  return <section className='
    grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3
    lg:max-xl:[&>*:nth-child(5n+1)]:col-span-2 xl:[&>*:nth-child(7n+1)]:col-span-3
    
    lg:max-xl:[&>*:nth-child(5n+1)_*.image]:aspect-square xl:[&>*:nth-child(7n+1)_.image]:aspect-square
    lg:max-xl:[&>*:nth-child(5n+1)_*.image]:w-[33%] xl:[&>*:nth-child(7n+1)_.image]:w-[33%]
    
    lg:max-xl:[&>*:nth-child(5n+1)_.title]:text-4xl xl:[&>*:nth-child(7n+1)_.title]:text-4xl
    '>
    {children}
  </section>
}