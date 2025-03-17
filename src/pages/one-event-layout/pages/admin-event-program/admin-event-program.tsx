import { useEffect, type FC } from 'react'
import { type ProgramInputs } from 'src/pages/one-event-layout/pages/admin-event-program/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import { useGetProgramByEventIdQuery } from 'src/store/events/events.api'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { ProgramPointsSection } from 'src/pages/one-event-layout/pages/admin-event-program/components/program-points-section/program-points-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

import styles from './index.module.scss'

export const AdminEventProgram: FC = () => {
	const { id = '0' } = useParams()
	const { data: programInfoData } = useGetProgramByEventIdQuery(id)

	const methods = useForm<ProgramInputs>({
		mode: 'onBlur',
		defaultValues: {
			isShowProgramSection: true,
			programSection: true,
			program: [
				{
					title: '',
					itemdate: '',
					begin_time: '',
					end_time: '',
					place: '',
				},
			],
		},
	})

	const { isSent, markAsSent } = useIsSent(methods.control)

	const onSubmit: SubmitHandler<ProgramInputs> = (data) => {
		console.log(data)
		markAsSent(true)
	}

	console.log(programInfoData?.program)

	useEffect(() => {
		if (programInfoData) {
			methods.reset({ ...programInfoData })
		}
	}, [programInfoData])

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
