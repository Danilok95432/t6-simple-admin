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
import { booleanToNumberString, transformToFormData } from 'src/helpers/utils'

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

	const onSubmit: SubmitHandler<EventContentInputs> = async (data) => {
		const placementsTitle: string[] = []
		const placementsDesc: string[] = []
		const placementsLocation: string[] = []

		const linksTitle: string[] = []
		const linksLink: string[] = []
		const linksDesc: string[] = []
		const eventId = id

		data.placements?.forEach((placement) => {
			placementsTitle.push(placement.title)
			placementsDesc.push(placement.desc)
			placementsLocation.push(placement.location)
		})

		data.links?.forEach((link) => {
			linksTitle.push(link.title)
			linksLink.push(link.link)
			linksDesc.push(link.desc)
		})

		const serverData = {
			linksBlock_title: data.linksBlock_title,
			hide_placements: booleanToNumberString(data.hide_placements),
			hide_gallery: booleanToNumberString(data.hide_gallery),
			hide_links: booleanToNumberString(data.hide_links),
			placements_title: placementsTitle,
			placements_desc: placementsDesc,
			placements_location: placementsLocation,
			link_title: linksTitle,
			links_link: linksLink,
			links_desc: linksDesc,
		}

		const eventInfoFormData = transformToFormData(serverData)
		eventInfoFormData.append('id', eventId)
		await saveEventContentInfo(eventInfoFormData)
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
					<AdminControllers outLink={AdminRoute.AdminHome} variant='2' />
				</form>
			</FormProvider>
			<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
				Возврат к списку событий
			</Link>
		</AdminContent>
	)
}
