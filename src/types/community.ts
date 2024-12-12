import { type ImageItem } from 'src/types/photos'

export type AboutCommunityResponse = {
	mainDescs: string
	descs: string
	caption: string
	logo: string
	photoGallery: ImageItem
}
