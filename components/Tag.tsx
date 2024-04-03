import Link from "next/link"

export const Tag = ({ children }: { children: string }) => {
	return <Link href={`/${children}`} title={children} className="px-2 h-6 flex items-center transition-all bg-gradient-to-br hover:to-orange-300 text-gray-800 from-teal-100 to-orange-100 text-xs">
		{children}
	</Link>
}