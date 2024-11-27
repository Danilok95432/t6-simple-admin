import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type ObjectInfoInputs = {
	objectName: string
	objectType: string
	objectRelation: string
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
	coordination: string
}

export const objectInfoSchema = yup.object().shape({
	objectName: yup.string().required('Введите название'),
	objectType: yup.string().required('Введите тип'),
	objectRelation: yup.string().required('Введите принадлежность объекта'),
	objectDesc: yup.string().required('Введите краткое описание'),
	objectDescFull: yup.string().required('Введите полное описание'),
	emailAddressFull: yup.string().required('Введите полный почтовый адрес'),
	coordination: yup.string().required('Введите координаты объекта'),
})
