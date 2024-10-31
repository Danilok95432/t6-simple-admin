import { type FC } from 'react'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { AddButton } from 'src/UI/AddButton/AddButton'

export const GallerySection: FC = () => {
	return (
		<AdminSection titleText='Фотогалерея' sectionName='gallerySection'>
			<ReactDropzone
				previewVariant='list'
				name='galleryImages'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				maxFiles={7}
				multiple
				customUploadBtn={<AddButton>Добавить фото</AddButton>}
			/>
		</AdminSection>
	)
}
