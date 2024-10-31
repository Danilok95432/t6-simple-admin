import { type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
	type EventRegInputs,
	eventRegSchema,
} from 'src/pages/one-event-layout/pages/admin-event-reg/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { EventTitle } from 'src/components/event-title/event-title'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { RegVisitor } from 'src/pages/one-event-layout/pages/admin-event-reg/components/reg-visitor/reg-visitor'
import { RegParticipant } from 'src/pages/one-event-layout/pages/admin-event-reg/components/reg-participant/reg-participant'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const AdminEventReg: FC = () => {
	const methods = useForm<EventRegInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventRegSchema),
		defaultValues: {
			regVisitorSection: true,
			regParticipantSection: true,
			isParticipantSides: false,
			participantSides: [
				{
					sideName: '',
					sideColor: '0',
					sidePictogram: [],
				},
				{
					sideName: '',
					sideColor: '0',
					sidePictogram: [],
				},
			],
		},
	})

	const onSubmit: SubmitHandler<EventRegInputs> = (data) => {
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
					<RegVisitor />
					<RegParticipant />
					<AdminControllers outLink={AdminRoute.AdminHome} variant='2' />
				</form>
			</FormProvider>
		</AdminContent>
	)
}
