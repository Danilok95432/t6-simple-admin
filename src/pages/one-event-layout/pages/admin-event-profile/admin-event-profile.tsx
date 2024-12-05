import { type FC } from 'react'
import {
	type EventProfileInputs,
	eventProfileSchema,
} from 'src/pages/one-event-layout/pages/admin-event-profile/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { TitleSection } from 'src/pages/one-event-layout/pages/admin-event-profile/components/title-section/title-section'
import { DateSection } from 'src/pages/one-event-layout/pages/admin-event-profile/components/date-section/date-section'
import { DescSection } from 'src/pages/one-event-layout/pages/admin-event-profile/components/desc-section/desc-section'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { FlexRow } from 'src/components/flex-row/flex-row'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const AdminEventProfile: FC = () => {
	const methods = useForm<EventProfileInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventProfileSchema),
	})

	const onSubmit: SubmitHandler<EventProfileInputs> = (data) => {
		console.log(data)
	}

	return (
		<AdminContent className={styles.eventProfilePage} $backgroundColor='#ffffff'>
			<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
				Возврат к списку событий
			</Link>
			<h3>Профиль события</h3>
			<FormProvider {...methods}>
				<form
					className={styles.eventProfileForm}
					onSubmit={methods.handleSubmit(onSubmit)}
					noValidate
					autoComplete='off'
				>
					<TitleSection />
					<DateSection />
					<DescSection />
					<FlexRow $margin='0 0 40px 0'>
						<AdminButton as='button' type='submit'>
							Создать новое событие
						</AdminButton>
						<AdminButton as='route' to='/' $variant='cancel'>
							Отменить
						</AdminButton>
					</FlexRow>
				</form>
			</FormProvider>
			<Link
				to={`/${AdminRoute.AdminAtmans}/${AdminRoute.AdminEventsList}`}
				className={adminStyles.adminReturnLink}
			>
				Возврат к списку событий
			</Link>
		</AdminContent>
	)
}
