import { Analytics } from "@vercel/analytics/react";
import { Header } from "components/Header";
import { baseKeywords } from "lib/posts";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Fran Bosquet | Blog de programación',
  description: 'Blog de Fran Bosquet: Programación web, desarrollo de software, tecnología. Mi viaje como desarrollador web a partir de Ironhack.',
  viewport: 'width=device-width, initial-scale=1',
  icons: '/favicon.ico',
  keywords: baseKeywords
}

const poppins = Poppins({
  weight: ['100', '300', '700'],
  variable: '--font-poppins',
  subsets: ["latin"]
});

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <main className={`${poppins.variable} font-sans text-gray-200`}>
          <section className="min-h-screen flex flex-col">
            <Header />
            <article className='flex-1 bg-gradient-to-b from-gray-900 to-gray-800'>
              <div className='
                max-w-7xl mx-auto
                p-4 lg:px-8 pb-4
              '>
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