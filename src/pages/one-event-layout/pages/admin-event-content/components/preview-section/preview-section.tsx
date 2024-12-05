import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'

import { AdminSection } from 'src/components/admin-section/admin-section'

export const PreviewSection = () => {
	return (
		<AdminSection titleText='Основное изображение (логотип)'>
			<ReactDropzone
				name='logoImage'
				prompt='PNG, JPG, JPEG. 1000 х1000px, не более 3 Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
			/>
		</AdminSection>
	)
}
