import { type ProgramInputs } from 'src/pages/one-event-layout/pages/admin-event-program/schema'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'
import { GridRow } from 'src/components/grid-row/grid-row'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { TrashIconSvg } from 'src/UI/icons/trashIconSVG'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const ProgramPointsSection = () => {
	const { control } = useFormContext<ProgramInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'points',
	})
	return (
		<AdminSection
			titleText='Пункты программы'
			sectionName='pointsSection'
			additionalNodeForHead={
				<SwitchedRadioBtns
					name='isShowPointsSection'
					contentRadio1='Показать всем'
					contentRadio2='Скрыть'
				/>
			}
		>
			<div>
				{fields?.map((field, idx) => (
					<div key={field.id}>
						<FlexRow>
							<ControlledInput
								label='Название пункта программы'
								name={`points.${idx}.pointTitle`}
							/>
							{idx !== 0 && (
								<button type='button' onClick={() => remove(idx)}>
									<TrashIconSvg />
								</button>
							)}
						</FlexRow>
						<GridRow $template='auto / 0.8fr 0.8fr 0.8fr 1.6fr'>
							<ControlledDateInput
								className={adminStyles.adminDateInput}
								name={`points.${idx}.pointDate`}
								dateFormat='dd.MM.yyyy'
								placeholder='дд.мм.гггг'
							/>
							<ControlledDateInput
								className={adminStyles.adminTimeInput}
								name={`points.${idx}.pointTimeStart`}
								placeholder='чч.мм'
								dateFormat='HH:mm'
								showTimeSelectOnly
								showTimeSelect
							/>
							<ControlledDateInput
								className={adminStyles.adminTimeInput}
								name={`points.${idx}.pointTimeEnd`}
								placeholder='чч.мм'
								dateFormat='HH:mm'
								showTimeSelectOnly
								showTimeSelect
							/>
							<ControlledInput name={`points.${idx}.pointLocation`} placeholder='Локация' />
						</GridRow>
					</div>
				))}
			</div>
			<AddButton
				type='button'
				$margin='35px 0 0 0'
				onClick={() =>
					append(
						{
							pointTitle: '',
							pointDate: null,
							pointTimeStart: null,
							pointTimeEnd: null,
							pointLocation: '',
						},
						{ shouldFocus: false },
					)
				}
			>
				Добавить пункт
			</AddButton>
		</AdminSection>
	)
}
