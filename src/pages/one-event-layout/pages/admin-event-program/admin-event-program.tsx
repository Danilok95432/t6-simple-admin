import { useEffect, type FC } from 'react'
import {
	type ProgramInputs,
	programInputsSchema,
} from 'src/pages/one-event-layout/pages/admin-event-program/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useParams } from 'react-router-dom'
import { parse, format } from 'date-fns'
import {
	useGetProgramByEventIdQuery,
	useSaveProgramInfoMutation,
} from 'src/store/events/events.api'
import {
	currentDateString,
	formatDateToYYYYMMDD,
	formatTimeToHHMM,
	transformToFormData,
} from 'src/helpers/utils'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { ProgramPointsSection } from 'src/pages/one-event-layout/pages/admin-event-program/components/program-points-section/program-points-section'

import { FlexRow } from 'src/components/flex-row/flex-row'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const AdminEventProgram: FC = () => {
	const { id = '0' } = useParams()
	const { data: programInfoData } = useGetProgramByEventIdQuery(id)
	const [saveProgramInfo] = useSaveProgramInfoMutation()

	const methods = useForm<ProgramInputs>({
		mode: 'onBlur',
		resolver: yupResolver(programInputsSchema),
		defaultValues: {
			isShowProgramSection: true,
			programSection: true,
		},
	})

	const { isSent, markAsSent } = useIsSent(methods.control)

	const onSubmit: SubmitHandler<ProgramInputs> = async (data) => {
		const serverData = data.program?.map((el) => {
			const dateFormat = formatDateToYYYYMMDD(el.itemdate as Date)
			const timeFormatBegin = formatTimeToHHMM(el.begin_time as Date)
			const timeFormatEnd = formatTimeToHHMM(el.end_time as Date)

			return {
				...el,
				itemdate: dateFormat === 'Invalid Date' ? '' : dateFormat,
				begin_time: timeFormatBegin === 'Invalid Date' ? '' : timeFormatBegin,
				end_time: timeFormatEnd === 'Invalid Date' ? '' : timeFormatEnd,
			}
		})

		// const programInfoData = transformToFormData(serverData)
		// const programId = id
		// programInfoData.append('id', programId)
		// const res = await saveProgramInfo(programInfoData)

		console.log(serverData)

		// if (res) markAsSent(true)
	}

	useEffect(() => {
		if (programInfoData) {
			let initialTimeProgramStart: Date | string
			let initialTimeProgramEnd: Date | string
			let initialDateProgram: string

			const transformedData = {
				program: programInfoData.program.map((item) => {
					if (item.itemdate === '0000-00-00') initialDateProgram = currentDateString()

					if (item.itemdate && item.begin_time) {
						const initialTimeProgramStartValue = parse(
							`${format(new Date(item.itemdate), 'yyyy-MM-dd')} ${item.begin_time}`,
							'yyyy-MM-dd HH:mm',
							new Date(),
						)

						const initialTimeProgramEndValue = parse(
							`${format(new Date(item.itemdate), 'yyyy-MM-dd')} ${item.end_time}`,
							'yyyy-MM-dd HH:mm',
							new Date(),
						)

						initialTimeProgramStart = initialTimeProgramStartValue
						initialTimeProgramEnd = initialTimeProgramEndValue
					}

					if (isNaN(Date.parse(initialTimeProgramEnd as string))) {
						initialTimeProgramEnd = ''
					}

					return {
						...item,
						itemdate: item.itemdate === '0000-00-00' ? initialDateProgram : item.itemdate,
						begin_time: initialTimeProgramStart ?? '',
						end_time: initialTimeProgramEnd ?? '',
					}
				}),
			}

			methods.reset({ ...transformedData })
		}
	}, [programInfoData?.program])

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
