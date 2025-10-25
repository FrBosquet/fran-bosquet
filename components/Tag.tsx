import { Lang } from 'lib/posts'
import Link from 'next/link'

export const Tag = ({ children, lang }: { children: string; lang: Lang }) => {
  return (
    <Link
      className="flex h-6 items-center bg-gradient-to-br from-teal-100 to-orange-100 px-2 text-xs text-gray-800 transition-all hover:to-orange-300"
      href={`${lang === 'en' ? '/en' : ''}/tag/${children}`}
      title={children}
    >
      {children}
    </Link>
  )
}
