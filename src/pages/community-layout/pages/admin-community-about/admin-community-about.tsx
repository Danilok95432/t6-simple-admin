import { type FC, useEffect, useState } from 'react'
import { FormProvider, type SubmitHandler, useForm, useWatch } from 'react-hook-form'
import {
	type CommunityInputs,
	communitySchema,
} from 'src/pages/community-layout/pages/admin-community-about/schema'

import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminContent } from 'src/components/admin-content/admin-content'

import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'

import { TitleSection } from 'src/pages/community-layout/pages/admin-community-about/components/title-section/title-section'
import { GallerySection } from 'src/pages/community-layout/pages/admin-community-about/components/gallery-section/gallery-section'
import { ArticleSection } from 'src/pages/community-layout/pages/admin-community-about/components/article-section/article-section'
import {
	useGetAboutCommunityQuery,
	useSaveAboutCommunityMutation,
} from 'src/store/community/community.api'
import { transformToFormData } from 'src/helpers/utils'

export const AdminCommunityAbout: FC = () => {
	const { data: aboutCommunityData } = useGetAboutCommunityQuery(null)
	const [saveAboutCommunity] = useSaveAboutCommunityMutation()
	const [isSent, setIsSent] = useState<boolean>(false)

	const methods = useForm<CommunityInputs>({
		mode: 'onBlur',
		resolver: yupResolver(communitySchema),
		defaultValues: {
			galleryImages: [],
			gallerySection: false,
		},
	})
	const watchedValues = useWatch({ control: methods.control })

	const onSubmit: SubmitHandler<CommunityInputs> = async (data) => {
		try {
			const res = await saveAboutCommunity(transformToFormData(data))
			if (res) setIsSent(true)
		} catch (e) {
			console.error(e)
		}
	}

	useEffect(() => {
		setIsSent(false)
	}, [watchedValues])

	useEffect(() => {
		if (aboutCommunityData) {
			const { caption, mainDescs, descs } = aboutCommunityData
			methods.reset({ caption, mainDescs, descs, articleSection: true })
		}
	}, [aboutCommunityData])

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
						<AdminControllers variant='3' isSent={isSent} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
