import { type RelatedLink } from 'src/types/global'
import { type PhotoItem } from 'src/types/photos'
import { type ShortDocument } from 'src/types/document'

export type ObjLink = {
	id: string
	title: string
	link: string
	date: string
	source: string
}

export type ObjectItem = {
	id: string
	title: string
	type: string
	registryNumber: string
	status: string
	region: string
	kind: string
	category: string
	address: string
	relatedObjects: RelatedLink[]
	relatedProjects: RelatedLink[]
	descs: string[]
	coords: [number, number]
	photos: PhotoItem[]
	relatedLinks: ObjLink[]
	documents: ShortDocument[]
}
