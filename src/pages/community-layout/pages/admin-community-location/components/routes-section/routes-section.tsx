import { type FC } from 'react'
import { type LocationInputs } from 'src/pages/community-layout/pages/admin-community-location/schema'

import { useFieldArray, useFormContext } from 'react-hook-form'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { GridRow } from 'src/components/grid-row/grid-row'
import { AddButton } from 'src/UI/AddButton/AddButton'

import styles from './index.module.scss'

export const RoutesSection: FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<LocationInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'routes',
	})

	return (
		<AdminSection titleText='Маршруты' sectionName='routesSection'>
			<ul>
				{fields?.map((field, idx) => (
					<li className={styles.routeItem} key={field.id}>
						<h4>Маршрут {idx + 1}</h4>
						<GridRow>
							<div>
								<ControlledInput
									name={`routes.${idx}.routeTitle`}
									dynamicError={errors?.routes?.[idx]?.routeTitle}
									placeholder='Название маршрута'
								/>
								<ControlledInput
									name={`routes.${idx}.routeDesc`}
									dynamicError={errors?.routes?.[idx]?.routeDesc}
									placeholder='Описание маршрута'
								/>
							</div>
							<ControlledInput
								name={`routes.${idx}.routeScript`}
								dynamicError={errors?.routes?.[idx]?.routeScript}
								placeholder='Текст скрипта Яндекса'
								isTextarea
							/>
						</GridRow>

						{idx !== 0 && (
							<button type='button' onClick={() => remove(idx)}>
								Удалить
							</button>
						)}
					</li>
				))}
			</ul>
			<AddButton
				type='button'
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
		</AdminSection>
	)
}
