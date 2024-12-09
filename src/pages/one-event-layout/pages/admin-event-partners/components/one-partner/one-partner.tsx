import { type OnePartnerInputs, onePartnerSchema } from './schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Container } from 'src/UI/Container/Container'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { MainSection } from './components/main-section/main-section'

import styles from './index.module.scss'

export const OnePartner = () => {
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
			<h3>Партнер</h3>
			<Container>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<MainSection />
						<AdminControllers outLink={AdminRoute.AdminHome} />
					</form>
				</FormProvider>
			</Container>
		</div>
	)
}
