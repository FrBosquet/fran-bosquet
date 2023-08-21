import { Analytics } from "@vercel/analytics/react";
import { GithubIcon, InstagramIcon, TwitterIcon } from "components/icons";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { poppins } from "styles/fonts";
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Fran Bosquet',
  description: 'Blog de Fran Bosquet: Programación web, desarrollo de software, tecnología. Mi viaje como desarrollador web a partir de Ironhack.',
  viewport: 'width=device-width, initial-scale=1',
  icons: '/favicon.ico'
}

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
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
              {children}
              <Analytics />
            </article>
          </section>
        </main>
      </body>
    </html>

  )
}