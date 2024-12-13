import { type ImageItem } from 'src/types/photos'

export type AboutCommunityResponse = {
	mainDescs: string
	descs: string
	caption: string
	logo: string
	photoGallery: ImageItem
}

export type HistoryCommunityResponse = {
	articleName: string
	topDescs: string
	galleryImages: ImageItem
	bottomDescs: string
}
