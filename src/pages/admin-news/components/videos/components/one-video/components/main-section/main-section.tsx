import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { CustomText } from 'src/components/custom-text/custom-text'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const MainSection = () => {
	return (
		<AdminSection isBlock={false}>
			<ControlledInput
				name='titleVideo'
				label='Название записи (не больше 200 символов)'
				isTextarea
				height='56px'
				margin='0 0 20px 0'
			/>
			<CustomText $margin='0 0 5px 0' $fontWeight='600'>
				Дата публикации
			</CustomText>
			<ControlledDateInput
				className={adminStyles.adminDateInput}
				name='datePublish'
				dateFormat='dd.MM.yyyy'
				placeholder='дд.мм.гггг'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='tags'
				label='Введите теги через запятую. Не более 5 тегов на 1 видео'
				placeholder='Тег1, тег 2'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='shortDesc'
				label='Краткое описание (хранится в базе)'
				isTextarea
				height='78px'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='linkVideo'
				label='Ссылка на видео ВК'
				placeholder='Введите текст ссылки на запись'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='textCode'
				label='Текст кода для вставки (экспорт из ВК)'
				isTextarea
				height='78px'
				margin='0 0 20px 0'
			/>
			<ReactDropzone
				label='Основное изображение'
				name='mainImg'
				prompt='PNG, JPG, JPEG. 1000 х1000px, не более 3 Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				margin='20px 0 20px 0'
			/>
		</AdminSection>
	)
}