import { Analytics } from '@vercel/analytics/react'
import { Header } from 'components/Header'
import { baseDescription } from 'lib/posts'
import { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'
import 'styles/globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export const metadata: Metadata = {
  title: 'Blog de programación | Fran Bosquet',
  description: baseDescription,
  icons: '/favicon.ico',
  metadataBase: new URL('https://franbosquet.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': 'https://en.franbosquet.com'
    }
  },
  authors: { name: 'Fran Bosquet', url: 'https://franbosquet.com' },
  publisher: 'Fran Bosquet',
  robots: 'index, follow'
}

const poppins = Poppins({
  weight: ['100', '300', '700'],
  variable: '--font-poppins',
  subsets: ['latin']
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-ES">
      <body>
        <main className={`${poppins.variable} font-sans text-gray-200`}>
          <section className="flex min-h-screen flex-col">
            <Header>Mi blog personal</Header>
            <article className="flex-1 bg-gradient-to-b from-gray-900 to-gray-800">
              <div
                className="
                mx-auto max-w-7xl
                p-4 lg:px-8
              "
              >
                {children}
              </div>
              <Analytics />
            </article>
          </section>
        </main>
      </body>
    </html>
  )
}
