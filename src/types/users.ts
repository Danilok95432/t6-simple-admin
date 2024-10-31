import { type ShortDocument } from 'src/types/document'
import { type RelatedLink } from 'src/types/global'

export type UserLink = {
	id: string
	title: string
	link: string
	date: string
	source: string
}

export type UserItem = {
	id: string
	avatar: string
	fullname: string
	statuses: string[]
	mainStatus: string
	mainDesc: string
	birthday: string
	position: string
	group: string
	regDate: string
	locality: string
	gender: 'Мужской' | 'Женский'
	phones: string[]
	email: string
	website: string
	relatedObjects: RelatedLink[]
	relatedProjects: RelatedLink[]
	relatedLinks: UserLink[]
	documents: ShortDocument[]
}
