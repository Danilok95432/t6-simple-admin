import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import styles from './index.module.scss'

export const MainSection = () => {
	return (
		<AdminSection isBlock={false} className={styles.oneQuestionInputsSection}>
			<ControlledInput
				name='title'
				label='Введите вопрос *'
				placeholder='Введите вопрос'
				maxWidth='1140px'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='content'
				label='Введите ответ *'
				placeholder='Введите ответ'
				maxWidth='1140px'
				height='78px'
				isTextarea
				margin='0 0 40px 0'
			/>
		</AdminSection>
	)
}
