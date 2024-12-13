import { useEffect, type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
	useGetHistoryCommunityQuery,
	useSaveHistoryCommunityMutation,
} from 'src/store/community/community.api'
import { transformToFormData } from 'src/helpers/utils'

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
	const { data: aboutHistoryData } = useGetHistoryCommunityQuery(null)
	const [saveHistoryCommunity] = useSaveHistoryCommunityMutation()

	const methods = useForm<ArticleInputs>({
		mode: 'onBlur',
		resolver: yupResolver(articleSchema),
		defaultValues: {
			galleryImages: [],
			gallerySection: false,
			bottomDescsSection: false,
		},
	})

	const onSubmit: SubmitHandler<ArticleInputs> = async (data) => {
		await saveHistoryCommunity(transformToFormData(data))
	}

	useEffect(() => {
		if (aboutHistoryData) {
			const { articleName, topDescs, bottomDescs } = aboutHistoryData
			methods.reset({
				articleName,
				topDescs,
				bottomDescs,
				gallerySection: false,
				bottomDescsSection: false,
			})
		}
	}, [aboutHistoryData])

	return (
		<>
			<Helmet>
				<title>История</title>
			</Helmet>
			<AdminContent title='История' link='#'>
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
