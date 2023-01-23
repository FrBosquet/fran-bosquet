import { ReactNode } from "react"

export const Tag = ({ children }: { children: ReactNode}) => {
	return <span className="px-2 bg-violet-800 rounded-md text-sm">{children}</span>
}