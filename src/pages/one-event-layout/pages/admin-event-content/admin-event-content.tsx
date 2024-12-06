import { type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'

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

export const AdminEventContent: FC = () => {
	const methods = useForm<EventContentInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventContentSchema),
		defaultValues: {
			logoImage: [],
			isShowPlacementsSection: false,
			placementsSection: true,
			placements: [{ placementTitle: '', placementDesc: '', placementScript: '' }],
			isShowGallerySection: false,
			gallerySection: true,
			isShowDocsSection: false,
			docsSection: true,
			docs: [],
		},
	})

	const onSubmit: SubmitHandler<EventContentInputs> = (data) => {
		console.log(data)
	}

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
					<AdminControllers outLink={AdminRoute.AdminHome} variant='2' />
				</form>
			</FormProvider>
			<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
				Возврат к списку событий
			</Link>
		</AdminContent>
	)
}
