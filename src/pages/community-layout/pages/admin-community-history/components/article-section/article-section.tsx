import { type FC } from 'react'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'

export const ArticleSection: FC = () => {
	return (
		<AdminSection titleText='Основная статья' sectionName='bottomDescsSection'>
			<ControlledInput
				name='bottomDescs'
				label='Текст статьи*'
				placeholder='Поле ввода текста статьи'
				margin='0'
				height='300px'
				isTextarea
			/>
		</AdminSection>
	)
}
