import { useEffect, type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useParams } from 'react-router-dom'

import {
	type EventContentInputs,
	eventContentSchema,
} from 'src/pages/one-event-layout/pages/admin-event-content/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { PreviewSection } from 'src/pages/one-event-layout/pages/admin-event-content/components/preview-section/preview-section'
import { DocsSection } from 'src/pages/one-event-layout/pages/admin-event-content/components/docs-section/docs-section'
import { GallerySection } from 'src/pages/one-event-layout/pages/admin-event-content/components/gallery-section/gallery-section'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { PlacementSection } from 'src/pages/one-event-layout/pages/admin-event-content/components/placement-section/placement-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { LinksSection } from 'src/pages/one-event-layout/pages/admin-event-content/components/links-section/links-section'
import {
	useGetContentByEventIdQuery,
	useSaveEventContentInfoMutation,
} from 'src/store/events/events.api'
import { booleanToNumberString } from 'src/helpers/utils'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

export const AdminEventContent: FC = () => {
	const { id = '0' } = useParams()
	const { data: contentInfoData } = useGetContentByEventIdQuery(id)
	const [saveEventContentInfo] = useSaveEventContentInfoMutation()

	const methods = useForm<EventContentInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventContentSchema),
		defaultValues: {
			hide_placements: false,
			hide_gallery: false,
			hide_links: false,
		},
	})

	const { isSent, markAsSent } = useIsSent(methods.control)

	const onSubmit: SubmitHandler<EventContentInputs> = async (data) => {
		const eventId = id
		const eventInfoFormData = new FormData()

		eventInfoFormData.append('id', eventId)

		data.placements?.forEach((placement, index) => {
			eventInfoFormData.append(`placements_title[${index}]`, placement.title)
			eventInfoFormData.append(`placements_desc[${index}]`, placement.desc)
			eventInfoFormData.append(`placements_location[${index}]`, placement.location)
		})

		data.links?.forEach((link, index) => {
			eventInfoFormData.append(`links_title[${index}]`, link.title)
			eventInfoFormData.append(`links_link[${index}]`, link.link)
			eventInfoFormData.append(`links_desc[${index}]`, link.desc)
		})

		eventInfoFormData.append('linksBlock_title', data.linksBlock_title)
		eventInfoFormData.append('hide_placements', booleanToNumberString(data.hide_placements))
		eventInfoFormData.append('hide_gallery', booleanToNumberString(data.hide_gallery))
		eventInfoFormData.append('hide_links', booleanToNumberString(data.hide_links))

		const res = await saveEventContentInfo(eventInfoFormData)
		if (res) markAsSent(true)
	}

	useEffect(() => {
		if (contentInfoData) {
			methods.reset({ ...contentInfoData })
		}
	}, [contentInfoData])

	return (
		<AdminContent className={styles.eventContentPage}>
			<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
				Возврат к списку событий
			</Link>
			<h3>Контент</h3>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
					<PreviewSection />
					<PlacementSection />
					<GallerySection />
					<DocsSection />
					<LinksSection />
					<AdminControllers outLink={AdminRoute.AdminHome} variant='2' isSent={isSent} />
				</form>
			</FormProvider>
			<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
				Возврат к списку событий
			</Link>
		</AdminContent>
	)
}
