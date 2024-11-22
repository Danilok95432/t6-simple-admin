import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type CultureInfoInputs = {
	directionTitle: string
	levelDirection?: string
	regionDirection?: string
	site: string
	directionLogo: FileWithPreview[]
	firstText?: string
	galleryImages?: FileWithPreview[]
	secondText?: string
	isEventsByDisciplines?: boolean
	isParticipantsByDisciplines?: boolean
	isParticipantsByEvents?: boolean
}

export const cultureInfoSchema = yup.object().shape({
	directionTitle: yup.string().required('Введите наименование'),
	site: yup.string().required('Введите адрес сайта'),
	directionLogo: yup.array().min(1, 'Загрузите логотип').required('Загрузите логотип'),
})
