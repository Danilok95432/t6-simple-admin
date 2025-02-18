import { splitAndTrimStringToArray } from 'src/helpers/utils'
import { type FileWithPreview } from 'src/types/files'
import * as yup from 'yup'

export type OneVideoInputs = {
	title: string
	itemdate: string
	tags: string[]
	short: string
	vkvideo: string
	vkexport: string
	photo?: FileWithPreview[]
	hidden?: boolean
}

export const oneVideoSchema = yup.object().shape({
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
	vkvideo: yup.string().url('Неверный формат ссылки').required('Введите ссылку на видео'),
	vkexport: yup.string().required('Введите текст кода'),
})
