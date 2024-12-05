import { type FC } from 'react'
import {
	type EventContactsInputs,
	eventContactsSchema,
} from 'src/pages/one-event-layout/pages/admin-event-contacts/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { InfoSection } from 'src/pages/one-event-layout/pages/admin-event-contacts/components/info-section/info-section'
import { RoutesSection } from 'src/pages/one-event-layout/pages/admin-event-contacts/components/routes-section/routes-section'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const AdminEventContacts: FC = () => {
	const methods = useForm<EventContactsInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventContactsSchema),
		defaultValues: {
			phone: '',
			isShowPhone: false,
			isShowTgChannel: false,
			isShowEmail: false,
			isShowRoutesSection: false,
			routesSection: true,
			routes: [{ routeTitle: '', routeDesc: '', routeScript: '' }],
		},
	})

	const onSubmit: SubmitHandler<EventContactsInputs> = (data) => {
		console.log(data)
	}

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
