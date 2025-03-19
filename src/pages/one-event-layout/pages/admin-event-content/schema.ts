import { type linksEvent, type placementsEvent } from 'src/types/events'
import { type FileItem } from 'src/types/files'
import * as yup from 'yup'

export type EventContentInputs = {
	placements?: placementsEvent[]
	linksBlock_title: string
	hide_placements?: boolean
	hide_gallery?: boolean
	links?: linksEvent[]
	hide_links?: boolean
	documents?: FileItem[]
	hide_documents?: boolean
}

export const eventContentSchema = yup.object().shape({
	linksBlock_title: yup.string().required('Введите название ссылок'),
})
