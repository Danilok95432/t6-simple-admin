import { useFormContext } from 'react-hook-form'

import { GridRow } from 'src/components/grid-row/grid-row'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { CustomText } from 'src/components/custom-text/custom-text'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import regStyles from 'src/pages/one-event-layout/pages/admin-event-reg/index.module.scss'

export const RegVisitor = () => {
	const { watch } = useFormContext()

	return (
		<AdminSection titleText='Регистрация посетителей' sectionName='regVisitorSection'>
			<GridRow $template='auto/repeat(auto-fit, minmax(420px, 1fr))' $margin='0 0 24px 0'>
				<div>
					<div>
						<CustomText $margin='0 0 5px 0' $fontWeight='600'>
							Открытие регистрации *
						</CustomText>
						<GridRow $template='auto/204px 204px' $margin='0 0 10px 0'>
							<ControlledDateInput
								className={adminStyles.adminDateInput}
								name='regVisitorDateOpen'
								dateFormat='dd.MM.yyyy'
								placeholder='дд.мм.гггг'
								margin='0'
							/>
							<ControlledDateInput
								className={adminStyles.adminTimeInput}
								name='regVisitorTimeOpen'
								placeholder='чч.мм'
								dateFormat='HH:mm'
								showTimeSelectOnly
								showTimeSelect
								margin='0'
							/>
						</GridRow>
					</div>
					<div>
						<CustomText $margin='0 0 5px 0' $fontWeight='600'>
							Закрытие регистрации *
						</CustomText>
						<GridRow $template='auto/204px 204px'>
							<ControlledDateInput
								className={adminStyles.adminDateInput}
								name='regVisitorDateClose'
								dateFormat='dd.MM.yyyy'
								placeholder='дд.мм.гггг'
								margin='0'
							/>
							<ControlledDateInput
								className={adminStyles.adminTimeInput}
								name='regVisitorTimeClose'
								placeholder='чч.мм'
								dateFormat='HH:mm'
								showTimeSelectOnly
								showTimeSelect
								margin='0'
							/>
						</GridRow>
					</div>
				</div>
				<div>
					<ControlledCheckbox
						className={adminStyles.adminCheckbox}
						name='autoAdmitVisitors'
						label='Автоматически допускать посетителей'
						$margin='23px 0 10px 0'
						type='checkbox'
					/>
					<ControlledCheckbox
						className={adminStyles.adminCheckbox}
						name='publicVisitorsList'
						label='Публичный список посетителей'
						type='checkbox'
					/>
				</div>
			</GridRow>

			<div className={regStyles.regSettings}>
				<h5>Настройки формы регистрации посетителей</h5>
				<div className={regStyles.settingsLists}>
					<ul>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Поле «Фамилия»</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regVisitorFieldSurname'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredSurnameField'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regVisitorFieldSurname')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Поле «Имя»</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regVisitorFieldName'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredNameField'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regVisitorFieldName')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Поле «Отчество»</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regVisitorFieldPatronymic'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredPatronymicField'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regVisitorFieldPatronymic')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Поле «Позывной или прозвище»</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regVisitorFieldAlias'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredAliasField'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regVisitorFieldAlias')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Поле «Город или регион»</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regVisitorFieldPlace'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredPlaceField'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regVisitorFieldPlace')}
								/>
							</div>
						</li>
					</ul>
					<ul>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Поле «Номер телефона»</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regVisitorFieldPhone'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredPhoneField'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regVisitorFieldPhone')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Поле «E-mail»</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regVisitorFieldEmail'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredEmailField'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regVisitorFieldEmail')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Выбор типа допуска или билета</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regVisitorFieldTicket'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredTicketField'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regVisitorFieldTicket')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Выбор типа посетителя</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regVisitorFieldType'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredTypeField'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regVisitorFieldType')}
								/>
							</div>
						</li>
					</ul>
					<ul>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Регистрация групп</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regVisitorFieldGroup'
									label='Разрешить'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredGroupField'
									label='Обязательно'
									type='checkbox'
									disabled={!watch('regVisitorFieldGroup')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Регистрация транспортных средств</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regVisitorFieldTransport'
									label='Разрешить'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredTransportField'
									label='Обязательно'
									type='checkbox'
									disabled={!watch('regVisitorFieldTransport')}
								/>
							</div>
							<ControlledCheckbox
								className={adminStyles.adminCheckbox}
								name='brandTransportField'
								label='Марка (ВАЗ, Skoda, KIA...)'
								type='checkbox'
								disabled={!watch('regVisitorFieldTransport')}
								$margin='10px 0 12px 0'
							/>
							<ControlledCheckbox
								className={adminStyles.adminCheckbox}
								name='modelTransportField'
								label='Модель (21083, Rapid, K5...)'
								type='checkbox'
								disabled={!watch('regVisitorFieldTransport')}
								$margin='0 0 12px 0'
							/>
							<ControlledCheckbox
								className={adminStyles.adminCheckbox}
								name='numberTransportField'
								label='Госномер (вместе с регионом)'
								type='checkbox'
								disabled={!watch('regVisitorFieldTransport')}
								$margin='0 0 12px 0'
							/>
							<ControlledCheckbox
								className={adminStyles.adminCheckbox}
								name='colorTransportField'
								label='Цвет автомобиля'
								type='checkbox'
								disabled={!watch('regVisitorFieldTransport')}
								$margin='0 0 12px 0'
							/>
							<ControlledCheckbox
								className={adminStyles.adminCheckbox}
								name='typeTransportField'
								label='Тип Т/С (легковая, автобус...)'
								type='checkbox'
								disabled={!watch('regVisitorFieldTransport')}
								$margin='0'
							/>
						</li>
					</ul>
				</div>
			</div>
		</AdminSection>
	)
}
