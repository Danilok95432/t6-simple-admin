import { type FC } from 'react'
import { type ImageItemWithText } from 'src/types/photos'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { Container } from 'src/UI/Container/Container'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { AddImageCulturePlusSVG } from 'src/UI/icons/addImageCulturePlusSVG'
import { AddButton } from 'src/UI/AddButton/AddButton'

import styles from './index.module.scss'

type GallerySectionProps = {
	images?: ImageItemWithText[]
}

export const GallerySection: FC<GallerySectionProps> = ({ images }) => {
	return (
		<AdminSection
			titleText='Галерея'
			sectionName='hide_gallery'
			additionalNodeForHead={
				<SwitchedRadioBtns
					name='hide_gallery'
					contentRadio1='Показать всем'
					contentRadio2='Скрыть'
				/>
			}
		>
			<ReactDropzone
				margin='30px 0 0 0'
				previewVariant='img-list'
				variant='culture'
				name='photos'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				maxFiles={8}
				fileImages={images}
				imgtype='about_culture_photo'
				dzAreaClassName={styles.eventGalleryController}
				multiple
				customUploadBtn={<AddButton icon={<AddImageCulturePlusSVG />}> </AddButton>}
			/>
			<Container
				className={styles.formInputsGallery}
				$padding='0px 0 15px 0'
				$paddingMobile='0px 0 15px 0'
			>
				<p className={styles.linkDesc}>
					Ваш план обслуживания не предусматривает хранения большого объема контента (изображений и
					видео) на серверах Системы. <br /> Для размещения фотографий в галерее Вашего отделения
					подключите их методом указания прямых ссылок на сторонних хостингах.
				</p>
				<FlexRow $direction='row' $gap='9px' $alignItems='center' $maxWidth='921px' $wrap='nowrap'>
					<ControlledInput
						label='Название изображения *'
						name='title'
						placeholder='Добавьте название'
						width='100%'
					/>
					<ControlledInput
						label='Автор изображения'
						name='author'
						placeholder='Добавьте имя автора'
						width='100%'
					/>
				</FlexRow>
				<ControlledInput
					label='Ссылка на фото Вконтакте *'
					name='link'
					placeholder='https://vk.com/...'
					maxWidth='921px'
					margin='15px 0 5px 0'
				/>
			</Container>
			<AdminButton $height='35px' $padding='0 21px' type='button'>
				Сохранить ссылку
			</AdminButton>
		</AdminSection>
	)
}
