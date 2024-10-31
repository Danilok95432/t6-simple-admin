import { CustomText } from 'src/components/custom-text/custom-text'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'

import styles from './index.module.scss'

export const PreviewSection = () => {
	return (
		<section>
			<ul className={styles.previewSectionList}>
				<li>
					<CustomText $margin='0 0 1px 0' $fontWeight='600'>
						Логотип *
					</CustomText>
					<CustomText $margin='0 0 12px 0'>
						соотношение сторон 1:1 или 1:2, JPEG, PNG, SVG
					</CustomText>
					<ReactDropzone
						name='contentLogo'
						prompt='Перетащите изображение на это поле'
						accept={{
							'image/png': ['.png'],
							'image/jpeg': ['.jpeg'],
							'image/svg+xml': ['.svg'],
						}}
					/>
				</li>
				<li>
					<CustomText $margin='0 0 1px 0' $fontWeight='600'>
						Упрощенный логотип
					</CustomText>
					<CustomText $margin='0 0 12px 0'>
						соотношение сторон 1:1 или 1:2, JPEG, PNG, SVG
					</CustomText>
					<ReactDropzone
						name='simpleLogo'
						prompt='Перетащите изображение на это поле'
						accept={{
							'image/png': ['.png'],
							'image/jpeg': ['.jpeg'],
							'image/svg+xml': ['.svg'],
						}}
					/>
				</li>
				<li>
					<CustomText $margin='0 0 1px 0' $fontWeight='600'>
						Афиша *
					</CustomText>
					<CustomText $margin='0 0 12px 0'>А4 альбомн. или книж., JPEG, PNG, SVG</CustomText>
					<ReactDropzone
						name='poster'
						prompt='Перетащите изображение на это поле'
						accept={{
							'image/png': ['.png'],
							'image/jpeg': ['.jpeg'],
							'image/svg+xml': ['.svg'],
						}}
					/>
				</li>
				<li>
					<CustomText $margin='0 0 1px 0' $fontWeight='600'>
						Картинка для сайта
					</CustomText>
					<CustomText $margin='0 0 12px 0'>соотношение сторон 16:10, JPEG, PNG</CustomText>
					<ReactDropzone
						name='sitePicture'
						prompt='Перетащите изображение на это поле'
						accept={{
							'image/png': ['.png'],
							'image/jpeg': ['.jpeg'],
						}}
					/>
				</li>
			</ul>
		</section>
	)
}
