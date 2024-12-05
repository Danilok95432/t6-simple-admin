import { type FC } from 'react'
import { type EventContentInputs } from 'src/pages/one-event-layout/pages/admin-event-content/schema'

import { useFieldArray, useFormContext } from 'react-hook-form'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { GridRow } from 'src/components/grid-row/grid-row'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { TrashIconSvg } from 'src/UI/icons/trashIconSVG'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'

import styles from './index.module.scss'

export const PlacementSection: FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<EventContentInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'placements',
	})

	return (
		<AdminSection
			titleText={`Размещение (${fields?.length} из 3)`}
			sectionName='placementsSection'
			additionalNodeForHead={
				<SwitchedRadioBtns
					name='isShowPlacementsSection'
					contentRadio1='Показать всем'
					contentRadio2='Скрыть'
				/>
			}
		>
			<ul>
				{fields?.map((field, idx) => (
					<li className={styles.placementItem} key={field.id}>
						<h4>Место {idx + 1} </h4>
						<GridRow>
							<FlexRow $direction='column' $gap='15px'>
								<ControlledInput
									name={`placements.${idx}.placementTitle`}
									dynamicError={errors?.placements?.[idx]?.placementTitle}
									placeholder='Название места размещения'
									width='100%'
								/>
								<ControlledInput
									name={`placements.${idx}.placementDesc`}
									dynamicError={errors?.placements?.[idx]?.placementDesc}
									placeholder='Описание места и кратких правил размещения'
									height='58px'
									isTextarea
								/>
							</FlexRow>
							<ControlledInput
								name={`placements.${idx}.placementScript`}
								dynamicError={errors?.placements?.[idx]?.placementScript}
								placeholder='Текст скрипта Яндекса'
								height='106px'
								isTextarea
							/>
						</GridRow>

						{idx !== 0 && (
							<button type='button' onClick={() => remove(idx)}>
								<TrashIconSvg />
							</button>
						)}
					</li>
				))}
			</ul>
			{fields.length < 3 && (
				<AddButton
					type='button'
					$margin='35px 0 0 0'
					onClick={() =>
						append(
							{
								placementTitle: '',
								placementDesc: '',
								placementScript: '',
							},
							{ shouldFocus: false },
						)
					}
				>
					Добавить еще одно место размещения
				</AddButton>
			)}
		</AdminSection>
	)
}
