import { type EventTimetableInputs } from 'src/pages/one-event-layout/pages/event-timetable-layout/pages/admin-event-timetable-edit/schema'

import cn from 'classnames'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { PromptInput } from 'src/components/prompt-input/prompt-input'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { RemoveBlockSvg } from 'src/UI/icons/removeBlockSVG'

import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { CustomText } from 'src/components/custom-text/custom-text'
import { GridRow } from 'src/components/grid-row/grid-row'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
export const TimetablesSection = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<EventTimetableInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'timetables',
	})
	return (
		<AdminSection>
			<ul>
				{fields?.map((field, idx) => (
					<li className={adminStyles.adminBlockItem} key={field.id}>
						{idx !== 0 && (
							<button
								className={adminStyles.adminRemoveBlockBtn}
								type='button'
								onClick={() => remove(idx)}
							>
								<RemoveBlockSvg />
							</button>
						)}

						<h4>Пункт расписания {idx + 1}</h4>
						<PromptInput
							promptContent='Например, Пресс-конференция министра, Взвешивание бойцов или Финальные встречи'
							$margin='0 0 15px 0'
							$template='auto/repeat(auto-fit, minmax(250px, 0.48fr))'
						>
							<ControlledInput
								className={adminStyles.adminMainInput}
								name={`timetables.${idx}.title`}
								dynamicError={errors?.timetables?.[idx]?.title}
								label='Название пункта *'
								placeholder='Название пункта расписания'
								margin='0'
							/>
						</PromptInput>
						<PromptInput
							promptContent='В списке только те локации, которые Вы создали для этого события. Выберите нужную.'
							$margin='0 0 15px 0'
							$template='auto/repeat(auto-fit, minmax(250px, 0.48fr))'
						>
							<ControlledSelect
								className={adminStyles.adminSelect}
								label='Локация *'
								margin='0'
								selectOptions={[
									{ label: 'Выбрать локацию из списка', value: '0' },
									{ label: 'Локация 1', value: '1' },
									{ label: 'Локация 2', value: '2' },
									{ label: 'Локация 3', value: '3' },
								]}
								name={`timetables.${idx}.location`}
								dynamicError={errors?.timetables?.[idx]?.location}
							/>
						</PromptInput>
						<PromptInput
							promptContent='Укажите плановые дату и время начала и окончания пункта расписания.'
							$margin='0 0 15px 0'
							$template='auto/repeat(auto-fit, minmax(200px, 0.48fr))'
						>
							<div>
								<CustomText $margin='0 0 5px 0' $fontWeight='600'>
									Начало *
								</CustomText>
								<GridRow
									$template='auto/repeat(auto-fit, minmax(150px, 1fr))'
									$gap='8px'
									$margin='0 0 10px 0'
								>
									<ControlledDateInput
										className={cn(adminStyles.adminDateInput, styles.dateInput)}
										name={`timetables.${idx}.dateStart`}
										dynamicError={errors?.timetables?.[idx]?.dateStart}
										dateFormat='dd.MM.yyyy'
										placeholder='дд.мм.гггг'
										margin='0'
									/>
									<ControlledDateInput
										className={cn(adminStyles.adminTimeInput, styles.dateInput)}
										name={`timetables.${idx}.timeStart`}
										dynamicError={errors?.timetables?.[idx]?.timeStart}
										placeholder='чч.мм'
										dateFormat='HH:mm'
										showTimeSelectOnly
										showTimeSelect
										margin='0'
									/>
								</GridRow>
							</div>
						</PromptInput>
						<CustomText $margin='0 0 5px 0' $fontWeight='600'>
							Окончание *
						</CustomText>
						<GridRow
							$template='auto/repeat(auto-fit, minmax(150px, 212px))'
							$gap='8px'
							$margin='0 0 20px 0'
							$padding='0 0 20px 0'
							$borderBottom='1px solid #C2CAC9'
						>
							<ControlledDateInput
								className={cn(adminStyles.adminDateInput, styles.dateInput)}
								name={`timetables.${idx}.dateEnd`}
								dynamicError={errors?.timetables?.[idx]?.dateEnd}
								dateFormat='dd.MM.yyyy'
								placeholder='дд.мм.гггг'
								margin='0'
							/>
							<ControlledDateInput
								className={cn(adminStyles.adminTimeInput, styles.dateInput)}
								name={`timetables.${idx}.timeEnd`}
								dynamicError={errors?.timetables?.[idx]?.timeEnd}
								placeholder='чч.мм'
								dateFormat='HH:mm'
								showTimeSelectOnly
								showTimeSelect
								margin='0'
							/>
						</GridRow>
						<AdminButton as='button' type='button' $padding='9.5px 14px'>
							Сохранить пункт
						</AdminButton>
					</li>
				))}
			</ul>
			<AdminButton
				as='button'
				type='button'
				$padding='10px 14px'
				onClick={() => {
					append(
						{
							title: '',
							location: '0',
							dateStart: new Date(),
							timeStart: new Date(),
							dateEnd: new Date(),
							timeEnd: new Date(),
						},
						{ shouldFocus: false },
					)
				}}
			>
				Добавить еще один пункт расписания
			</AdminButton>
		</AdminSection>
	)
}
