import { objectInfoSchema, type ObjectInfoInputs } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { MainSection } from './components/main-section/main-section'
import { ContactsSection } from './components/contacts-section/contacts-section'

export const ObjectInfo = () => {
	const methods = useForm<ObjectInfoInputs>({
		mode: 'onBlur',
		resolver: yupResolver(objectInfoSchema),
		defaultValues: {},
	})

	const onSubmit: SubmitHandler<ObjectInfoInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Об объекте</title>
			</Helmet>
			<AdminContent className={styles.objectInfoPage}>
				<Link to={`/${AdminRoute.AdminObjects}`} className={adminStyles.adminReturnLink}>
					Возврат к списку объектов
				</Link>
				<AdminContent title='Об объекте' link='#' $padding='0 0 50px 0'>
					<FormProvider {...methods}>
						<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
							<MainSection />
							<ContactsSection />
							<AdminControllers outLink={AdminRoute.AdminHome} />
						</form>
					</FormProvider>
				</AdminContent>
				<Link to={`/${AdminRoute.AdminObjects}`} className={adminStyles.adminReturnLink}>
					Возврат к списку объектов
				</Link>
			</AdminContent>
		</>
	)
}
