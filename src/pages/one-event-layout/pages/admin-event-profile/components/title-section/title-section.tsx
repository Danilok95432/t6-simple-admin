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
				margin='0'
			/>
			<div>
				<CustomText $margin='0 0 5px 0' $fontWeight='600'>
					Тип и уровень события *
				</CustomText>
				<GridRow>
					<ControlledSelect
						name='eventType'
						selectOptions={[
							{ label: 'выбрать тип из списка', value: '0' },
							{ label: 'тип 1', value: '1' },
							{ label: 'тип 2', value: '2' },
						]}
						margin='0 0 5px 0'
					/>
					<ControlledSelect
						name='eventLevel'
						selectOptions={[
							{ label: 'выбрать уровень', value: '0' },
							{ label: 'уровень 1', value: '1' },
							{ label: 'уровень 2', value: '2' },
						]}
						margin='0'
					/>
				</GridRow>
			</div>
			<ControlledInput
				name='eventSite'
				label='Интернет-сайт'
				placeholder='www.example.com'
				margin='0'
			/>
			<ControlledInput
				name='eventTags'
				label='Теги события'
				placeholder='первый тег, второй тег, третий тег'
				margin='0'
			/>
		</AdminSection>
	)
}
