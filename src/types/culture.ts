import { type FileWithPreview } from 'src/types/files'

export type CultureElement = {
	id: string
	isHidden: boolean
	site: string | null
	title: string
	region: string
	level: string
	assemblyDate: Date
	logo: string | null
	gallery: FileWithPreview[]
	textBlock1: string | null
	textBlock2: string | null
	isEventsByDiscipline: boolean
	isParticipantsByDiscipline: boolean
	isParticipantsByEvents: boolean
}
