import Link from 'next/link'
import { Logo } from './logo'

const footerLinks = [
  { href: '/', label: 'Blog' },
  { href: 'https://x.com', label: 'Twitter' },
  { href: 'https://github.com', label: 'GitHub' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
  { href: 'https://instagram.com', label: 'Instagram' }
]

export const Footer = () => {
  return (
    <footer className="mt-6 bg-gray-900 py-8">
      <div className="mx-auto flex max-w-[700px] items-center justify-between py-4 text-gray-500">
        <section>
          <Logo className="!text-xl text-gray-200" />
          <p>© {new Date().getFullYear()} Fran Bosquet</p>
        </section>
        <section className="flex flex-col gap-1 text-right text-sm hover:text-teal-700">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              className="hover:text-orange-400"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </section>
      </div>
    </footer>
  )
}
