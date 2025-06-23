import { type MultiSelOption, type SelOption } from 'src/types/select'
import { type FC } from 'react'
import { type ImageItemWithText } from 'src/types/photos'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { GridRow } from 'src/components/grid-row/grid-row'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { GallerySection } from './components/gallery-section/gallery-section'
import { useParams } from 'react-router-dom'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ControlledMultipleSelect } from 'src/components/controlled-multiple-select/controlled-multiple-select'

type MainSectionProps = {
	galleryOptions?: SelOption[]
	photo?: ImageItemWithText[]
	photos?: ImageItemWithText[]
	chainedEvent?: SelOption[]
	chainedObjects?: MultiSelOption[]
}

export const MainSection: FC<MainSectionProps> = ({
	galleryOptions,
	photo,
	photos,
	chainedObjects,
	chainedEvent,
}) => {
	const { id = '0' } = useParams()
	return (
		<AdminSection className={styles.mainSection} isBlock={false}>
			<ControlledInput
				name='title'
				label='Заголовок новости (не больше 200 символов)'
				isTextarea
				height='56px'
				margin='0 0 20px 0'
			/>
			<GridRow $template='auto/141px 141px' $width='auto'>
				<ControlledDateInput
					className={adminStyles.adminDateInput}
					label='Дата публикации'
					name='itemdate'
					dateFormat='yyyy-MM-dd'
					placeholder='гггг-мм-дд'
				/>
				<ControlledDateInput
					className={adminStyles.adminTimeInput}
					label='Время публикации'
					name='time_from'
					placeholder='чч.мм'
					dateFormat='HH:mm:ss'
					showTimeSelectOnly
					showTimeSelect
				/>
			</GridRow>
			<ControlledSelect
				name='events'
				label='Связанное событие'
				selectOptions={chainedEvent ?? [{ label: 'Выберите событие', value: '0' }]}
				margin='0 0 20px 0'
			/>
			<ControlledMultipleSelect
				name='objlist'
				label='Связанные объекты'
				selectOptions={
					chainedObjects ?? [{ label: 'Выберите объект', value: '0', selected: false }]
				}
				placeholder='Выберите объекты'
				margin='0 0 20px 0'
			/>
			<ControlledInput name='relatedNews' label='Связанная новость' margin='0 0 20px 0' />
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
			<GallerySection images={photos} idItem={id} />
		</AdminSection>
	)
}
