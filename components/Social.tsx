import { GithubIcon, InstagramIcon, TwitterIcon } from './icons'

export const Social = () => {
  return (
    <menu
      className="
    flex flex-1 items-center justify-end gap-2
    lg:grow-0  
  "
    >
      <a
        href="https://github.com/FrBosquet"
        rel="noreferrer"
        target="_blank"
        title="FrBosquet en GitHub"
      >
        <GithubIcon className="w-5 transition-all hover:text-teal-400 lg:w-6" />
      </a>
      <a
        href="https://twitter.com/FrBosquet"
        rel="noreferrer"
        target="_blank"
        title="FrBosquet en X"
      >
        <TwitterIcon className="w-5 transition-all hover:text-teal-400 lg:w-6" />
      </a>
      <a
        href="https://instagram.com/frbosquet"
        rel="noreferrer"
        target="_blank"
        title="FrBosquet en Instagram"
      >
        <InstagramIcon className="w-5 transition-all hover:text-teal-400 lg:w-6" />
      </a>
    </menu>
  )
}
