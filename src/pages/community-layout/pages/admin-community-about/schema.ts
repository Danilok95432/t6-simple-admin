import * as yup from 'yup'
import { type ImageItemWithText } from 'src/types/photos'

export type CommunityInputs = {
	logo?: ImageItemWithText[]
	mainDescs: string
	caption: string
	gallerySection?: boolean
	photoGallery?: ImageItemWithText[]
	articleSection?: boolean
	descs?: string
}

export const communitySchema = yup.object().shape({
	mainDescs: yup.string().required('Введите текст'),
	caption: yup.string().required('Введите подпись'),
	gallerySection: yup.boolean(),
	articleSection: yup.boolean(),
	descs: yup.string().when('articleSection', ([articleSection]) => {
		return articleSection
			? yup.string().required('Введите текст статьи')
			: yup.string().notRequired()
	}),
})
