import { Analytics } from '@vercel/analytics/react'
import { Header } from 'components/Header'
import { ProgressBar } from 'components/progress-bar'
import { baseDescription } from 'lib/posts'
import { ViewTransitions } from 'next-view-transitions'
import { Poppins } from 'next/font/google'
import { Metadata, Viewport } from 'next/types'
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
  metadataBase: new URL('https://www.franbosquet.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': 'https://www.en.franbosquet.com'
    }
  },
  authors: { name: 'Fran Bosquet', url: 'https://www.franbosquet.com' },
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
    <ViewTransitions>
      <html lang="es-ES">
        <body>
          <main
            className={`${poppins.variable} animate-fadeIn font-sans text-gray-200`}
          >
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
                <ProgressBar />
              </article>
            </section>
          </main>
        </body>
      </html>
    </ViewTransitions>
  )
}
