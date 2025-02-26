import { type FC } from 'react'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

export const GallerySection: FC = () => {
	return (
		<AdminSection
			titleText='Галерея'
			sectionName='hide_gallery'
			additionalNodeForHead={
				<SwitchedRadioBtns
					name='hide_gallery'
					contentRadio1='Показать всем'
					contentRadio2='Скрыть'
				/>
			}
		>
			<p>
				Ваш план обслуживания не предусматривает хранения большого объема контента (изображений и
				видео) на серверах Системы. <br />
				Для размещения фотографий в галерее Вашего отделения подключите их методом указания прямых
				ссылок на сторонних хостингах.
			</p>
			<ControlledInput
				name='connectPhoto'
				placeholder='https://vk.com/...'
				maxWidth='920px'
				margin='15px 0 15px 0'
			/>
			<AdminButton $height='35px' $padding='0 21px' type='button'>
				Подключить фото
			</AdminButton>
		</AdminSection>
	)
}
