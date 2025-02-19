import { type FC } from 'react'
import { type ObjLocationInputs } from 'src/pages/object-element-layout/pages/object-location/schema'

import { useFieldArray, useFormContext } from 'react-hook-form'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { GridRow } from 'src/components/grid-row/grid-row'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { TrashIconSvg } from 'src/UI/icons/trashIconSVG'

import styles from './index.module.scss'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'

export const RoutesSection: FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<ObjLocationInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'routes',
	})

	return (
		<AdminSection
			titleText={`Маршруты (${fields?.length} из 3)`}
			sectionName='routesSection'
			additionalNodeForHead={
				<SwitchedRadioBtns
					name='isShowRoutesSection'
					contentRadio1='Показать всем'
					contentRadio2='Скрыть'
				/>
			}
		>
			<ul>
				{fields?.map((field, idx) => (
					<li className={styles.routeItem} key={field.id}>
						<h4>Маршрут {idx + 1} </h4>
						<GridRow>
							<FlexRow $direction='column' $gap='15px'>
								<ControlledInput
									name={`routes.${idx}.routeTitle`}
									dynamicError={errors?.routes?.[idx]?.routeTitle}
									placeholder='Название маршрута'
									width='100%'
								/>
								<ControlledInput
									name={`routes.${idx}.routeDesc`}
									dynamicError={errors?.routes?.[idx]?.routeDesc}
									placeholder='Описание маршрута'
									height='58px'
									isTextarea
								/>
							</FlexRow>
							<ControlledInput
								name={`routes.${idx}.routeScript`}
								dynamicError={errors?.routes?.[idx]?.routeScript}
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
								routeTitle: '',
								routeDesc: '',
								routeScript: '',
							},
							{ shouldFocus: false },
						)
					}
				>
					Добавить еще один маршрут
				</AddButton>
			)}
		</AdminSection>
	)
}
