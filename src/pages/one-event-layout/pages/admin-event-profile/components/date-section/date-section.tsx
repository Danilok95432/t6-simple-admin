import { AdminSection } from 'src/components/admin-section/admin-section'

import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { GridRow } from 'src/components/grid-row/grid-row'

import { CustomText } from 'src/components/custom-text/custom-text'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const DateSection = () => {
	return (
		<AdminSection isBlock={false}>
			<CustomText $margin='0 0 5px 0' $fontWeight='600'>
				Начало события *
			</CustomText>
			<GridRow $template='auto/204px 204px'>
				<ControlledDateInput
					className={adminStyles.adminDateInput}
					name='dateEventStart'
					dateFormat='dd.MM.yyyy'
					placeholder='дд.мм.гггг'
				/>
				<ControlledDateInput
					className={adminStyles.adminTimeInput}
					name='timeEventStart'
					placeholder='чч.мм'
					dateFormat='HH:mm'
					showTimeSelectOnly
					showTimeSelect
				/>
			</GridRow>
			<CustomText $margin='0 0 5px 0' $fontWeight='600'>
				Окончание события *
			</CustomText>
			<GridRow $template='auto/204px 204px'>
				<ControlledDateInput
					className={adminStyles.adminDateInput}
					name='dateEventEnd'
					dateFormat='dd.MM.yyyy'
					placeholder='дд.мм.гггг'
					margin='0'
				/>
				<ControlledDateInput
					className={adminStyles.adminTimeInput}
					name='timeEventEnd'
					placeholder='чч.мм'
					dateFormat='HH:mm'
					showTimeSelectOnly
					showTimeSelect
					margin='0'
				/>
			</GridRow>
		</AdminSection>
	)
}
