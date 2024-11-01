import { type FC } from 'react'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const MailSection: FC = () => {
	return (
		<AdminSection titleText='Почтовый адрес' sectionName='mailSection'>
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
