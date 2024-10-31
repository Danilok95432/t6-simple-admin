import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'
import { isEmptyHtml } from 'src/helpers/utils'

export type AddNewsInputs = {
	newsTitle: string
	datePublic: Date
	tags: string
	shortDesc: string
	newsText: string
	seoDesc: string
	seoWords: string
	gallery?: string
	isHidden?: string
	isMain?: string
	newsImage?: FileWithPreview[]
}

export const addNewsSchema = yup.object({
	newsTitle: yup.string().max(200, 'Максимум - 200 символов').required('Введите заголовок новости'),
	datePublic: yup.date().typeError('Неверный формат даты').required('Введите дату публикации'),
	tags: yup.string().required('Введите теги'),
	shortDesc: yup.string().required('Введите краткое описание'),
	newsText: yup
		.string()
		.required('Введите текст новости')
		.test('is-html-empty', 'Введите текст новости', (value) => isEmptyHtml(value)),
	seoDesc: yup.string().required('Введите описание'),
	seoWords: yup.string().required('Введите ключевые слова'),
})
