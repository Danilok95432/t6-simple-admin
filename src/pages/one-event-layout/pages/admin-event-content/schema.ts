import { type linksEvent, type placementsEvent } from 'src/types/events'
import * as yup from 'yup'

export type EventContentInputs = {
	placements?: placementsEvent[]
	linksBlock_title: string
	hide_placements?: boolean
	hide_gallery?: boolean
	links?: linksEvent[]
	hide_links?: boolean
}

export const eventContentSchema = yup.object().shape({
	linksBlock_title: yup.string().required('Введите название ссылок'),
})
