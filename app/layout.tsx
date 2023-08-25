import { Analytics } from "@vercel/analytics/react";
import { Header } from "components/Header";
import { Metadata } from "next";
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
      <body className="text-gray-200">
        <main className={`${poppins.variable} font-sans`}>
          <section className="min-h-screen  mx-auto max-w-[1280px] ">
            <Header />
            <article className='mx-auto p-4 lg:px-8 pb-4 bg-gradient-to-b from-gray-900 to-gray-800'>
              {children}
              <Analytics />
            </article>
          </section>
        </main>
      </body>
    </html>

  )
}