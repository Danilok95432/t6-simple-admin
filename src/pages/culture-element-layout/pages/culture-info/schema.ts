import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type CultureInfoInputs = {
	aboutTitleImage?: FileWithPreview[]
	authorText: string
	authorSign: string
	gallerySection?: boolean
	galleryImages?: FileWithPreview[]
	articleSection?: boolean
	articleName?: string
	articleText?: string
}

export const cultureInfoSchema = yup.object().shape({
	authorText: yup.string().required('Введите текст'),
	authorSign: yup.string().required('Введите подпись'),
	gallerySection: yup.boolean(),
	articleSection: yup.boolean(),
	articleName: yup.string().when('articleSection', ([articleSection]) => {
		return articleSection
			? yup.string().required('Введите название статьи')
			: yup.string().notRequired()
	}),
	articleText: yup.string().when('articleSection', ([articleSection]) => {
		return articleSection
			? yup.string().required('Введите текст статьи')
			: yup.string().notRequired()
	}),
})
