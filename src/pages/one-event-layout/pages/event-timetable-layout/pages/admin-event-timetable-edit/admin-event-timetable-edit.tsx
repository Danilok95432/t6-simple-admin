import { type FC } from 'react'
import {
	type EventTimetableInputs,
	eventTimetableSchema,
} from 'src/pages/one-event-layout/pages/event-timetable-layout/pages/admin-event-timetable-edit/schema'

import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { EventTitle } from 'src/components/event-title/event-title'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { TimetablesSection } from 'src/pages/one-event-layout/pages/event-timetable-layout/pages/admin-event-timetable-edit/components/timetables-section/timetables-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
export const AdminEventTimetableEdit: FC = () => {
	const methods = useForm<EventTimetableInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventTimetableSchema),
		defaultValues: {
			timetables: [
				{
					title: '',
					location: '0',
					dateStart: new Date(),
					timeStart: new Date(),
					dateEnd: new Date(),
					timeEnd: new Date(),
				},
			],
		},
	})

	const onSubmit: SubmitHandler<EventTimetableInputs> = (data) => {
		console.log(data)
	}
	return (
		<AdminContent $padding='25px 30px 35px'>
			<AdminButton
				className={adminStyles.adminViewPageLink}
				as='link'
				to={`/`}
				$margin='0 0 29px 0'
				$outlined
			>
				Посмотреть страницу на сайте
			</AdminButton>
			<p className={adminStyles.adminPrompt}>
				поля, отмеченные символом *, обязательны для заполнения
			</p>
			<EventTitle
				className={styles.timetableEditTitle}
				title='Конференция ВООПИК 2024'
				dates={['26 августа 2023 года', '28 августа 2023 года']}
				address='с. Атманов Угол Тамбовской области'
			/>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
					<TimetablesSection />
					<AdminControllers outLink={AdminRoute.AdminHome} variant='2' />
				</form>
			</FormProvider>
		</AdminContent>
	)
}
