import Link from "next/link"
import { GithubIcon, InstagramIcon, TwitterIcon } from "./icons"
import { Social } from "./Social"

export const Header = () => {
  return <header className='
    realtive flex items-center gap-2
    lg:flex-col lg:justify-center
    p-4 md:p-6 lg:p-8
    lg:h-80
    bg-gradient-to-b from-gray-900/10 to-gray-900 filter
    '>

    <Link href="/">
      <h1 className='text-2xl md:text-4xl lg:text-7xl'>Fran<span className='text-teal-400'>Bosquet</span></h1>
    </Link>
    <p className='text-gray-500 text-sm hidden md:block'>Mi blog personal</p>
    <Social />
  </header>
}