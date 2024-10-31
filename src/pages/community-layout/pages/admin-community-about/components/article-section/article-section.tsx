import { type FC } from 'react'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'

export const ArticleSection: FC = () => {
	return (
		<AdminSection titleText='Основная статья' sectionName='articleSection'>
			<ControlledInput
				name='articleName'
				label='Название статьи'
				placeholder='Название статьи'
				width='78%'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='articleText'
				label='Текст статьи'
				placeholder='Поле ввода текста статьи'
				margin='0'
				height='300px'
				isTextarea
			/>
		</AdminSection>
	)
}
