import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
	type ArticleInputs,
	articleSchema,
} from 'src/pages/community-layout/pages/admin-community-history/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import { TitleSection } from './components/title-section/title-section'
import { GallerySection } from './components/gallery-section/gallery-section'
import { ArticleSection } from './components/article-section/article-section'

export const AdminCommunityHistory: FC = () => {
	const methods = useForm<ArticleInputs>({
		mode: 'onBlur',
		resolver: yupResolver(articleSchema),
		defaultValues: {
			galleryImages: [],
			gallerySection: false,
			articleBottomSection: false,
		},
	})

	const onSubmit: SubmitHandler<ArticleInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>История</title>
			</Helmet>
			<AdminContent title='История' link='#' $backgroundColor='#F5F7FA'>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<TitleSection />
						<GallerySection />
						<ArticleSection />
						<AdminControllers outLink={AdminRoute.AdminHome} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
