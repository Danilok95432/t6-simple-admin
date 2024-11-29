import { type FC } from 'react'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AddButton } from 'src/UI/AddButton/AddButton'

export const GallerySection: FC = () => {
	return (
		<ReactDropzone
			previewVariant='list'
			name='galleryImages'
			accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
			maxFiles={30}
			multiple
			customUploadBtn={<AddButton>Добавить фото</AddButton>}
		/>
	)
}
