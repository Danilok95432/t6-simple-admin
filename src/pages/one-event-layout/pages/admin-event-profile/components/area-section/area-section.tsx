import { PromptInput } from 'src/components/prompt-input/prompt-input'
import { GridRow } from 'src/components/grid-row/grid-row'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { CustomText } from 'src/components/custom-text/custom-text'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
export const AreaSection = () => {
	return (
		<AdminSection className={styles.areaSection}>
			<PromptInput
				promptContent='Дворец спорта, концертный зал, открытая площадка — место, на или в котором будет проводиться событие.'
				$margin='0'
			>
				<div>
					<CustomText $margin='0 0 5px 0' $fontWeight='600'>
						Площадка *
					</CustomText>
					<GridRow>
						<ControlledSelect
							className={adminStyles.adminSelect}
							name='areaList'
							selectOptions={[
								{ label: 'выбрать из списка', value: '0' },
								{ label: 'площадка 1', value: '1' },
								{ label: 'площадка 2', value: '2' },
							]}
							margin='0'
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name='areaName'
							placeholder='начните вводить название'
							margin='0'
						/>
					</GridRow>
				</div>
			</PromptInput>
		</AdminSection>
	)
}
