import { type OnePartnerInputs, onePartnerSchema } from './schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useParams } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { MainSection } from './components/main-section/main-section'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

export const OnePartner = () => {
	const { id } = useParams()
	const methods = useForm<OnePartnerInputs>({
		mode: 'onBlur',
		resolver: yupResolver(onePartnerSchema),
	})

	const { isSent, markAsSent } = useIsSent(methods.control)

	const onSubmit: SubmitHandler<OnePartnerInputs> = (data) => {
		console.log(data)
		markAsSent(true)
	}

	return (
		<div className={styles.onePartnerPage}>
			<Link
				to={`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventPartners}/${id}`}
				className={adminStyles.adminReturnLink}
			>
				Возврат к списку партнеров
			</Link>
			<h3>Партнер</h3>
			<Container
				$padding='0 0 40px 0'
				$paddingMobile='0 0 40px 0'
				$margin='0'
				className={styles.containerEventPartners}
			>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<MainSection />
						<AdminButton
							as='button'
							type='submit'
							$height='40px'
							$variant={isSent ? 'sent' : 'primary'}
						>
							Добавить партера
						</AdminButton>
					</form>
				</FormProvider>
			</Container>
			<Link
				to={`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventPartners}/${id}`}
				className={adminStyles.adminReturnLink}
			>
				Возврат к списку партнеров
			</Link>
		</div>
	)
}
