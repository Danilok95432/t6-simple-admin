import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

type PlacementBlock = {
	placementTitle: string
	placementDesc: string
	placementScript: string
}

export type EventContentInputs = {
	logoImage?: FileWithPreview[]
	isShowPlacementsSection?: boolean
	placementsSection?: boolean
	placements?: PlacementBlock[]
	gallerySection?: boolean
	isShowGallerySection?: boolean
	docsSection?: boolean
	isShowDocsSection?: boolean
	docs?: FileWithPreview[]
}

export const eventContentSchema = yup.object().shape({
	placementsSection: yup.boolean(),
	placements: yup.array().when('placementsSection', ([placementsSection]) => {
		return placementsSection
			? yup.array().of(
					yup.object().shape({
						placementTitle: yup.string().required('Введите название места'),
						placementDesc: yup.string().required('Введите описание места'),
						placementScript: yup.string().required('Введите текст скрипта'),
					}),
				)
			: yup.array().notRequired()
	}),
	connectPhoto: yup.string().url('Неверный формат ссылки'),
	docs: yup.array().max(7, 'Не больше 7 файлов'),
})
