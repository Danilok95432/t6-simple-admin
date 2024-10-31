import { type ReactNode } from 'react'

export type RelatedLink = {
	id: string
	title: string
}
export type LinkItem = {
	id: string
	link: string
	titleLink: string
	type?: 'doc' | 'pdf'
	label?: ReactNode | ReactNode[]
}
