import { type FC } from 'react'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import {
	type CommunityInputs,
	communitySchema,
} from 'src/pages/community-layout/pages/admin-community-about/schema'

import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminContent } from 'src/components/admin-content/admin-content'

import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'

import { TitleSection } from 'src/pages/community-layout/pages/admin-community-about/components/title-section/title-section'
import { GallerySection } from 'src/pages/community-layout/pages/admin-community-about/components/gallery-section/gallery-section'
import { ArticleSection } from 'src/pages/community-layout/pages/admin-community-about/components/article-section/article-section'

export const AdminCommunityAbout: FC = () => {
	const methods = useForm<CommunityInputs>({
		mode: 'onBlur',
		resolver: yupResolver(communitySchema),
		defaultValues: {
			aboutTitleImage: [],
			galleryImages: [],
			gallerySection: false,
			articleSection: false,
		},
	})

	const onSubmit: SubmitHandler<CommunityInputs> = (data) => {
		console.log(data)
	}

	return (
		<>
			<Helmet>
				<title>Атманов угол</title>
			</Helmet>
			<AdminContent title='Атманов угол' link='#'>
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
