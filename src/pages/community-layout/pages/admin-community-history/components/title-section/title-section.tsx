import { type FC } from 'react'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'

export const TitleSection: FC = () => {
	return (
		<AdminSection>
			<ControlledInput
				name='topDescs'
				label='Текст-анонс*'
				margin='0 0 20px 0'
				height='201px'
				isTextarea
			/>

			<ControlledInput
				name='articleName'
				label='Подпись под анонсом*'
				placeholder='Текст'
				margin='0 0 20px 0'
				width='100%'
			/>
		</AdminSection>
	)
}
