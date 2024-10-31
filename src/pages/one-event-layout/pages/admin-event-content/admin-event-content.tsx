import { type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
	type EventContentInputs,
	eventContentSchema,
} from 'src/pages/one-event-layout/pages/admin-event-content/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { EventTitle } from 'src/components/event-title/event-title'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { PreviewSection } from 'src/pages/one-event-layout/pages/admin-event-content/components/preview-section/preview-section'
import { DocsSection } from 'src/pages/one-event-layout/pages/admin-event-content/components/docs-section/docs-section'
import { GallerySection } from 'src/pages/one-event-layout/pages/admin-event-content/components/gallery-section/gallery-section'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const AdminEventContent: FC = () => {
	const methods = useForm<EventContentInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventContentSchema),
		defaultValues: {
			contentLogo: [],
			simpleLogo: [],
			docFile1: [],
			docFile2: [],
			docFile3: [],
			photoGallery: [],
		},
	})

	const onSubmit: SubmitHandler<EventContentInputs> = (data) => {
		console.log(data)
	}

	return (
		<AdminContent $padding='25px 30px 35px'>
			<p className={adminStyles.adminPrompt}>
				поля, отмеченные символом *, обязательны для заполнения
			</p>
			<EventTitle
				title='Конференция ВООПИК 2024'
				dates={['26 августа 2023 года', '28 августа 2023 года']}
				address='с. Атманов Угол Тамбовской области'
				$margin='0 0 20px 0'
			/>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
					<PreviewSection />
					<DocsSection />
					<GallerySection />
					<AdminControllers outLink={AdminRoute.AdminHome} variant='2' />
				</form>
			</FormProvider>
		</AdminContent>
	)
}
