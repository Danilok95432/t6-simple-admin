import { type CultureItem } from 'src/types/community'
import { type ImageItemWithText } from 'src/types/photos'
import * as yup from 'yup'

export type CommunityCultureInputs = {
	topDesc: string
	photos?: ImageItemWithText[]
	traditions?: CultureItem[]
}

export const communityCultureSchema = yup.object().shape({
	topDesc: yup
		.string()
		.required('Это поле обязательно')
		.test('is-empty', 'Введите текст', (value) => {
			const cleanValue = value?.replace(/<[^>]*>?/gm, '').trim()
			return !!cleanValue && cleanValue !== ''
		}),
})
