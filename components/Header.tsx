import Link from "next/link"
import { ReactNode } from "react"
import { Social } from "./Social"

export const Header = ({ children }: { children: ReactNode }) => {
  return <header className='
    realtive flex items-center gap-2
    lg:flex-col lg:justify-center
    p-4 md:p-6 lg:p-8
    lg:h-80
    bg-gradient-to-b 
    from-gray-800 to-gray-900
    lg:from-gray-900/10 lg:to-gray-900
    '>

    <Link href="/" title="inicio de la web">
      <p className='text-2xl md:text-4xl lg:text-7xl'>Fran<span className='text-teal-400'>Bosquet</span></p>
    </Link>
    <p className='text-gray-500 text-sm hidden md:block'>{children}</p>
    <Social />
  </header>
}