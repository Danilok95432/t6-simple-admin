import { type FC } from 'react'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { type ImageItemWithText } from 'src/types/photos'
import { ImageModal } from 'src/modals/images-modal/images-modal'
import { useActions } from 'src/hooks/actions/actions'
import { useGetNewIdImageQuery } from 'src/store/uploadImages/uploadImages.api'

type GallerySectionProps = {
	images?: ImageItemWithText[]
}

export const GallerySection: FC<GallerySectionProps> = ({ images }) => {
	const { refetch: getNewId } = useGetNewIdImageQuery({
		imgtype: 'about_general_photo',
		idItem: '',
	})
	const addImage = async () => {
		const newIdResponse = await getNewId().unwrap()
		return newIdResponse.id
	}

	const { openModal } = useActions()
	const handleOpenModal = async () => {
		const newId = await addImage()
		openModal(<ImageModal id={newId} imgtype='about_general_photo' />)
	}

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
				customOpenModal={<AddButton onClick={handleOpenModal}>Добавить изображение</AddButton>}
			/>
		</AdminSection>
	)
}
