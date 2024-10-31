import { type ShortDocument } from './document'
import { type RelatedLink } from 'src/types/global'
import { type UserItem } from './users'

export type RegionLink = {
	id: string
	title: string
	link: string
	date?: string
	source?: string
}

export type RegionItem = {
	title: string
	fullTitle: string
	mainDesc: string
	regionCode: string
	status: string
	type: string
	director: string
	vice: string
	accountant: string
	phones: string[]
	email: string
	address: string
	descList: string[]
	openDate: string
	logo: string
	mainInfoLogo: string
	site: string
	relatedObjects: RelatedLink[]
	relatedProjects: RelatedLink[]
	relatedLinks: RegionLink[]
	documents: ShortDocument[]
	participants: UserItem[]
}
