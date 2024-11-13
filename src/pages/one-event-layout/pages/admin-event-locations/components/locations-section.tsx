import { type FC, useState } from 'react'
import { type EventLocationsInputs } from 'src/pages/one-event-layout/pages/admin-event-locations/schema'

import { useFieldArray, useFormContext } from 'react-hook-form'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { RemoveBlockSvg } from 'src/UI/icons/removeBlockSVG'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { PromptInput } from 'src/components/prompt-input/prompt-input'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
export const LocationsSection: FC = () => {
	const [locAlerts, setLocAlerts] = useState<string[]>([
		'Для того, чтобы указывать доступные локации в билете, их нужно создать в этом разделе!',
	])

	const removeLocAlert = (idx: number) => {
		const filteredAlerts = locAlerts.filter((el, alertIdx) => alertIdx !== idx)
		setLocAlerts(filteredAlerts)
	}

	const {
		control,
		formState: { errors },
	} = useFormContext<EventLocationsInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'locations',
	})
	return (
		<AdminSection titleText='Набор локаций' sectionName='locationsSection'>
			<ul className={styles.locAlertsList}>
				{locAlerts?.map((alertEl, idx) => (
					<li key={alertEl}>
						<span>Внимание!</span> {alertEl}
						<button onClick={() => removeLocAlert(idx)} type='button'>
							<RemoveBlockSvg />
						</button>
					</li>
				))}
			</ul>

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

						<h4>Локация {idx + 1}</h4>
						<PromptInput
							promptContent='Например, гостиница Айсылу, конференц-зал или стадион им. Суеуебаева, трибуны'
							$margin='0 0 15px 0'
							$template='auto/repeat(auto-fit, minmax(250px, 0.45fr))'
						>
							<ControlledInput
								className={adminStyles.adminMainInput}
								name={`locations.${idx}.locName`}
								dynamicError={errors?.locations?.[idx]?.locName}
								label='Название локации *'
								placeholder='Полное название локации'
								margin='0'
							/>
						</PromptInput>
						<PromptInput
							promptContent='Опишите локацию в нескольких словах: первый ледовый дворец города Когалым.'
							$margin='0 0 20px 0'
							$template='auto/repeat(auto-fit, minmax(250px, 0.45fr))'
						>
							<ControlledInput
								className={adminStyles.adminMainInput}
								name={`locations.${idx}.locDesc`}
								dynamicError={errors?.locations?.[idx]?.locDesc}
								label='Описание'
								placeholder='Краткое описание локации'
								margin='0'
							/>
						</PromptInput>
						<PromptInput
							promptContent='Точный почтовый адрес локации (если он есть)'
							$margin='0 0 20px 0'
							$template='auto/repeat(auto-fit, minmax(250px, 0.45fr))'
						>
							<ControlledInput
								className={adminStyles.adminMainInput}
								name={`locations.${idx}.locAddress`}
								dynamicError={errors?.locations?.[idx]?.locAddress}
								label='Точный адрес'
								placeholder='Индекс, город, улица, дом'
								margin='0'
							/>
						</PromptInput>
						<PromptInput
							promptContent='Если у локации нет точного адреса, но требуется указать её  расположение на карте, вставьте в это поле код виджета карт Яндекса.'
							$margin='0 0 15px 0'
							$template='auto/repeat(auto-fit, minmax(250px, 0.45fr))'
						>
							<ControlledInput
								className={adminStyles.adminMainInput}
								name={`locations.${idx}.locWidget`}
								dynamicError={errors?.locations?.[idx]?.locWidget}
								label='Код виджета Яндекс'
								placeholder='Код виджета вставлять сюда'
								isTextarea
								height='105px'
								margin='0'
							/>
						</PromptInput>
						<PromptInput
							className={styles.locationPrompt}
							promptContent='Пешеходная для пешеходов, автомобильная для автотранспорта'
							$margin='0'
							$template='auto/repeat(auto-fit, minmax(250px, 0.45fr))'
						>
							<ControlledSelect
								className={adminStyles.adminSelect}
								label='Тип локации *'
								margin='0'
								selectOptions={[
									{ label: 'Выбрать тип локации из списка', value: '0' },
									{ label: 'Тип 1', value: '1' },
									{ label: 'Тип 2', value: '2' },
									{ label: 'Тип 3', value: '3' },
								]}
								name={`locations.${idx}.locType`}
								dynamicError={errors?.locations?.[idx]?.locType}
							/>
						</PromptInput>
						<AdminButton as='button' type='button' $padding='9.5px 14px'>
							Сохранить локацию
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
							locName: '',
							locDesc: '',
							locAddress: '',
							locWidget: '',
							locType: '0',
						},
						{ shouldFocus: false },
					)
				}}
			>
				Добавить еще одну локацию
			</AdminButton>
		</AdminSection>
	)
}
