import { type FileItem } from './files'
import { type PartnerCheckBoxesInfo } from './partners'
import { type ImageItemWithText } from './photos'
import { type SelOption } from './select'

export type EventItem = {
	id: string
	hidden: boolean
	title: string
	date: [Date, Date] | string
	object_title: string
	event_type_name: string
	event_part_name: string
	event_level_name: string
}

export type EventPartners = {
	id: string
	id_partner: string
	title: string
	partner_types: string[]
	partner_vids: string[]
	partner_number: string
	hidden: boolean
}

export type EventPartnersResponse = {
	partners: EventPartners[]
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
	brands_list: SelOption[]
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

export type placementsEvent = {
	title: string
	desc: string
	location: string
}

export type linksEvent = {
	title: string
	link: string
	desc: string
	date: string
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

export type EventContent = {
	placements: placementsEvent[]
	linksBlock_title: string
	hide_placements?: boolean
	hide_gallery?: boolean
	hide_documents?: boolean
	links: linksEvent[]
	hide_links?: boolean
	photo?: ImageItemWithText[]
	photos?: ImageItemWithText[]
	documents?: FileItem[]
}

export type EventPartnerInfoResponse = {
	partners_list: SelOption[]
	partner_types: PartnerCheckBoxesInfo[]
}

export type EventProgramResponse = {
	program: EventProgram[]
}

export type EventProgram = {
	title: string
	place?: string
	itemdate: Date | string
	begin_time: Date | string
	end_time?: Date | string
}
