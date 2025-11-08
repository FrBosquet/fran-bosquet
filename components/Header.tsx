import { ReactNode } from 'react'
import { Social } from './Social'
import { Logo } from './logo'

type Props = {
  children: ReactNode
}

export const Header = ({ children }: Props) => {
  return (
    <header
      className="relative flex items-center gap-2
        bg-gradient-to-b from-gray-800
        to-gray-900 p-4 md:p-6
        lg:h-80
        lg:flex-col 
        lg:justify-center lg:from-gray-900/10
        lg:to-gray-900 lg:p-8"
    >
      <Logo />
      <p className="hidden text-sm text-gray-500 md:block">{children}</p>
      <Social />
    </header>
  )
}
