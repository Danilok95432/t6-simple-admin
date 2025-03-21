import { type SelOption } from 'src/types/select'
import { type FC } from 'react'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
// import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { CustomText } from 'src/components/custom-text/custom-text'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { type ImageItemWithText } from 'src/types/photos'

type MainSectionProps = {
	galleryOptions?: SelOption[]
	photo?: ImageItemWithText[]
}

export const MainSection: FC<MainSectionProps> = ({ galleryOptions, photo }) => {
	return (
		<AdminSection className={styles.mainSection} isBlock={false}>
			<ControlledInput
				name='title'
				label='Заголовок новости (не больше 200 символов)'
				isTextarea
				height='56px'
				margin='0 0 20px 0'
			/>
			<CustomText $margin='0 0 5px 0' $fontWeight='600'>
				Дата публикации
			</CustomText>
			<ControlledDateInput
				className={adminStyles.adminDateInput}
				name='itemdate'
				dateFormat='yyyy-MM-dd'
				placeholder='гггг-мм-дд'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='tags'
				label='Введите теги через запятую. Не более 5 тегов на 1 новость'
				placeholder='Тег1, тег 2'
				margin='0 0 20px 0'
			/>
			{/*
			<ControlledSelect
				selectOptions={galleryOptions ?? [{ label: 'Не выбрано', value: '0' }]}
				name='news_gallerys'
				label='Галерея'
				margin='0 0 20px 0'
			/>
			*/}
			<ControlledInput
				name='short'
				label='Краткое описание (анонс новости)'
				isTextarea
				height='200px'
				margin='0 0 20px 0'
			/>
			<QuillEditor name='full' label='Текст новости' $heightEditor='350px' $maxWidth='1140px' />
			<ReactDropzone
				label='Основное изображение'
				name='photo'
				prompt='PNG, JPG, JPEG. 1000 х1000px, не более 3 Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				margin='20px 0 20px 0'
				previewVariant='sm-img'
				imgtype='news'
				fileImages={photo}
			/>
		</AdminSection>
	)
}
