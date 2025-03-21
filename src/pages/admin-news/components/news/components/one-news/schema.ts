import { splitAndTrimStringToArray } from 'src/helpers/utils'
import { type ImageItemWithText } from 'src/types/photos'
import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type NewsPhoto = {
	id: string
	thumbnail: string
	original: string
	title: string
}

export type OneNewsInputs = {
	title: string
	itemdate: string
	tags: string[]
	news_gallerys?: SelOption[]
	id_gallery?: string
	short: string
	full: string
	photo?: ImageItemWithText[]
	description?: string
	keywords?: string[]
	main?: boolean
	hidden?: boolean
}

export const oneNewsSchema = yup.object().shape({
	title: yup
		.string()
		.required('Заголовок обязателен')
		.max(200, 'Заголовок не может превышать 200 символов'),
	itemdate: yup.string().required('Введите дату'),
	tags: yup
		.array()
		.of(yup.string().trim().required('Тег обязателен'))
		.min(1, 'Должен быть хотя бы один тег')
		.max(5, 'Максимум 5 тегов')
		.required('Теги обязательны')
		.transform(splitAndTrimStringToArray),
	short: yup.string().required('Введите короткое описание'),
	full: yup.string().required('Введите текст новости'),
})
