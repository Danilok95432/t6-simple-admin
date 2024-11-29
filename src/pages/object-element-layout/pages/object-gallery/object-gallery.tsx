import { Helmet } from 'react-helmet-async'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { GallerySection } from './components/gallery-section/gallery-section'
import { LinkSection } from './components/link-section/link-section'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { objectGallerySchema, type ObjectGalleryInputs } from './schema'

export const ObjectGallery = () => {
	const methods = useForm<ObjectGalleryInputs>({
		mode: 'onBlur',
		resolver: yupResolver(objectGallerySchema),
		defaultValues: {
			objectImages: [],
			links: [{ url: '' }],
		},
	})

	const onSubmit: SubmitHandler<ObjectGalleryInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Галерея</title>
			</Helmet>
			<AdminContent
				title='Галерея'
				$backgroundColor='#ffffff'
				$height='0'
				$padding='33px 20px 0 28px'
			>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<GallerySection />
						<LinkSection />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
