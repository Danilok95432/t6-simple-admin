import { type FC } from 'react'
import {
	type CommunityCultureInputs,
	communityCultureSchema,
} from 'src/pages/community-layout/pages/admin-community-culture/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const AdminCommunityCulture: FC = () => {
	const methods = useForm<CommunityCultureInputs>({
		mode: 'onBlur',
		resolver: yupResolver(communityCultureSchema),
		defaultValues: {},
	})

	const onSubmit: SubmitHandler<CommunityCultureInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Материальная культура</title>
			</Helmet>
			<AdminContent $padding='30px 30px 35px'>
				<AdminButton
					className={adminStyles.adminViewPageLink}
					as='link'
					to={`/`}
					$margin='0 0 29px 0'
					$outlined
				>
					Посмотреть страницу на сайте
				</AdminButton>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<AdminControllers outLink={AdminRoute.AdminHome} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
