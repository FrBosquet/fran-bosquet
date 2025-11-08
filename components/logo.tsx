import { cn } from '@sglara/cn'
import Link from 'next/link'

type Props = {
  className?: string
}

export const Logo = ({ className }: Props) => {
  return (
    <Link href="/" title="inicio de la web">
      <p className={cn('text-2xl md:text-4xl lg:text-7xl', className)}>
        Fran<span className="text-teal-400">Bosquet</span>
      </p>
    </Link>
  )
}
