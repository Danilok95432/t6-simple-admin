export type ObjectNews = {
	id: string
	hidden: boolean
	title: string
	tags: string
	main: boolean
	date: Date
}
export type ObjectNewsResponse = {
	news: ObjectNews[]
}

export type ObjectEvents = {
	id: string
	isHidden: boolean
	title: string
	typeEvent: string
	typePart: string
	startDate: Date
	endDate: Date
}

export type ObjectItem = {
	id: string
	hidden: boolean
	title: string
	object_apply_name: string
	object_type_name: string
}

export type ObjectsResponse = {
	description: string
	objects: ObjectItem[]
}
