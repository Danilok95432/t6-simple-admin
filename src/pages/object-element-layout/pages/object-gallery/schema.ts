import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type ObjectGalleryLink = {
	url: string
}

export type ObjectGalleryInputs = {
	objectImages?: FileWithPreview[]
	links?: ObjectGalleryLink[]
}

export const objectGallerySchema = yup.object().shape({
	links: yup.array().of(
		yup.object().shape({
			url: yup.string().url('Неверный формат ссылки').required('Укажите ссылку'),
		}),
	),
})
