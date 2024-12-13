import { type FC } from 'react'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'

import styles from './index.module.scss'

export const MainSection: FC = () => {
	return (
		<AdminSection innerClassName={styles.mainSectionInner} titleText='Основные данные'>
			<ControlledInput
				name='title'
				label='Название объекта *'
				placeholder='например, Мастерская керамики...'
				margin='0 0 20px 0'
			/>
			<ControlledSelect
				selectOptions={[
					{ label: 'Ремесленный центр', value: '1' },
					{ label: 'Центральный', value: '2' },
					{ label: 'Здание', value: '3' },
					{ label: 'Площадка', value: '4' },
					{ label: 'Выставка', value: '5' },
					{ label: 'Культурный центр', value: '6' },
					{ label: 'Северо-Западный', value: '7' },
					{ label: 'Приволжский', value: '8' },
				]}
				name='object_types'
				label='Тип объекта *'
				margin='0 0 20px 0'
			/>
			<ControlledSelect
				selectOptions={[
					{ label: 'Совместная', value: '1' },
					{ label: 'Частная', value: '2' },
					{ label: 'Государственная', value: '3' },
					{ label: 'Муниципальная', value: '4' },
					{ label: 'АНО Татарский Этноспорт', value: '5' },
					{ label: 'Без образования юрлица', value: '6' },
				]}
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
			/>
			<ControlledInput
				name='mainDescs'
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
