import * as yup from 'yup'
import { type CultureItem } from 'src/types/community'
import { type ImageItemWithText } from 'src/types/photos'

export type CommunityGameInputs = {
	topDesc: string
	photos?: ImageItemWithText[]
	games?: CultureItem[]
}

export const gamesSchema = yup.object().shape({
	topDesc: yup
		.string()
		.required('Это поле обязательно')
		.test('is-empty', 'Введите текст', (value) => {
			const cleanValue = value?.replace(/<[^>]*>?/gm, '').trim()
			return !!cleanValue && cleanValue !== ''
		}),
})
