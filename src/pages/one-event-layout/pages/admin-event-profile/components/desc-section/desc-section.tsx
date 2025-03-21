import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { GridRow } from 'src/components/grid-row/grid-row'

import { type FC } from 'react'
import { type SelOption } from 'src/types/select'

type DescSectionProps = {
	ageList?: SelOption[]
	locationsList?: SelOption[]
}

export const DescSection: FC<DescSectionProps> = ({ ageList, locationsList }) => {
	return (
		<AdminSection isBlock={false}>
			<ControlledInput
				name='description'
				label='Краткое описание *'
				placeholder='Краткое описание события'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='fullinfo'
				label='Информация *'
				placeholder='Подробное описание события'
				isTextarea
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='conditions'
				label='Условия участия *'
				placeholder='Условия участия в событии'
				isTextarea
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='raspisanie'
				label='Расписание события *'
				placeholder='Расписание события нумерованным текстом'
				isTextarea
				height='180px'
				margin='0 0 20px 0'
			/>
			<GridRow $template='auto/ 0.5fr' $mdTemplate='1fr / 1fr' $margin='0 0 20px 0'>
				<ControlledSelect
					label='Возрастной рейтинг *'
					name='age_list'
					selectOptions={ageList ?? [{ label: 'Не выбрано', value: '0' }]}
				/>
			</GridRow>
			<ControlledSelect
				label='Площадка *'
				name='locations_list'
				margin='0 0 25px 0'
				selectOptions={locationsList ?? [{ label: 'Не выбрано', value: '0' }]}
			/>
			{/* <p className={styles.placeRequest}>
				Если площадки нет в списке, Вы можете <a href='#'>запросить добавление новой площадки</a>
			</p> */}
		</AdminSection>
	)
}
