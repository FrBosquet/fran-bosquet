import { ReactNode } from "react"

export const Tag = ({ children }: { children: ReactNode}) => {
	return <span className="px-2 flex items-center bg-violet-800 rounded-md text-xs">{children}</span>
}