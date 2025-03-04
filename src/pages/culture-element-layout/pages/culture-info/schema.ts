import { type ImageItemWithText } from 'src/types/photos'
import * as yup from 'yup'

export type CultureInfoInputs = {
	hidden?: boolean
	website: string
	title: string
	desc?: string
	createdate?: Date
	logo?: ImageItemWithText[]
	photos?: ImageItemWithText[]
	bottomDesc?: string
}

export const cultureInfoSchema = yup.object().shape({
	title: yup.string().required('Введите наименование'),
	website: yup.string().required('Введите адрес сайта'),
})
