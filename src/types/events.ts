export type EventsItem = {
	id: string
	title: string
	contactPerson: string
	partGroup: string
	location: string
	preview: string
	dates: [string, string]
	type: string
	desc: string
}

export type EventRequest = {
	id: string
	title: string
	type: string
	dateStart: Date
	dateEnd: Date
	location: string
}
