import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { CustomText } from 'src/components/custom-text/custom-text'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const MainSection = () => {
	return (
		<AdminSection className={styles.mainSection} isBlock={false}>
			<ControlledInput
				name='titleNews'
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
				name='datePublish'
				dateFormat='dd.MM.yyyy'
				placeholder='дд.мм.гггг'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='tags'
				label='Введите теги через запятую. Не более 5 тегов на 1 новость'
				placeholder='Тег1, тег 2'
				margin='0 0 20px 0'
			/>
			<ControlledSelect
				selectOptions={[{ label: 'Не выбрано', value: '1' }]}
				name='gallery'
				label='Галерея'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='shortDesc'
				label='Краткое описание (анонс новости)'
				isTextarea
				height='200px'
				margin='0 0 20px 0'
			/>
			<QuillEditor name='textNews' label='Текст новости' $heightEditor='350px' $maxWidth='1140px' />
			<ReactDropzone
				label='Основное изображение'
				name='mainImg'
				prompt='JPEG, PNG, 500х500px, не более 2.5 Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				margin='20px 0 20px 0'
			/>
		</AdminSection>
	)
}
