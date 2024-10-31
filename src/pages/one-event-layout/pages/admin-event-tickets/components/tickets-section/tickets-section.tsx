import { type FC } from 'react'
import {
	defaultTicketValues,
	type EventTicketsInputs,
} from 'src/pages/one-event-layout/pages/admin-event-tickets/schema'

import cn from 'classnames'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { RemoveBlockSvg } from 'src/UI/icons/removeBlockSVG'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { GridRow } from 'src/components/grid-row/grid-row'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { CustomText } from 'src/components/custom-text/custom-text'
import { PromptInput } from 'src/components/prompt-input/prompt-input'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { ControlledMaskedInput } from 'src/components/controlled-masked-input/controlled-masked-input'

export const TicketsSection: FC = () => {
	const {
		control,
		formState: { errors },
		watch,
	} = useFormContext<EventTicketsInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'tickets',
	})
	return (
		<AdminSection
			titleText='Билетная и пропускная система'
			sectionName='ticketsSection'
			switcherText='Включить'
			contentBorder='none'
			contentBg='none'
			contentPadding='0'
		>
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

						<h4>Билет {idx + 1}</h4>
						<div className={adminStyles.adminBlockSection}>
							<GridRow
								$template='auto/repeat(auto-fit, minmax(200px, 420px))'
								$gap='20px'
								$margin='0 0 20px 0'
							>
								<ControlledInput
									className={adminStyles.adminMainInput}
									name={`tickets.${idx}.title`}
									dynamicError={errors.tickets?.[idx]?.title}
									label='Название билета *'
									placeholder='Название'
									margin='0'
								/>
								<ControlledMaskedInput
									className={cn(adminStyles.adminMainInput, styles.ticketSmInput)}
									name={`tickets.${idx}.quantity`}
									dynamicError={errors.tickets?.[idx]?.quantity}
									label='Билетов, не более'
									mask={Number}
								/>
							</GridRow>

							<FlexRow>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name={`tickets.${idx}.isPaidTicket`}
									label='Платный билет'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name={`tickets.${idx}.isQuickReg`}
									label='Быстрая регистрация'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name={`tickets.${idx}.isHimselfBuy`}
									label='Самостоятельная покупка'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name={`tickets.${idx}.isReturnTicket`}
									label='Возможен возврат билета'
									type='checkbox'
								/>
							</FlexRow>
							{watch(`tickets.${idx}.isPaidTicket`) && (
								<FlexRow $gap='10px' $margin='20px 0 0 0'>
									<ControlledMaskedInput
										className={cn(adminStyles.adminMainInput, styles.ticketSmInput)}
										name={`tickets.${idx}.priceTicket`}
										dynamicError={errors.tickets?.[idx]?.priceTicket}
										label='Стоимость билета *'
										mask={Number}
									/>
									<CustomText $padding='30px 0 0 0'>рублей РФ</CustomText>
								</FlexRow>
							)}
						</div>
						<div className={adminStyles.adminBlockSection}>
							<CustomText $fontSize='14px' $fontWeight='700' $margin='0 0 14px 0'>
								Доступные локации *
							</CustomText>
							<FlexRow $gap='42px'>
								<FlexRow $direction='column' $gap='11px'>
									<ControlledCheckbox
										className={adminStyles.adminCheckbox}
										name={`tickets.${idx}.isAllLocationsVisitors`}
										label='Все локации для посетителей'
										type='checkbox'
									/>
									<ControlledCheckbox
										className={adminStyles.adminCheckbox}
										name={`tickets.${idx}.isLargeField`}
										label='Большое поле'
										type='checkbox'
									/>
									<ControlledCheckbox
										className={adminStyles.adminCheckbox}
										name={`tickets.${idx}.isStandsField`}
										label='Трибуны'
										type='checkbox'
									/>
									<ControlledCheckbox
										className={adminStyles.adminCheckbox}
										name={`tickets.${idx}.isCafe`}
										label='Кафе'
										type='checkbox'
									/>
									<ControlledCheckbox
										className={adminStyles.adminCheckbox}
										name={`tickets.${idx}.isHonoraryBox`}
										label='Ложа для почетных гостей'
										type='checkbox'
									/>
								</FlexRow>
								<FlexRow $direction='column' $gap='11px'>
									<ControlledCheckbox
										className={adminStyles.adminCheckbox}
										name={`tickets.${idx}.isAllLocationsParticipants`}
										label='Все локации для участников'
										type='checkbox'
									/>
									<ControlledCheckbox
										className={adminStyles.adminCheckbox}
										name={`tickets.${idx}.isDressingRoom`}
										label='Раздевалка спортсменов'
										type='checkbox'
									/>
									<ControlledCheckbox
										className={adminStyles.adminCheckbox}
										name={`tickets.${idx}.isCanteenSportsmen`}
										label='Столовая для спортсменов'
										type='checkbox'
									/>
									<ControlledCheckbox
										className={adminStyles.adminCheckbox}
										name={`tickets.${idx}.isCoaching`}
										label='Тренерская'
										type='checkbox'
									/>
								</FlexRow>
								<FlexRow $direction='column' $gap='11px'>
									<ControlledCheckbox
										className={adminStyles.adminCheckbox}
										name={`tickets.${idx}.isAllLocationsOrganizers`}
										label='Все локации для организаторов'
										type='checkbox'
									/>
									<ControlledCheckbox
										className={adminStyles.adminCheckbox}
										name={`tickets.${idx}.isJudicial`}
										label='Судейская'
										type='checkbox'
									/>
									<ControlledCheckbox
										className={adminStyles.adminCheckbox}
										name={`tickets.${idx}.isOfficeArea`}
										label='Офис площадки'
										type='checkbox'
									/>
									<ControlledCheckbox
										className={adminStyles.adminCheckbox}
										name={`tickets.${idx}.isUnderTribune`}
										label='Подтрибунное помещение'
										type='checkbox'
									/>
								</FlexRow>
							</FlexRow>
						</div>
						<div className={adminStyles.adminBlockSection}>
							<CustomText $fontSize='14px' $fontWeight='700' $margin='0 0 14px 0'>
								Количество входов *
							</CustomText>
							<ControlledCheckbox
								className={adminStyles.adminCheckbox}
								name={`tickets.${idx}.isMultipleEntry`}
								label='Многоразовый вход'
								type='checkbox'
								$margin='0'
							/>
							{watch(`tickets.${idx}.isMultipleEntry`) && (
								<FlexRow
									className={styles.ticketEntries}
									$alignItems='center'
									$gap='10px'
									$margin='15px 0 0 0'
								>
									<ControlledCheckbox
										name={`tickets.${idx}.isMultiple`}
										type='radio'
										options={[
											{ label: 'Многоразовый безлимитный', value: 'unlimited' },
											{
												label: 'Многоразовый лимитированный, входов, не более',
												value: 'limited',
											},
											{
												label: 'Многоразовый по расписанию (разные локации)',
												value: 'limitedTiming',
											},
										]}
									/>
									<ControlledMaskedInput
										className={cn(styles.entriesCountInput, adminStyles.adminMainInput)}
										name={`tickets.${idx}.entriesCount`}
										mask={Number}
										width='50px'
										dynamicError={errors.tickets?.[idx]?.entriesCount}
									/>
									<FlexRow $direction='column' $gap='11px'>
										<ControlledCheckbox
											className={adminStyles.adminCheckbox}
											name={`tickets.${idx}.isAutographSession`}
											label='Автограф-сессия, холл гостиницы Ашамлыклар'
											type='checkbox'
											$margin='0'
										/>
										<ControlledCheckbox
											className={adminStyles.adminCheckbox}
											name={`tickets.${idx}.isTourney`}
											label='Турнир, стадион им. И.Е. Суеуебаева'
											type='checkbox'
											$margin='0'
										/>
										<ControlledCheckbox
											className={adminStyles.adminCheckbox}
											name={`tickets.${idx}.isAfterParty`}
											label='Афтерпати, ресторан «Халяль»'
											type='checkbox'
											$margin='0'
										/>
									</FlexRow>
								</FlexRow>
							)}
						</div>
						<div className={adminStyles.adminBlockSection}>
							<PromptInput
								$template='auto/minmax(100px, 416px) minmax(100px, 420px)'
								promptContent={
									<>
										Лучше всего написать, что конкретно получает владелец билета в рамках события.{' '}
										<br />
										Это описание — публичное, то есть — видно вообще всем.
									</>
								}
								$margin='0'
							>
								<ControlledInput
									className={adminStyles.adminMainInput}
									name={`tickets.${idx}.ticketDesc`}
									dynamicError={errors.tickets?.[idx]?.ticketDesc}
									label='Описание билета *'
									placeholder='Подробное описание билета'
									margin='0'
									height='105px'
									isTextarea
								/>
							</PromptInput>
						</div>
						<CustomText $fontSize='14px' $fontWeight='700' $margin='0 0 14px 0'>
							Автопропуск *
						</CustomText>
						<div className={adminStyles.adminBlockSection}>
							<ControlledCheckbox
								className={adminStyles.adminCheckbox}
								name={`tickets.${idx}.isAutoPass`}
								label='Включить автопропуск'
								type='checkbox'
								$margin='0'
							/>

							{watch(`tickets.${idx}.isAutoPass`) && (
								<>
									<CustomText $fontSize='14px' $fontWeight='700' $margin='20px 0 14px 0'>
										Локации для транспорта *
									</CustomText>
									<FlexRow $gap='42px'>
										<FlexRow $direction='column' $gap='11px'>
											<ControlledCheckbox
												className={adminStyles.adminCheckbox}
												name={`tickets.${idx}.isAllLocationsVisitorsTransport`}
												label='Все локации для посетителей'
												type='checkbox'
											/>
											<ControlledCheckbox
												className={adminStyles.adminCheckbox}
												name={`tickets.${idx}.isLargeParking`}
												label='Большая парковка'
												type='checkbox'
											/>
											<ControlledCheckbox
												className={adminStyles.adminCheckbox}
												name={`tickets.${idx}.isRefilling`}
												label='Заправка'
												type='checkbox'
											/>
										</FlexRow>
										<FlexRow $direction='column' $gap='11px'>
											<ControlledCheckbox
												className={adminStyles.adminCheckbox}
												name={`tickets.${idx}.isAllLocationsParticipantsTransport`}
												label='Все локации для участников'
												type='checkbox'
											/>
											<ControlledCheckbox
												className={adminStyles.adminCheckbox}
												name={`tickets.${idx}.isSecondEntry`}
												label='Второй въезд'
												type='checkbox'
											/>
										</FlexRow>
										<FlexRow $direction='column' $gap='11px'>
											<ControlledCheckbox
												className={adminStyles.adminCheckbox}
												name={`tickets.${idx}.isAllLocationsOrganizersTransport`}
												label='Все локации для организаторов'
												type='checkbox'
											/>
											<ControlledCheckbox
												className={adminStyles.adminCheckbox}
												name={`tickets.${idx}.isAdministrationParking`}
												label='Стоянка администрации'
												type='checkbox'
											/>
											<ControlledCheckbox
												className={adminStyles.adminCheckbox}
												name={`tickets.${idx}.isGarage`}
												label='Гараж'
												type='checkbox'
											/>
											<ControlledCheckbox
												className={adminStyles.adminCheckbox}
												name={`tickets.${idx}.isThirdEntry`}
												label='Третий въезд'
												type='checkbox'
											/>
										</FlexRow>
									</FlexRow>
								</>
							)}
						</div>
						<AdminButton as='button' type='button' $common $padding='9.5px 14px'>
							Сохранить билет
						</AdminButton>
					</li>
				))}
			</ul>
			<AdminButton
				as='button'
				type='button'
				$common
				$padding='10px 14px'
				onClick={() => {
					append(defaultTicketValues, { shouldFocus: false })
				}}
			>
				Добавить еще один тип билета
			</AdminButton>
		</AdminSection>
	)
}
