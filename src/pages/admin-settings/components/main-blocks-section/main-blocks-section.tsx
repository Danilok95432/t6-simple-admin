import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'

import styles from './index.module.scss'

export const MainBlocksSection = () => {
	return (
		<AdminSection
			className={styles.mainBlocksSection}
			titleText='Основные блоки на главной странице'
		>
			<ControlledCheckbox
				name='isShowObjects'
				label='Показать блок «Объекты»'
				$margin='0 0 25px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowEvents'
				label='Показать блок «События»'
				$margin='0 0 25px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowMap'
				label='Показать блок «Карта»'
				$margin='0 0 25px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowNews'
				label='Показать блок «Новости»'
				$margin='0 0 25px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowVideos'
				label='Показать блок «Видеолента»'
				$margin='0 0 25px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowPartners'
				label='Показать блок «Партнеры»'
				$margin='0 0 25px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowFaq'
				label='Показать блок «Часто задаваемые вопросы»'
				type='checkbox'
			/>
		</AdminSection>
	)
}
