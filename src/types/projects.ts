import { type RelatedLink } from 'src/types/global'
import { type PhotoItem } from 'src/types/photos'
import { type ShortDocument } from 'src/types/document'

export type ProjectLink = {
	id: string
	title: string
	link: string
	date: string
	source: string
}

export type ProjectItem = {
	id: string
	title: string
	type: string
	status: string
	region: string
	relatedObjects: RelatedLink[]
	relatedProjects: RelatedLink[]
	descs: string[]
	photos: PhotoItem[]
	relatedLinks: ProjectLink[]
	documents: ShortDocument[]
}
