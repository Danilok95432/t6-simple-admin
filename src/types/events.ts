import { type SelOption } from './select'

export type EventItem = {
	id: string
	hidden: boolean
	title: string
	date: [Date, Date]
	object_title: string
}

export type EventPartners = {
	id: string
	isHidden: boolean
	title: string
	typeOrg: string
	typePart: string[]
	priority: number
}

export type EventResponse = {
	events: EventItem[]
}

export type EventNewIdResponse = {
	status: string
	id: string
}

export type EventInfoResponse = {
	title: string
	objects_list?: SelOption[]
	event_types_list: SelOption[]
	event_levels_list: SelOption[]
	tags?: string
	date_from: string
	time_from: string
	date_to: string
	time_to: string
	description: string
	fullinfo: string
	conditions: string
	raspisanie: string
	age_list: SelOption[]
	locations_list?: SelOption[]
	main?: boolean
	hidden?: boolean
}

export type pathwaysEvent = {
	title: string
	desc: string
	location: string
}

export type EventContacts = {
	website: string
	contact_telphone?: string
	contact_tg?: string
	contact_email?: string
	hide_telphone?: boolean
	hide_tg?: boolean
	hide_email?: boolean
	pathways?: pathwaysEvent[]
	hide_pathways?: boolean
}
