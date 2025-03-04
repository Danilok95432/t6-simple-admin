import { type FC } from 'react'
import { type ImageItemWithText } from 'src/types/photos'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'

type TitleSectionProps = {
	logo?: ImageItemWithText[]
}

export const TitleSection: FC<TitleSectionProps> = ({ logo }) => {
	return (
		<AdminSection titleText='Заглавный текст'>
			<ReactDropzone
				label='Фотография'
				name='logo'
				prompt='PNG, JPG, JPEG. 1000 х1000px, не более 3 Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				margin='0 0 20px 0'
				previewVariant='sm-img'
				imgtype='about_general'
				fileImages={logo}
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
