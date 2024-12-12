import { type FC } from 'react'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'

export const TitleSection: FC = () => {
	return (
		<AdminSection titleText='Заглавный текст'>
			<ReactDropzone
				label='Фотография'
				name='aboutTitleImage'
				prompt='PNG, JPG, JPEG. 1000 х1000px, не более 3 Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='mainDescs'
				label='Текст-анонс*'
				margin='0 0 20px 0'
				height='200px'
				isTextarea
			/>
			<ControlledInput
				name='caption'
				label='Подпись под анонсом*'
				placeholder='Текст'
				margin='0'
				width='78%'
			/>
		</AdminSection>
	)
}
