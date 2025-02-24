import { useEffect, type FC } from 'react'
import {
	type EventProfileInputs,
	eventProfileSchema,
} from 'src/pages/one-event-layout/pages/admin-event-profile/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useParams } from 'react-router-dom'
import {
	useGetEventInfoQuery,
	useGetNewIdEventQuery,
	useSaveEventProfileInfoMutation,
} from 'src/store/events/events.api'
import { formatDate, formatDateToISOWithTimezone, transformToFormData } from 'src/helpers/utils'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { TitleSection } from 'src/pages/one-event-layout/pages/admin-event-profile/components/title-section/title-section'
import { DateSection } from 'src/pages/one-event-layout/pages/admin-event-profile/components/date-section/date-section'
import { DescSection } from 'src/pages/one-event-layout/pages/admin-event-profile/components/desc-section/desc-section'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { FlexRow } from 'src/components/flex-row/flex-row'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { parse, format } from 'date-fns'

export const AdminEventProfile: FC = () => {
	const { id = '0' } = useParams()
	const { data: eventInfoData } = useGetEventInfoQuery(id)
	const [saveEventInfo] = useSaveEventProfileInfoMutation()
	const { refetch: getNewId } = useGetNewIdEventQuery(null)

	const methods = useForm<EventProfileInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventProfileSchema),
		defaultValues: {
			main: false,
			hidden: false,
		},
	})

	const onSubmit: SubmitHandler<EventProfileInputs> = async (data) => {
		const dateFormatFrom = formatDate(data.date_from)
		const dateFormatTo = formatDate(data.date_to)
		const timeFormatFrom = formatDateToISOWithTimezone(data.time_from)
		const timeFormatTo = formatDateToISOWithTimezone(data.time_to)
		if (dateFormatFrom) data.date_from = dateFormatFrom
		if (dateFormatTo) data.date_to = dateFormatTo
		const serverData = {
			title: data.title,
			tags: data.tags,
			date_from: data.date_from,
			time_from: timeFormatFrom,
			date_to: data.date_to,
			time_to: timeFormatTo,
			description: data.description,
			fullinfo: data.fullinfo,
			conditions: data.conditions,
			raspisanie: data.raspisanie,
			id_object: data.objects_list,
			id_event_type: data.event_types_list,
			id_event_level: data.event_levels_list,
			id_age_limit: data.age_list,
			id_location: data.locations_list,
		}
		const eventInfoFormData = transformToFormData(serverData)
		let eventId = id

		if (id === 'new') {
			const newIdResponse = await getNewId().unwrap()
			eventId = newIdResponse.id
			eventInfoFormData.append('id', eventId)
		} else eventInfoFormData.append('id', eventId)
		await saveEventInfo(eventInfoFormData)
	}

	useEffect(() => {
		if (eventInfoData) {
			let initialTimeEventStart: Date | undefined
			let initialTimeEventEnd: Date | undefined
			if (eventInfoData.date_from && eventInfoData.time_from) {
				const initialTimeEventStartValue = parse(
					`${format(new Date(eventInfoData.date_from), 'yyyy-MM-dd')} ${eventInfoData.time_from}`,
					'yyyy-MM-dd HH:mm:ss',
					new Date(),
				)
				initialTimeEventStart = initialTimeEventStartValue
			}
			if (eventInfoData.date_to && eventInfoData.time_to) {
				const initialTimeEventEndValue = parse(
					`${format(new Date(eventInfoData.date_to), 'yyyy-MM-dd')} ${eventInfoData.time_to}`,
					'yyyy-MM-dd HH:mm:ss',
					new Date(),
				)
				initialTimeEventEnd = initialTimeEventEndValue
			}

			const transformedData = {
				...eventInfoData,
				time_from: initialTimeEventStart ?? undefined,
				time_to: initialTimeEventEnd ?? undefined,
			}
			methods.reset({ ...transformedData })
		}
	}, [eventInfoData])

	return (
		<AdminContent className={styles.eventProfilePage} $backgroundColor='#ffffff'>
			<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
				Возврат к списку событий
			</Link>
			{id === 'new' ? <h3>Профиль события</h3> : <h3>Редактировать событие</h3>}
			<FormProvider {...methods}>
				<form
					className={styles.eventProfileForm}
					onSubmit={methods.handleSubmit(onSubmit)}
					noValidate
					autoComplete='off'
				>
					<TitleSection
						objectsList={eventInfoData?.objects_list}
						eventTypesList={eventInfoData?.event_types_list}
						eventLevelsList={eventInfoData?.event_levels_list}
					/>
					<DateSection />
					<DescSection
						ageList={eventInfoData?.age_list}
						locationsList={eventInfoData?.locations_list}
					/>
					{id === 'new' ? (
						<FlexRow $margin='0 0 40px 0'>
							<AdminButton as='button' type='submit'>
								Создать новое событие
							</AdminButton>
							<AdminButton as='route' to='/' $variant='cancel'>
								Отменить
							</AdminButton>
						</FlexRow>
					) : (
						<FlexRow $margin='0 0 40px 0' $maxWidth='1140px' $justifyContent='space-between'>
							<FlexRow>
								<AdminButton as='route' to={`/${AdminRoute.AdminEventsList}`}>
									Сохранить и выйти
								</AdminButton>
								<AdminButton as='button' type='submit' $variant='light'>
									Применить и продолжить
								</AdminButton>
							</FlexRow>
							<AdminButton as='route' to={`/${AdminRoute.AdminEventsList}`} $variant='cancel'>
								Отменить изменения
							</AdminButton>
						</FlexRow>
					)}
				</form>
			</FormProvider>
			<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
				Возврат к списку событий
			</Link>
		</AdminContent>
	)
}
