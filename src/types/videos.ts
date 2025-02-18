export type VideoItem = {
	id: string
	title: string
	date: Date
	tags: string[]
	hidden: boolean
	key: boolean
}

export type VideoResponse = {
	videos: VideoItem[]
}

export type VideoNewIdResponse = {
	status: string
	id: string
}

export type VideoInfoResponse = {
	id: string
	hidden: boolean
	title: string
	tags: string[]
	key: boolean
	date: Date
}
