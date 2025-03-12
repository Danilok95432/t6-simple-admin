import { type FC } from 'react'
import { type SelOption } from 'src/types/select'
import { type ImageItemWithText } from 'src/types/photos'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'

import styles from './index.module.scss'

type MainSectionProps = {
	objectTypes?: SelOption[]
	objectApply?: SelOption[]
	photo?: ImageItemWithText[]
}

export const MainSection: FC<MainSectionProps> = ({ objectTypes, objectApply, photo }) => {
	return (
		<AdminSection innerClassName={styles.mainSectionInner} titleText='Основные данные'>
			<ControlledInput
				name='title'
				label='Название объекта *'
				placeholder='например, Мастерская керамики...'
				margin='0 0 20px 0'
			/>
			<ControlledSelect
				selectOptions={objectTypes ?? [{ label: 'Не выбрано', value: '0' }]}
				name='object_types'
				label='Тип объекта *'
				margin='0 0 20px 0'
			/>
			<ControlledSelect
				selectOptions={objectApply ?? [{ label: 'Не выбрано', value: '0' }]}
				name='object_apply'
				label='Принадлежность объекта *'
				margin='0 0 20px 0'
			/>
			<ReactDropzone
				label='Основное изображение'
				name='photo'
				prompt='JPEG, PNG, 500х500px, не более 2.5 Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				margin='0 0 20px 0'
				previewVariant='sm-img'
				imgtype='objects'
				fileImages={photo}
			/>
			<ControlledInput
				name='mainDesc'
				label='Краткое описание объекта *'
				placeholder='Поле ввода текста описания'
				margin='0 0 20px 0'
				height='105px'
				isTextarea
			/>
			<ControlledInput
				name='descList'
				label='Полное описание объекта *'
				placeholder='Поле ввода текста статьи'
				margin='0 0 10px 0'
				height='250px'
				isTextarea
			/>
		</AdminSection>
	)
}
