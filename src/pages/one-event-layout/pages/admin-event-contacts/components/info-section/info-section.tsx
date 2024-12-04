import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { ControlledMaskedInput } from 'src/components/controlled-masked-input/controlled-masked-input'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'

export const InfoSection = () => {
	return (
		<AdminSection>
			<ControlledInput
				name='site'
				label='Интернет-сайт'
				placeholder='Полное название события'
				margin='0 0 20px 0'
			/>
			<ControlledMaskedInput
				label='Контактный телефон'
				name='phone'
				placeholder='+7 (999) 999-00-00'
				mask='{+7} (000) 000-00-00'
			/>
			<SwitchedRadioBtns
				name='isShowPhone'
				contentRadio1='Показать всем'
				contentRadio2='Скрыть'
				valueRadio1='true'
				valueRadio2='false'
			/>
			<ControlledInput
				name='tgChannel'
				label='Телеграм-канал'
				placeholder='Полное название события'
			/>
			<ControlledInput
				name='email'
				label='Контактный e-mail'
				placeholder='адрес электронной почты'
			/>
		</AdminSection>
	)
}
