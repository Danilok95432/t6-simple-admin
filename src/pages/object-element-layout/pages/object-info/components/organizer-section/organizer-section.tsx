import { type FC } from 'react'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { GridRow } from 'src/components/grid-row/grid-row'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { ControlledMaskedInput } from 'src/components/controlled-masked-input/controlled-masked-input'

import styles from './index.module.scss'

export const OrganizerSection: FC = () => {
	return (
		<AdminSection
			titleText='Организатор события'
			innerClassName={styles.objectOrganizerInner}
			titleStyleClass={styles.objectOrganizerTitle}
		>
			<ControlledInput
				name='name'
				label='Название организации'
				placeholder='ООО “Название компании”'
			/>

			<GridRow $margin='20px 0' $gap='10px'>
				<ControlledInput name='ogrn' label='ОГРН' />

				<ControlledInput name='inn' label='ИНН' />
			</GridRow>

			<ControlledInput name='address' label='Адрес' />

			<GridRow $margin='20px 0' $gap='10px'>
				<ControlledMaskedInput
					name='phone'
					label='Номер телефона'
					mask='{+7} (000) 000-00-00'
					placeholder='+7 (999) 000-77-44'
				/>
			</GridRow>
		</AdminSection>
	)
}
