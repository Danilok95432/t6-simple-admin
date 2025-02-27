import { Link } from 'react-router-dom'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Container } from 'src/UI/Container/Container'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { MainSection } from './components/main-section/main-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import {
	OnePartnerInputs,
	onePartnerSchema,
} from 'src/pages/one-event-layout/pages/admin-event-partners/components/one-partner/schema'

export const Partner = () => {
	const methods = useForm<OnePartnerInputs>({
		mode: 'onBlur',
		resolver: yupResolver(onePartnerSchema),
		defaultValues: {
			logoPartner: [],
		},
	})

	const onSubmit: SubmitHandler<OnePartnerInputs> = (data) => {
		console.log(data)
	}

	return (
		<div className={styles.onePartnerPage}>
			<Link to={`/${AdminRoute.AdminPartners}`} className={adminStyles.adminReturnLink}>
				Возврат к списку партнеров
			</Link>
			<h3>Партнер</h3>
			<Container $padding='0 0 40px 0' $paddingMobile='0 0 40px 0'>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<MainSection />
						<AdminControllers outLink={AdminRoute.AdminHome} />
					</form>
				</FormProvider>
			</Container>
			<Link to={`/${AdminRoute.AdminPartners}`} className={adminStyles.adminReturnLink}>
				Возврат к списку партнеров
			</Link>
		</div>
	)
}
