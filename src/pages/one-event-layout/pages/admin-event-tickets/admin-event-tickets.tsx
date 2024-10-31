import { type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
	defaultTicketValues,
	type EventTicketsInputs,
	eventTicketsSchema,
} from 'src/pages/one-event-layout/pages/admin-event-tickets/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { EventTitle } from 'src/components/event-title/event-title'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { TicketsSection } from 'src/pages/one-event-layout/pages/admin-event-tickets/components/tickets-section/tickets-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const AdminEventTickets: FC = () => {
	const methods = useForm<EventTicketsInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventTicketsSchema),
		defaultValues: {
			ticketsSection: true,
			tickets: [defaultTicketValues],
		},
	})

	const onSubmit: SubmitHandler<EventTicketsInputs> = (data) => {
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
					<TicketsSection />
					<AdminControllers outLink={AdminRoute.AdminHome} variant='2' />
				</form>
			</FormProvider>
		</AdminContent>
	)
}
