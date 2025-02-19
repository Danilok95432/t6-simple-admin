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

export type LocationCommunityResponse = {
	mapCoords: string
	mailAddress: string
	phone: PhoneLocationCommunity
	email: EmailLocationCommunity
}

interface PhoneLocationCommunity {
	contact: string
	formatNumber: string
}

interface EmailLocationCommunity {
	contact: string
	email: string
}
