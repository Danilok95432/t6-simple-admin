import { type FC } from 'react'
import { type ProgramInputs } from 'src/pages/one-event-layout/pages/admin-event-program/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { ProgramPointsSection } from 'src/pages/one-event-layout/pages/admin-event-program/components/program-points-section/program-points-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

export const AdminEventProgram: FC = () => {
	const methods = useForm<ProgramInputs>({
		mode: 'onBlur',
		defaultValues: {
			isShowPointsSection: true,
			pointsSection: true,
			points: [
				{
					pointTitle: '',
					pointDate: null,
					pointTimeStart: null,
					pointTimeEnd: null,
					pointLocation: '',
				},
			],
		},
	})

	const { isSent, markAsSent } = useIsSent(methods.control)

	const onSubmit: SubmitHandler<ProgramInputs> = (data) => {
		console.log(data)
		markAsSent(true)
	}
	return (
		<AdminContent className={styles.eventProgramPage}>
			<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
				Возврат к списку событий
			</Link>
			<h3>Программа</h3>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
					<ProgramPointsSection />
					<FlexRow $margin='40px 0 0 0'>
						<AdminButton as='button' type='submit' $variant={isSent ? 'sent' : 'primary'}>
							Сохранить
						</AdminButton>
						<AdminButton as='route' to='/events-list' $variant='light'>
							Отменить
						</AdminButton>
					</FlexRow>
				</form>
			</FormProvider>
			<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
				Возврат к списку событий
			</Link>
		</AdminContent>
	)
}
