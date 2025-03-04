export type ImageItem = {
	id: string
	thumbnail: string
	original: string
}

export type ImageItemWithText = {
	id: string
	thumbnail: string
	original?: string
	title?: string
	author?: string
}

export type ImageUploadRespone = {
	status: string
	id_catimage: string
	images: ImageItem[]
}
