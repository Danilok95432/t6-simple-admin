import { type FC } from 'react'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { ControlledMaskedInput } from 'src/components/controlled-masked-input/controlled-masked-input'

export const ContactsSection: FC = () => {
	return (
		<AdminSection titleText='Контакты, социальные сети, карта'>
			<FlexRow $margin='20px 0' $direction='row' $gap='10px' $maxWidth='78%'>
				<ControlledMaskedInput
					name='phoneNumber'
					label='Номер телефона'
					mask='{+7} (000) 000-00-00'
					$width='calc(50% - 5px)'
					placeholder='+7 (999) 000-77-44'
				/>
				<ControlledInput
					name='emailAddress'
					label='Адрес электронной почты (e-mail)'
					placeholder='example@example.com'
					width='calc(50% - 5px)'
				/>
			</FlexRow>
			<ControlledInput
				name='emailAddressFull'
				label='Полный почтовый адрес объекта*'
				width='78%'
				placeholder='example@example.com'
			/>
			<FlexRow $margin='20px 0' $direction='row' $gap='10px' $maxWidth='78%' $alignItems='flex-end'>
				<ControlledInput
					name='tgText'
					label='Телеграм'
					width='calc(50% - 5px)'
					placeholder='Текст ссылки'
				/>
				<ControlledInput name='tgAddress' width='calc(50% - 5px)' placeholder='Адрес URL' />
			</FlexRow>
			<FlexRow
				$margin='0 0 20px 0'
				$direction='row'
				$gap='10px'
				$maxWidth='78%'
				$alignItems='flex-end'
			>
				<ControlledInput
					name='vkText'
					label='ВКонтакте'
					width='calc(50% - 5px)'
					placeholder='Текст ссылки'
				/>
				<ControlledInput name='vkAddress' width='calc(50% - 5px)' placeholder='Адрес URL' />
			</FlexRow>
			<ControlledInput
				name='coordination'
				label='Координаты объекта (широта и долгота в градусах, минутах, секундах)*'
				placeholder='53.129867, 41.400010'
				width='78%'
				margin='0 0 10px 0'
			/>
		</AdminSection>
	)
}
