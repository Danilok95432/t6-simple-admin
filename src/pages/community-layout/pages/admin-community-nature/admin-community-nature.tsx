import { useEffect, useState, type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { TitleSection } from './components/title-section/title-section'
import { GallerySection } from './components/gallery-section/gallery-section'
import { ArticleSection } from './components/article-section/article-section'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'

export const AdminCommunityNature: FC = () => {
	const [, setAction] = useState<'apply' | 'save'>('apply')
	const methods = useForm({
		mode: 'onBlur',
		// resolver: yupResolver(articleSchema),
		defaultValues: {
			photos: [],
			gallerySection: false,
			bottomDescsSection: false,
		},
	})
	return (
		<>
			<Helmet>
				<title>История</title>
			</Helmet>
			<AdminContent title='Природа' link='https://атманов-угол.рф/about/about-nature'>
				<FormProvider {...methods}>
					<form /* onSubmit={methods.handleSubmit(onSubmit)} */ noValidate>
						<TitleSection />
						<GallerySection />
						<ArticleSection />
						<AdminControllers /* isSent={isSent} */ actionHandler={setAction} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
