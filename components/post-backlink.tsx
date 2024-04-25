import { BackIcon } from "components/icons";
import { Link } from "next-view-transitions";

type Props = {
  href: string
}

export const PostBacklink = ({ href }: Props) => {
  return <aside className="sticky top-0 h-0 hidden md:block">
    <Link href={href} title="Volver" className="-left-20 p-8 text-white hover:text-teal-400 hover:-left-24 absolute transition-all">
      <BackIcon className="w-6 h-6 transition-all" />
    </Link>
  </aside>
}