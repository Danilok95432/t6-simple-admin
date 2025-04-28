import { type CultureItem } from 'src/types/community'
import { type ImageItemWithText } from 'src/types/photos'
import * as yup from 'yup'

export type CommunityGameInputs = {
	topDesc: string
	photos?: ImageItemWithText[]
	games?: CultureItem[]
}

export const communityGameSchema = yup.object().shape({
	topDesc: yup.string().required('Введите текст'),
})
