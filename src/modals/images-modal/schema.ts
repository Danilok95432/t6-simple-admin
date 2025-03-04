import { type ImageItemWithText } from 'src/types/photos'
import * as yup from 'yup'

export type ImagesInputs = {
	title: string
	author?: string
	image?: ImageItemWithText
}

export const imageSchema = yup.object().shape({
	title: yup.string().required('Введите название'),
})
