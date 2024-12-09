export type EventItem = {
	id: string
	isHidden: boolean
	title: string
	dates: [Date, Date]
	object: string
}

export type EventPartners = {
	id: string
	isHidden: boolean
	title: string
	typeOrg: string
	typePart: string[]
	priority: number
}
