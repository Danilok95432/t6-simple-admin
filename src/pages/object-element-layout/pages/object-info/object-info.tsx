import { objectInfoSchema, type ObjectInfoInputs } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { MainSection } from './components/main-section/main-section'
import { ContactsSection } from './components/contacts-section/contacts-section'
import { useGetObjectInfoQuery } from 'src/store/objects/objects.api'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import { useEffect } from 'react'

export const ObjectInfo = () => {
	const { id = '0' } = useParams()

	const { data: objInfoData } = useGetObjectInfoQuery(id)

	const methods = useForm<ObjectInfoInputs>({
		mode: 'onBlur',
		resolver: yupResolver(objectInfoSchema),
		defaultValues: {
			objectMainImg: [],
			phoneNumber: '',
		},
	})

	const onSubmit: SubmitHandler<ObjectInfoInputs> = (data) => {
		console.log(data)
	}

	useEffect(() => {
		if (objInfoData) {
			console.log(objInfoData)
			// methods.reset({ ...objInfoData })
		}
	}, [objInfoData])

	return (
		<>
			<Helmet>
				<title>Об объекте</title>
			</Helmet>
			<AdminContent>
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
