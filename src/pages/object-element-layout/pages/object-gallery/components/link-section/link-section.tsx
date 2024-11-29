import { type FC } from 'react'
import { type ObjectGalleryInputs } from '../../schema'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { Container } from 'src/UI/Container/Container'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { TrashIconSvg } from 'src/UI/icons/trashIconSVG'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { FlexRow } from 'src/components/flex-row/flex-row'

import styles from './index.module.scss'

export const LinkSection: FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<ObjectGalleryInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'links',
	})

	return (
		<Container $padding='40px 0 55px 0' $paddingMobile='40px 0 55px 0'>
			<p className={styles.linkDesc}>
				Ваш план обслуживания не предусматривает хранения большого объема контента (изображений и
				видео) на серверах Системы. <br /> Для размещения фотографий в галерее Вашего отделения
				подключите их методом указания прямых ссылок на сторонних хостингах.
			</p>
			<ul>
				{fields?.map((field, idx) => (
					<li key={field.id} className={styles.linkContainer}>
						<FlexRow>
							<ControlledInput
								name={`links.${idx}.url`}
								placeholder='https://vk.com/...'
								dynamicError={errors.links?.[idx]?.url}
								margin='0 0 15px 0'
								width='60%'
							/>
							{idx !== 0 && (
								<button className={styles.linkDeleteBtn} type='button' onClick={() => remove(idx)}>
									<TrashIconSvg />
								</button>
							)}
						</FlexRow>
					</li>
				))}
			</ul>
			<AdminButton
				as='button'
				$height='35px'
				onClick={() => {
					append(
						{
							url: '',
						},
						{ shouldFocus: false },
					)
				}}
			>
				{'Добавить ещё одну ссылку'}
			</AdminButton>
		</Container>
	)
}
