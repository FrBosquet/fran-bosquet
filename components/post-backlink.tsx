import { BackIcon } from "components/icons";
import Link from "next/link";

type Props = {
  href: string
}

export const PostBacklink = ({ href }: Props) => {
  return <Link href={href} title="Volver" className="-left-20 p-8 text-white hover:text-teal-400 hover:-left-24 absolute transition-all">
    <BackIcon className="w-6 h-6 transition-all" />
  </Link>;
}