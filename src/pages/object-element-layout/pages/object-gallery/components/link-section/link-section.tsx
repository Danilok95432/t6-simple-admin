import { type FC } from 'react'

import { Container } from 'src/UI/Container/Container'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import styles from './index.module.scss'

export const LinkSection: FC = () => {
	return (
		<Container $padding='0px 0 15px 0' $paddingMobile='0px 0 15px 0'>
			<p className={styles.linkDesc}>
				Ваш план обслуживания не предусматривает хранения большого объема контента (изображений и
				видео) на серверах Системы. <br /> Для размещения фотографий в галерее Вашего отделения
				подключите их методом указания прямых ссылок на сторонних хостингах.
			</p>
			<ControlledInput name='link' placeholder='https://vk.com/...' maxWidth='60%' />
		</Container>
	)
}
