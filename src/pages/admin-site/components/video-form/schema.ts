import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type AddNewsVideosInputs = {
	videoTitle: string
	datePublic: Date
	shortDesc: string
	videoLink?: string
	codeText?: string
	isHidden?: string
	newsVideosImage?: FileWithPreview[]
}

export const addNewsVideosSchema = yup.object({
	videoTitle: yup.string().max(200, 'Максимум - 200 символов').required('Введите название записи'),
	datePublic: yup.date().typeError('Неверный формат даты').required('Введите дату публикации'),
	shortDesc: yup.string().required('Введите краткое описание'),
})
