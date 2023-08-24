import { ReactNode } from "react"

export const Tag = ({ children }: { children: ReactNode }) => {
	return <div className="px-2 h-6 flex items-center bg-gradient-to-br text-gray-800 from-teal-100 to-orange-100 text-xs">{children}</div>
}