import { type FC } from 'react'
import { type ImageItemWithText } from 'src/types/photos'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { AddImageCulturePlusSVG } from 'src/UI/icons/addImageCulturePlusSVG'

import styles from './index.module.scss'

type GallerySectionProps = {
	images?: ImageItemWithText[]
}

export const GallerySection: FC<GallerySectionProps> = ({ images }) => {
	return (
		<ReactDropzone
			margin='30px 0 0 0'
			previewVariant='img-list'
			variant='culture'
			name='photos'
			accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
			maxFiles={8}
			fileImages={images}
			imgtype='about_culture_photo'
			dzAreaClassName={styles.objectGalleryController}
			multiple
			customUploadBtn={<AddButton icon={<AddImageCulturePlusSVG />}> </AddButton>}
		/>
	)
}
