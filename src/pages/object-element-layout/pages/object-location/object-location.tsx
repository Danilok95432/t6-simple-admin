import {
	type ObjLocationInputs,
	ObjLocationSchema,
} from 'src/pages/object-element-layout/pages/object-location/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'

import { MapSection } from 'src/pages/object-element-layout/pages/object-location/components/map-section/map-section'
import { RoutesSection } from 'src/pages/object-element-layout/pages/object-location/components/routes-section/routes-section'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'

export const ObjectLocation = () => {
	const methods = useForm<ObjLocationInputs>({
		mode: 'onBlur',
		resolver: yupResolver(ObjLocationSchema),
		defaultValues: {
			isShowRoutesSection: false,
			routesSection: true,
			routes: [{ routeTitle: '', routeDesc: '', routeScript: '' }],
		},
	})

	const onSubmit: SubmitHandler<ObjLocationInputs> = (data) => {
		console.log(data)
	}

	return (
		<>
			<Helmet>
				<title>Карта и маршруты</title>
			</Helmet>
			<AdminContent link='#' title='Карта и машруты'>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<MapSection />
						<RoutesSection />
						<AdminControllers outLink={AdminRoute.AdminHome} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
