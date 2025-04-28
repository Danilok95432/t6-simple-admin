import { type ImageItemWithText } from 'src/types/photos'

export type AboutCommunityResponse = {
	mainDescs: string
	descs: string
	caption: string
	logo: ImageItemWithText[]
	photoGallery: ImageItemWithText[]
}

export type HistoryCommunityResponse = {
	articleName: string
	topDescs: string
	photos: ImageItemWithText[]
	bottomDescs: string
}

export type LocationCommunityResponse = {
	mapCoords: string
	mailAddress: string
	phone: PhoneLocationCommunity
	email: EmailLocationCommunity
}

export type CultureCommunityResponse = {
	topDesc: string
	photos: ImageItemWithText[]
	traditions: CultureItem[]
}

export type GameCommunityResponse = {
	topDesc: string
	photos: ImageItemWithText[]
	games: GameItem[]
}

export type CultureItem = {
	id: string
	title: string
	createdate: Date
	website: string
	hidden: boolean
}

export type TraditionItem = CultureItem
export type GameItem = CultureItem

type PhoneLocationCommunity = {
	contact: string
	formatNumber: string
}

type EmailLocationCommunity = {
	contact: string
	email: string
}
