import { type FC } from 'react'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'

export const TitleSection: FC = () => {
	return (
		<AdminSection titleText='Название статьи и текст верхней части'>
			<ControlledInput
				name='articleName'
				label='Название статьи*'
				placeholder='Название статьи'
				margin='0 0 20px 0'
				width='100%'
			/>
			<ControlledInput
				name='articleTopText'
				label='Текст верхней части статьи*'
				margin='0'
				height='218px'
				isTextarea
			/>
		</AdminSection>
	)
}
