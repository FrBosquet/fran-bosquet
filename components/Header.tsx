import Link from "next/link"
import { GithubIcon, InstagramIcon, TwitterIcon } from "./icons"

export const Header = () => {
  return <header className='p-4 md:p-6 lg:p-8 flex items-center gap-2 relative'>

    <Link href="/">
      <h1 className='text-2xl md:text-4xl lg:text-5xl'>Fran<span className='text-teal-400'>Bosquet</span></h1>
    </Link>
    <p className='text-gray-500 text-sm hidden md:block'>Mi blog personal</p>
    <menu className='flex-1 flex items-center gap-2 justify-end'>
      <a href="https://github.com/FrBosquet" target="_blank" rel="noreferrer"><GithubIcon className="w-5 lg:w-6 hover:text-teal-400 transition-all" /></a>
      <a href="https://twitter.com/FrBosquet" target="_blank" rel="noreferrer"><TwitterIcon className="w-5 lg:w-6 hover:text-teal-400 transition-all" /></a>
      <a href="https://instagram.com/frbosquet" target="_blank" rel="noreferrer"><InstagramIcon className="w-5 lg:w-6 hover:text-teal-400 transition-all" /></a>
    </menu>
  </header>
}