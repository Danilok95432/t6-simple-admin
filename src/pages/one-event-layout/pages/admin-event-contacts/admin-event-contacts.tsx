import { useEffect, type FC } from 'react'
import {
	type EventContactsInputs,
	eventContactsSchema,
} from 'src/pages/one-event-layout/pages/admin-event-contacts/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useParams } from 'react-router-dom'
import {
	useGetContactsByEventIdQuery,
	useSaveEventContactInfoMutation,
} from 'src/store/events/events.api'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { InfoSection } from 'src/pages/one-event-layout/pages/admin-event-contacts/components/info-section/info-section'
import { RoutesSection } from 'src/pages/one-event-layout/pages/admin-event-contacts/components/routes-section/routes-section'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { booleanToNumberString, transformToFormData } from 'src/helpers/utils'

export const AdminEventContacts: FC = () => {
	const { id = '0' } = useParams()
	const { data: contactsInfoData } = useGetContactsByEventIdQuery(id)
	const [saveEventContactsInfo] = useSaveEventContactInfoMutation()

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

	const onSubmit: SubmitHandler<EventContactsInputs> = async (data) => {
		const pathwaysTitle: string[] = []
		const pathwaysDesc: string[] = []
		const pathwaysLocation: string[] = []
		const eventId = id

		data.pathways?.forEach((pathway) => {
			pathwaysTitle.push(pathway.title)
			pathwaysDesc.push(pathway.desc)
			pathwaysLocation.push(pathway.location)
		})

		const serverData = {
			website: data.website,
			contact_telphone: data.contact_telphone,
			contact_tg: data.contact_tg,
			contact_email: data.contact_email,
			hide_telphone: booleanToNumberString(data.hide_telphone),
			hide_tg: booleanToNumberString(data.hide_tg),
			hide_email: booleanToNumberString(data.hide_email),
			hide_pathways: booleanToNumberString(data.hide_pathways),
			pathways_title: pathwaysTitle,
			pathways_desc: pathwaysDesc,
			pathways_location: pathwaysLocation,
		}

		const eventInfoFormData = transformToFormData(serverData)
		eventInfoFormData.append('id', eventId)
		await saveEventContactsInfo(eventInfoFormData)
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
