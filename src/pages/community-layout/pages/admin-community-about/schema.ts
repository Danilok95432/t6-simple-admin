import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type CommunityInputs = {
	aboutTitleImage?: FileWithPreview[]
	mainDescs: string
	caption: string
	gallerySection?: boolean
	galleryImages?: FileWithPreview[]
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
