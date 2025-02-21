import { useEffect, type FC } from 'react'
import {
	type EventContactsInputs,
	eventContactsSchema,
} from 'src/pages/one-event-layout/pages/admin-event-contacts/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useParams } from 'react-router-dom'
import { useGetContactsByEventIdQuery } from 'src/store/events/events.api'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { InfoSection } from 'src/pages/one-event-layout/pages/admin-event-contacts/components/info-section/info-section'
import { RoutesSection } from 'src/pages/one-event-layout/pages/admin-event-contacts/components/routes-section/routes-section'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const AdminEventContacts: FC = () => {
	const { id = '0' } = useParams()
	const { data: contactsInfoData } = useGetContactsByEventIdQuery(id)

	const methods = useForm<EventContactsInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventContactsSchema),
		defaultValues: {
			hide_telphone: false,
			hide_tg: false,
			hide_email: false,
			hide_pathways: false,
		},
	})

	const onSubmit: SubmitHandler<EventContactsInputs> = (data) => {
		console.log(data)
	}

	useEffect(() => {
		if (contactsInfoData) {
			methods.reset({ ...contactsInfoData })
		}
	}, [contactsInfoData])

	return (
		<AdminContent className={styles.eventContactsPage}>
			<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
				Возврат к списку событий
			</Link>
			<h3>Контакты</h3>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
					<InfoSection />
					<RoutesSection />
					<AdminControllers outLink='/' variant='2' />
				</form>
			</FormProvider>
			<Link
				to={`/${AdminRoute.AdminAtmans}/${AdminRoute.AdminEventsList}`}
				className={adminStyles.adminReturnLink}
			>
				Возврат к списку событий
			</Link>
		</AdminContent>
	)
}
