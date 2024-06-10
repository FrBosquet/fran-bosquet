import { BackIcon } from 'components/icons'
import Link from 'next/link'

type Props = {
  href: string
}

export const PostBacklink = ({ href }: Props) => {
  return (
    <aside className="sticky top-0 hidden h-0 md:block">
      <Link
        className="absolute -left-20 p-8 text-white transition-all hover:-left-24 hover:text-teal-400"
        href={href}
        title="Volver"
      >
        <BackIcon className="h-6 w-6 transition-all" />
      </Link>
    </aside>
  )
}
