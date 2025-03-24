import { type SelOption } from 'src/types/select'
import { type FC } from 'react'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { GridRow } from 'src/components/grid-row/grid-row'
import { CustomText } from 'src/components/custom-text/custom-text'

type TitleSectionProps = {
	objectsList?: SelOption[]
	eventTypesList?: SelOption[]
	eventLevelsList?: SelOption[]
	brandsList?: SelOption[]
}

export const TitleSection: FC<TitleSectionProps> = ({
	objectsList,
	eventTypesList,
	eventLevelsList,
	brandsList,
}) => {
	return (
		<AdminSection isBlock={false}>
			<ControlledInput
				name='title'
				label='Название события *'
				placeholder='Полное название события'
				margin='0 0 20px 0'
			/>
			<ControlledSelect
				name='objects_list'
				label='Событие проводится от лица *'
				selectOptions={objectsList ?? [{ label: 'Не выбрано', value: '0' }]}
				margin='0 0 20px 0'
			/>
			<CustomText $margin='0 0 5px 0' $fontWeight='600'>
				Тип и уровень события *
			</CustomText>
			<GridRow $margin='0 0 20px 0'>
				<ControlledSelect
					name='event_types_list'
					selectOptions={eventTypesList ?? [{ label: 'Не выбрано', value: '0' }]}
				/>
				<ControlledSelect
					name='event_levels_list'
					selectOptions={eventLevelsList ?? [{ label: 'Не выбрано', value: '0' }]}
				/>
			</GridRow>
			<ControlledSelect
				name='brands_list'
				label='Бренд *'
				selectOptions={brandsList ?? [{ label: 'Не выбрано', value: '0' }]}
				margin='0 0 20px 0'
			/>

			<ControlledInput
				name='tags'
				label='Теги события'
				placeholder='первый тег, второй тег, третий тег'
			/>
		</AdminSection>
	)
}
