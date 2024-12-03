import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { GridRow } from 'src/components/grid-row/grid-row'

export const DescSection = () => {
	return (
		<AdminSection isBlock={false}>
			<ControlledInput
				name='shortDesc'
				label='Краткое описание *'
				placeholder='Краткое описание события'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='fullDesc'
				label='Подробное описание *'
				placeholder='Подробное описание события'
				isTextarea
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='eventConditions'
				label='Условия участия *'
				placeholder='Условия участия в событии'
				isTextarea
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='eventSchedule'
				label='Расписание события *'
				placeholder='Расписание события нумерованным текстом'
				isTextarea
				height='180px'
				margin='0 0 20px 0'
			/>
			<GridRow $template='auto/ 0.5fr' $margin='0 0 20px 0'>
				<ControlledSelect
					label='Возрастной рейтинг *'
					name='visitingAge'
					selectOptions={[
						{ label: 'посещение, с 16 лет', value: '1' },
						{ label: 'посещение, с 18 лет', value: '2' },
						{ label: 'без ограничение по возрасту', value: '3' },
					]}
				/>
			</GridRow>
			<ControlledSelect
				label='Площадка *'
				name='areaList'
				selectOptions={[
					{ label: 'выбрать из списка', value: '0' },
					{ label: 'площадка 1', value: '1' },
					{ label: 'площадка 2', value: '2' },
				]}
			/>
		</AdminSection>
	)
}
