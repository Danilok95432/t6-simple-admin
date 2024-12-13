import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type ObjectInfoInputs = {
	title: string
	object_types: string
	object_apply: string
	photo?: FileWithPreview[]
	mainDescs: string
	descList: string
	phone?: string
	email: string
	address?: string
	tgName?: string
	tgSoc?: string
	vkName?: string
	vkSoc?: string
	coords: string
}

export const objectInfoSchema = yup.object().shape({
	title: yup.string().required('Введите название'),
	object_types: yup.string().required('Введите тип'),
	object_apply: yup.string().required('Введите принадлежность объекта'),
	mainDescs: yup.string().required('Введите краткое описание'),
	descList: yup.string().required('Введите полное описание'),
	email: yup.string().required('Введите полный почтовый адрес'),
	coords: yup.string().required('Введите координаты через запятую'),
})
