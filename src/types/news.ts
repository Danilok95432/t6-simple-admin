export type NewsItem = {
	id: string
	title: string
	shortTitle: string
	shortDesc: string
	date: Date
	tags: string[]
	gallery: string
	hidden: boolean
	main: boolean
	preview: string
	imgGallery: string[]
	textNews: string[]
	desc: string
}

export type NewsVideoItem = {
	id: string
	title: string
	date: Date
	tags: string[]
	hidden: boolean
	main: boolean
}
