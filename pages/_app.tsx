import { MDXProvider } from '@mdx-js/react';
import { GithubIcon, InstagramIcon, TwitterIcon } from 'components/icons';
import { mdxComponents } from 'components/mdxComponents';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import '../styles/globals.css';

const poppins = Poppins({
  weight: ['100', '300', '700'],
  variable: '--font-poppins',
  subsets: ["latin"]
});

export default function App({ Component, pageProps }: AppProps) {
  return <MDXProvider components={mdxComponents}>
    <main className={`${poppins.variable} font-sans`}>
      <section className="bg-fixed bg-gradient-to-b from-gray-800 to-gray-700 min-h-screen text-gray-200">
        <header className='p-4 flex items-center gap-2 container mx-auto'>
          <Link href="/">
            <h1 className='text-2xl'>Fran<span className='text-violet-400'>Bosquet</span></h1>
          </Link>
          <p className='text-gray-500 text-sm hidden md:block'>Mi blog personal</p>
          <menu className='flex-1 flex items-center gap-2 justify-end'>
            <a href="https://github.com/FrBosquet" target="_blank" rel="noreferrer"><GithubIcon className="w-5 hover:text-violet-400 transition-all" /></a>
            <a href="https://twitter.com/FrBosquet" target="_blank" rel="noreferrer"><TwitterIcon className="w-5 hover:text-violet-400 transition-all" /></a>
            <a href="https://instagram.com/frbosquet" target="_blank" rel="noreferrer"><InstagramIcon className="w-5 hover:text-violet-400 transition-all" /></a>
          </menu>
        </header>
        <article className='container mx-auto px-4 pb-4 max-w-2xl'>
          <Component {...pageProps} />
        </article>
      </section>
    </main>
  </MDXProvider>
}
