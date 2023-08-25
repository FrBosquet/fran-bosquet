import { GithubIcon, InstagramIcon, TwitterIcon } from "./icons"

export const Social = () => {
  return <menu className='
    flex-1 flex items-center gap-2 justify-end
    lg:flex-grow-0  
  '>
    <a href="https://github.com/FrBosquet" target="_blank" rel="noreferrer"><GithubIcon className="w-5 lg:w-6 hover:text-teal-400 transition-all" /></a>
    <a href="https://twitter.com/FrBosquet" target="_blank" rel="noreferrer"><TwitterIcon className="w-5 lg:w-6 hover:text-teal-400 transition-all" /></a>
    <a href="https://instagram.com/frbosquet" target="_blank" rel="noreferrer"><InstagramIcon className="w-5 lg:w-6 hover:text-teal-400 transition-all" /></a>
  </menu>
}