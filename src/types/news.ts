export type NewsItem = {
	id: string
	hidden: boolean
	title: string
	tags: string[]
	main: boolean
	date: Date
}

export type NewsResponse = {
	news: NewsItem[]
}

export type NewsNewIdResponse = {
	status: string
	id: string
}

export type NewsInfoResponse = {
	id: string
	hidden: boolean
	title: string
	tags: string[]
	main: boolean
	date: Date
}
