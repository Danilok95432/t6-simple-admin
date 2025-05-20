import { type ImageItemWithText } from 'src/types/photos'
import * as yup from 'yup'

export type GameInfoInputs = {
	hidden?: boolean
	// website: string
	title: string
	// desc: string
	createdate?: Date
	logo?: ImageItemWithText[]
	photos?: ImageItemWithText[]
	bottomDesc?: string
}

export const gameInfoSchema = yup.object().shape({
	title: yup.string().required('Введите наименование'),
	// website: yup.string().required('Введите адрес сайта'),
	// desc: yup.string().required('Введите описание игры'),
})
