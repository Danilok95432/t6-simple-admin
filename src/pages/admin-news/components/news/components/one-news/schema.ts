import { splitAndTrimStringToArray } from 'src/helpers/utils'
import { type FileWithPreview } from 'src/types/files'
import * as yup from 'yup'

export type OneNewsInputs = {
	titleNews: string
	datePublish: Date
	tags: string[]
	gallery?: string
	shortDesc: string
	textNews: string
	mainImg?: FileWithPreview[]
	seoDesc: string
	seoKeywords: string[]
	isKeyNews?: boolean
	isHiddenNews?: boolean
}

export const oneNewsSchema = yup.object().shape({
	titleNews: yup
		.string()
		.required('Заголовок обязателен')
		.max(200, 'Заголовок не может превышать 200 символов'),
	datePublish: yup.date().required('Введите дату'),
	tags: yup
		.array()
		.of(yup.string().trim().required('Тег обязателен'))
		.min(1, 'Должен быть хотя бы один тег')
		.max(5, 'Максимум 5 тегов')
		.required('Теги обязательны')
		.transform(splitAndTrimStringToArray),
	shortDesc: yup.string().required('Введите короткое описание'),
	textNews: yup.string().required('Введите текст новости'),
	seoDesc: yup.string().required('Введите описание'),
	seoKeywords: yup
		.array()
		.of(yup.string().trim().required('Ключевое слово обязательно'))
		.min(1, 'Должно быть хотя бы одно ключевое слово')
		.required('Ключевые слова обязательны')
		.transform(splitAndTrimStringToArray),
})
