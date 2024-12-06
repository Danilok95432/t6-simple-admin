import { splitAndTrimStringToArray } from 'src/helpers/utils'
import { type FileWithPreview } from 'src/types/files'
import * as yup from 'yup'

export type OneVideoInputs = {
	titleVideo: string
	datePublish: Date
	tags: string[]
	shortDesc: string
	linkVideo: string
	textCode: string
	mainImg?: FileWithPreview[]
	isHiddenVideo?: boolean
}

export const oneVideoSchema = yup.object().shape({
	titleVideo: yup
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
	linkVideo: yup.string().url('Неверный формат ссылки').required('Введите ссылку на видео'),
	textCode: yup.string().required('Введите текст кода'),
})
