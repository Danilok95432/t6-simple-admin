import { type CultureItem } from 'src/types/community'
import { type ImageItemWithText } from 'src/types/photos'
import * as yup from 'yup'

export type CommunityCultureInputs = {
	topDesc: string
	photos?: ImageItemWithText[]
	cultures?: CultureItem[]
}

export const communityCultureSchema = yup.object().shape({
	topDesc: yup.string().required('Введите текст'),
})
