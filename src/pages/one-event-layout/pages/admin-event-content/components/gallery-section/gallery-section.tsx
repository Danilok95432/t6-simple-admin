import { type FC } from 'react'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import { useWatch } from 'react-hook-form'

import styles from './index.module.scss'
export const GallerySection: FC = () => {
	return (
		<section className={styles.gallerySection}>
			<h6>Фотогалерея ({useWatch({ name: 'photoGallery' }).length}/10)</h6>
			<ReactDropzone
				className={styles.galleryDropzone}
				dzAreaClassName={styles.galleryArea}
				name='photoGallery'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				maxFiles={10}
				multiple
				customUploadBtn={
					<AdminButton as='button' type='button' $padding='9.5px 14px' $common>
						Добавить фото
					</AdminButton>
				}
			/>
		</section>
	)
}
