import { AdminSection } from 'src/components/admin-section/admin-section'
import { PromptInput } from 'src/components/prompt-input/prompt-input'

import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { GridRow } from 'src/components/grid-row/grid-row'
import { Link } from 'react-router-dom'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { CustomText } from 'src/components/custom-text/custom-text'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const DateSection = () => {
	return (
		<AdminSection>
			<PromptInput
				promptContent={
					<span>
						Укажите дату и время начала и окончания события. Рекомендуем также использовать{' '}
						<Link to={AdminRoute.AdminHome}>раздел настроек «Расписание»</Link>
					</span>
				}
				$margin='0'
			>
				<div>
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
				</div>
			</PromptInput>
			<div>
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
			</div>
		</AdminSection>
	)
}
