import { type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
	type EventProfileInputs,
	eventProfileSchema,
} from 'src/pages/one-event-layout/pages/admin-event-profile/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { TitleSection } from 'src/pages/one-event-layout/pages/admin-event-profile/components/title-section/title-section'
import { DateSection } from 'src/pages/one-event-layout/pages/admin-event-profile/components/date-section/date-section'
import { DescSection } from 'src/pages/one-event-layout/pages/admin-event-profile/components/desc-section/desc-section'
import { AreaSection } from 'src/pages/one-event-layout/pages/admin-event-profile/components/area-section/area-section'
import { NewAreaSection } from 'src/pages/one-event-layout/pages/admin-event-profile/components/new-area-section/new-area-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
export const AdminEventProfile: FC = () => {
	const methods = useForm<EventProfileInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventProfileSchema),
		defaultValues: {
			newAreaSection: false,
			saveNewArea: true,
		},
	})

	const onSubmit: SubmitHandler<EventProfileInputs> = (data) => {
		console.log(data)
	}

	return (
		<AdminContent $padding='25px 30px 35px'>
			<p className={adminStyles.adminPrompt}>
				поля, отмеченные символом *, обязательны для заполнения
			</p>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
					<TitleSection />
					<DateSection />
					<DescSection />
					<AreaSection />
					<NewAreaSection />
					<AdminControllers outLink={AdminRoute.AdminHome} variant='2' />
				</form>
			</FormProvider>
		</AdminContent>
	)
}
