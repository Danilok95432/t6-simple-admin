import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type ObjectGalleryInputs = {
	objectImages?: FileWithPreview[]
	link: string
}

export const objectGallerySchema = yup.object().shape({
	link: yup.string().url('Неверный формат ссылки').required('Укажите ссылку'),
})
