export type NewsItem = {
	id: string
	isHidden: boolean
	title: string
	tags: string[]
	isKey: boolean
	date: Date
}

export type NewsVideoItem = {
	id: string
	title: string
	date: Date
	tags: string[]
	hidden: boolean
	main: boolean
}
