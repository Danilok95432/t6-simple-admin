
import * as yup from 'yup'
import { type CultureItem } from 'src/types/community'
import { type ImageItemWithText } from 'src/types/photos'


export type CommunityGameInputs = {
	topDesc: string
	photos?: ImageItemWithText[]
	games?: CultureItem[]
}


export const gamesSchema = yup.object().shape({
	topDescs: yup.string().test('trim', 'Это поле обязательно', function (value) {
		if (!value) {
			return this.createError({ message: 'Это поле обязательно' })
		}
		const strippedValue = value.replace(/<[^>]*>/g, '').trim()
		return strippedValue.length > 0
	}),


export const communityGameSchema = yup.object().shape({
	topDesc: yup.string().required('Введите текст'),
})
