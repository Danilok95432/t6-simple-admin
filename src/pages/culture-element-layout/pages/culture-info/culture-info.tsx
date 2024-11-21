import { Helmet } from 'react-helmet-async'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import { yupResolver } from '@hookform/resolvers/yup'
import {
	type CultureInfoInputs,
	cultureInfoSchema,
} from 'src/pages/culture-element-layout/pages/culture-info/schema'

export const CultureInfo = () => {
	const methods = useForm<CultureInfoInputs>({
		mode: 'onBlur',
		resolver: yupResolver(cultureInfoSchema),
		defaultValues: {
			logoDirection: [],
			galleryImages: [],
		},
	})

	const onSubmit: SubmitHandler<CultureInfoInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Информация</title>
			</Helmet>
			<AdminContent>
				<h3>Информация</h3>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<AdminControllers outLink={AdminRoute.AdminHome} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
