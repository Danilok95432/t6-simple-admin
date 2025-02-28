import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { Disclaimer } from './components/disclaimer/disclaimer'
import { CustomText } from 'src/components/custom-text/custom-text'

import styles from './index.module.scss'

export const MainSection = () => {
	return (
		<AdminSection isBlock={false}>
			<ControlledInput
				name='titlePartner'
				label='Название партнера *'
				placeholder='Начните вводить название'
				maxWidth='1140px'
				margin='0 0 40px 0'
			/>
			<CustomText $fontSize='14px' $fontWeight='600' $margin='0 0 18px'>
				Виды партнерства (возможен выбор нескольких видов)
			</CustomText>
			<FlexRow $margin='0 0 40px' $direction='row' $gap='45px'>
				<div className={styles.tableCheckBoxes}>
					<ControlledCheckbox name='generalSponsor' label='Генеральный спонсор' type='checkbox' />
					<ControlledCheckbox name='partner' label='Партнер событий' type='checkbox' />
					<ControlledCheckbox name='infoPartner' label='Информационный партнер' type='checkbox' />
					<ControlledCheckbox name='sponsor' label='Спонсор' type='checkbox' />
					<ControlledCheckbox name='organizer' label='Организатор событий' type='checkbox' />
					<ControlledCheckbox name='volonteer' label='Волонтерская организация' type='checkbox' />
					<ControlledCheckbox name='supplier' label='Поставщик' type='checkbox' />
					<ControlledCheckbox name='coOrganizer' label='Со-организатор' type='checkbox' />
					<ControlledCheckbox
						name='adminPartner'
						label='Административный партнер'
						type='checkbox'
					/>
				</div>
				<Disclaimer />
			</FlexRow>
		</AdminSection>
	)
}
