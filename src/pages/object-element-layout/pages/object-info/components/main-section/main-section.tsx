import { type FC } from 'react'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AdminPromptIconSvg } from 'src/UI/icons/adminPromptIconSVG'
import { FlexRow } from 'src/components/flex-row/flex-row'

import styles from './index.module.scss'

export const MainSection: FC = () => {
	return (
		<AdminSection innerClassName={styles.mainSectionInner} titleText='Основные данные'>
			<FlexRow $maxWidth='100%' $wrap='nowrap' $gap='10px'>
				<ControlledInput
					name='title'
					label='Название объекта *'
					placeholder='например, Мастерская керамики...'
					margin='0 0 20px 0'
					width='100%'
				/>
				<AdminPromptIconSvg />
			</FlexRow>
			<FlexRow $wrap='nowrap' $maxWidth='100%' $gap='10px'>
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
					name='type'
					label='Тип объекта *'
					className={styles.mainSectionSelect}
					margin='0 0 20px 0'
				/>
				<AdminPromptIconSvg />
			</FlexRow>
			<FlexRow $wrap='nowrap' $maxWidth='100%' $gap='10px'>
				<ControlledSelect
					selectOptions={[
						{ label: 'Совместная', value: '1' },
						{ label: 'Частная', value: '2' },
						{ label: 'Государственная', value: '3' },
						{ label: 'Муниципальная', value: '4' },
						{ label: 'АНО Татарский Этноспорт', value: '5' },
						{ label: 'Без образования юрлица', value: '6' },
					]}
					name='relation'
					label='Принадлежность объекта *'
					className={styles.mainSectionSelect}
					margin='0 0 20px 0'
				/>
				<AdminPromptIconSvg />
			</FlexRow>
			<ReactDropzone
				label='Основное изображение'
				name='objectMainImg'
				prompt='JPEG, PNG, 500х500px, не более 2.5 Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				margin='0 0 20px 0'
			/>
			<FlexRow $wrap='nowrap' $maxWidth='100%' $gap='10px'>
				<ControlledInput
					name='objectDesc'
					label='Краткое описание объекта *'
					placeholder='Поле ввода текста описания'
					margin='0 0 20px 0'
					height='105px'
					isTextarea
				/>
				<AdminPromptIconSvg />
			</FlexRow>
			<FlexRow $wrap='nowrap' $maxWidth='100%' $gap='10px'>
				<ControlledInput
					name='objectDescFull'
					label='Полное описание объекта *'
					placeholder='Поле ввода текста статьи'
					margin='0 0 10px 0'
					height='250px'
					isTextarea
				/>
				<AdminPromptIconSvg />
			</FlexRow>
		</AdminSection>
	)
}
