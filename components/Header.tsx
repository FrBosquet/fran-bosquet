import Link from 'next/link'
import { ReactNode } from 'react'
import { Social } from './Social'

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <header
      className="
    relative flex items-center gap-2
    bg-gradient-to-b from-gray-800
    to-gray-900 p-4 md:p-6
    lg:h-80
    lg:flex-col 
    lg:justify-center lg:from-gray-900/10
    lg:to-gray-900 lg:p-8
    "
    >
      <Link href="/" title="inicio de la web">
        <p className="text-2xl md:text-4xl lg:text-7xl">
          Fran<span className="text-teal-400">Bosquet</span>
        </p>
      </Link>
      <p className="hidden text-sm text-gray-500 md:block">{children}</p>
      <Social />
    </header>
  )
}
