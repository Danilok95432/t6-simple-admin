import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type ArticleInputs = {
	articleName: string
	articleTopText: string
	gallerySection?: boolean
	galleryImages?: FileWithPreview[]
	articleBottomSection?: boolean
	articleBottomText?: string
}

export const articleSchema = yup.object().shape({
	articleName: yup.string().required('Введите название статьи'),
	articleTopText: yup.string().required('Введите текст статьи'),
	gallerySection: yup.boolean(),
	articleBottomSection: yup.boolean(),
	articleBottomText: yup.string().when('articleBottomSection', ([articleBottomSection]) => {
		return articleBottomSection
			? yup.string().required('Введите текст статьи')
			: yup.string().notRequired()
	}),
})
