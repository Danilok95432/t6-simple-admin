import * as yup from 'yup'
import type { FileWithPreview } from 'src/types/files'

export type CommunityCultureInputs = {
	cultureText: string
	galleryImages?: FileWithPreview[]
}

export const communityCultureSchema = yup.object().shape({
	cultureText: yup.string().required('Введите текст'),
})
