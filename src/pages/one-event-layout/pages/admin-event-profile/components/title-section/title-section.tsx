import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { GridRow } from 'src/components/grid-row/grid-row'
import { CustomText } from 'src/components/custom-text/custom-text'

export const TitleSection = () => {
	return (
		<AdminSection isBlock={false}>
			<ControlledInput
				name='eventName'
				label='Название события *'
				placeholder='Полное название события'
				margin='0 0 20px 0'
			/>
			<ControlledSelect
				name='eventLevel'
				label='Событие проводится от лица *'
				selectOptions={[
					{ label: 'Татарстанское республиканское отделение', value: '1' },
					{ label: 'лицо 1', value: '2' },
					{ label: 'лицо 2', value: '3' },
				]}
				margin='0 0 20px 0'
			/>
			<CustomText $margin='0 0 5px 0' $fontWeight='600'>
				Тип и уровень события *
			</CustomText>
			<GridRow $margin='0 0 20px 0'>
				<ControlledSelect
					name='eventType'
					selectOptions={[
						{ label: 'выбрать тип из списка', value: '0' },
						{ label: 'тип 1', value: '1' },
						{ label: 'тип 2', value: '2' },
					]}
				/>
				<ControlledSelect
					name='eventLevel'
					selectOptions={[
						{ label: 'выбрать уровень', value: '0' },
						{ label: 'уровень 1', value: '1' },
						{ label: 'уровень 2', value: '2' },
					]}
				/>
			</GridRow>

			<ControlledInput
				name='eventTags'
				label='Теги события'
				placeholder='первый тег, второй тег, третий тег'
			/>
		</AdminSection>
	)
}
