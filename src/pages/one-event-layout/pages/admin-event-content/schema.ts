import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type EventContentInputs = {
	contentLogo: FileWithPreview[]
	simpleLogo?: FileWithPreview[]
	poster: FileWithPreview[]
	sitePicture?: FileWithPreview[]
	docName1?: string
	docName2?: string
	docName3?: string
	docFile1?: FileWithPreview[]
	docFile2?: FileWithPreview[]
	docFile3?: FileWithPreview[]
	photoGallery?: FileWithPreview[]
}

export const eventContentSchema = yup.object().shape({
	contentLogo: yup.array().min(1, 'Загрузите логотип').required('Загрузите логотип'),
	poster: yup.array().min(1, 'Загрузите афишу').required('Загрузите афишу'),
	photoGallery: yup.array().max(10, 'Не больше 10 фото'),
})
