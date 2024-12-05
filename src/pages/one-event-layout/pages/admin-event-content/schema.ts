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
	placements: PlacementBlock[]
	gallerySection?: boolean
	isShowGallerySection?: boolean
	galleryImages?: FileWithPreview[]
	docFile1?: FileWithPreview[]
	docFile2?: FileWithPreview[]
	docFile3?: FileWithPreview[]
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
	photoGallery: yup.array().max(10, 'Не больше 10 фото'),
})
