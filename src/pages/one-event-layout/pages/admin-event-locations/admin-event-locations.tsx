import { type FC } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'

import {
	type EventLocationsInputs,
	eventLocationsSchema,
} from 'src/pages/one-event-layout/pages/admin-event-locations/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { EventTitle } from 'src/components/event-title/event-title'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { LocationsSection } from 'src/pages/one-event-layout/pages/admin-event-locations/components/locations-section'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const AdminEventLocations: FC = () => {
	const methods = useForm<EventLocationsInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventLocationsSchema),
		defaultValues: {
			locationsSection: true,
			locations: [
				{
					locName: '',
					locDesc: '',
					locAddress: '',
					locWidget: '',
					locType: '0',
				},
			],
		},
	})

	const onSubmit: SubmitHandler<EventLocationsInputs> = (data) => {
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
			/>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
					<LocationsSection />
					<AdminControllers outLink={AdminRoute.AdminHome} variant='2' />
				</form>
			</FormProvider>
		</AdminContent>
	)
}
