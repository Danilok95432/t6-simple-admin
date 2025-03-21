import { type ProgramInputs } from 'src/pages/one-event-layout/pages/admin-event-program/schema'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'
import { GridRow } from 'src/components/grid-row/grid-row'
import { TrashIconSvg } from 'src/UI/icons/trashIconSVG'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { CustomText } from 'src/components/custom-text/custom-text'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { FlexRow } from 'src/components/flex-row/flex-row'

export const ProgramPointsSection = () => {
	const { control } = useFormContext<ProgramInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'program',
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
					<div className={styles.pointItem} key={field.id}>
						<CustomText $fontWeight='600' $margin='0 0 10px 0'>
							Название пункта программы
						</CustomText>
						<GridRow
							$margin='0 0 18px 0'
							$template='auto / 0.95fr 0.05fr'
							$maxWidth='1196px'
							$alignItems='center'
							$gap='0'
						>
							<ControlledInput name={`program.${idx}.title`} />
							{idx !== 0 && (
								<button type='button' onClick={() => remove(idx)}>
									<TrashIconSvg />
								</button>
							)}
						</GridRow>
						<GridRow className={styles.dateRow}>
							<FlexRow $alignItems='center' $wrap='nowrap' $gap='12px'>
								<CustomText $fontWeight='600'>Дата</CustomText>
								<ControlledDateInput
									className={adminStyles.adminDateInput}
									name={`program.${idx}.itemdate`}
									dateFormat='yyyy-MM-dd'
									placeholder='гггг-мм-дд'
									margin='0'
								/>
							</FlexRow>
							<FlexRow $alignItems='center' $wrap='nowrap' $gap='12px'>
								<CustomText $fontWeight='600'>Начало</CustomText>
								<ControlledDateInput
									className={adminStyles.adminTimeInput}
									name={`program.${idx}.begin_time`}
									placeholder='чч.мм'
									dateFormat='HH:mm'
									showTimeSelectOnly
									showTimeSelect
								/>
							</FlexRow>
							<FlexRow $alignItems='center' $wrap='nowrap' $gap='12px'>
								<CustomText $fontWeight='600'>Окончание</CustomText>
								<ControlledDateInput
									className={adminStyles.adminTimeInput}
									name={`program.${idx}.end_time`}
									placeholder='чч.мм'
									dateFormat='HH:mm'
									showTimeSelectOnly
									showTimeSelect
								/>
							</FlexRow>

							<ControlledInput name={`program.${idx}.place`} placeholder='Локация' />
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
							title: '',
							itemdate: new Date(),
							begin_time: new Date(),
							end_time: '',
							place: '',
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
