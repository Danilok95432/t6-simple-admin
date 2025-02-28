export type ImageItem = {
	id: string
	thumbnail: string
	original: string
}

export type ImageUploadRespone = {
	status: string
	id_catimage: string
	images: ImageItem[]
}
