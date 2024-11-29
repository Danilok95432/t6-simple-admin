import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type ObjectInfoInputs = {
	title: string
	type: string
	relation: string
	objectMainImg?: FileWithPreview[]
	objectDesc: string
	objectDescFull: string
	phoneNumber?: string
	emailAddress?: string
	emailAddressFull: string
	tgText?: string
	tgAddress?: string
	vkText?: string
	vkAddress?: string
	coords: string
}

export const objectInfoSchema = yup.object().shape({
	title: yup.string().required('Введите название'),
	type: yup.string().required('Введите тип'),
	relation: yup.string().required('Введите принадлежность объекта'),
	objectDesc: yup.string().required('Введите краткое описание'),
	objectDescFull: yup.string().required('Введите полное описание'),
	emailAddressFull: yup.string().required('Введите полный почтовый адрес'),
	coords: yup.string().required('Введите координаты через запятую'),
})
