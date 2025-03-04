import { type FC } from 'react'
import { type ImageItemWithText } from 'src/types/photos'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { AddButton } from 'src/UI/AddButton/AddButton'

type GallerySectionProps = {
	images?: ImageItemWithText[]
}

export const GallerySection: FC<GallerySectionProps> = ({ images }) => {
	return (
		<AdminSection titleText='Фотогалерея' sectionName='gallerySection'>
			<ReactDropzone
				previewVariant='img-list'
				name='photos'
				imgtype='about_history'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				maxFiles={7}
				fileImages={images}
				multiple
				customUploadBtn={<AddButton>Добавить фото</AddButton>}
			/>
		</AdminSection>
	)
}
