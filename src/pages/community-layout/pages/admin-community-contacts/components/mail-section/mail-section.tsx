import { type FC } from 'react'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const MailSection: FC = () => {
	return (
		<AdminSection
			titleText='Почтовый адрес'
			sectionName='mailSection'
			contentBg='none'
			contentBorder='none'
			contentPadding='7px 0 0'
			switcherText='Включить почтовый адрес'
		>
			<ControlledInput
				className={adminStyles.adminMainInput}
				name='mailAddress'
				label='Введите адрес'
				placeholder='Адрес'
				margin='0'
			/>
		</AdminSection>
	)
}
