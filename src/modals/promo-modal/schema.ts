import type { FileWithPreview } from 'src/types/files'

export type PromoInputs = {
	contentType?: string
	contentChoice?: string
	promoDesktopImage?: FileWithPreview[]
	promoMobileImage?: FileWithPreview[]
	isHidden: boolean
}
