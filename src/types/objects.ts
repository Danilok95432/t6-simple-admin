import { type ObjectGalleryLink } from 'src/pages/object-element-layout/pages/object-gallery/schema'
import { type FileWithPreview } from './files'

export type ObjLink = {
	id: string
	title: string
	link: string
	date: string
	source: string
}

export type ObjectNews = {
	id: string
	isHidden: boolean
	title: string
	tags: string[]
	isKey: boolean
	date: Date
}

export type ObjectGallery = {
	objectImages?: FileWithPreview[]
	links?: ObjectGalleryLink[]
}

export type ObjectItem = {
	id: string
	isHidden: boolean
	title: string
	type: string
	relation: string
	objectMainImg?: FileWithPreview[]
	objectDesc: string
	objectDescFull: string
	phoneNumber?: string
	emailAddress?: string
	emailAddressFull: string
	tgText?: string
	tgAddress?: string
	vkText?: string
	vkAddress?: string
	coords: string
	news: ObjectNews[]
	gallery: ObjectGallery
}
