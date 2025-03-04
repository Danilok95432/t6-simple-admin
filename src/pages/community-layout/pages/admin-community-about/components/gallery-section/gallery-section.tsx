import { type FC } from 'react'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { type ImageItemWithText } from 'src/types/photos'
// import { ImageModal } from 'src/modals/images-modal/images-modal'
// import { useActions } from 'src/hooks/actions/actions'

type GallerySectionProps = {
	images?: ImageItemWithText[]
}

export const GallerySection: FC<GallerySectionProps> = ({ images }) => {
	// const { openModal } = useActions()
	return (
		<AdminSection titleText='Фотогалерея' sectionName='gallerySection'>
			<ReactDropzone
				previewVariant='img-list'
				name='photoGallery'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				maxFiles={10}
				imgtype='about_general_photo'
				fileImages={images}
				multiple
				customUploadBtn={
					// <AddButton onClick={() => openModal(<ImageModal />)}>Добавить изображение</AddButton>
					<AddButton>Добавить изображение</AddButton>
				}
			/>
		</AdminSection>
	)
}
