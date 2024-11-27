import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { ObjectElements } from './components/object-elements/object-elements'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { type ObjectInputs, objectSchema } from './schema'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

export const AdminObjects = () => {
	const methods = useForm<ObjectInputs>({
		mode: 'onBlur',
		resolver: yupResolver(objectSchema),
	})

	const onSubmit: SubmitHandler<ObjectInputs> = (data) => {
		console.log(data)
	}

	return (
		<>
			<Helmet>
				<title>Объекты кластера</title>
			</Helmet>
			<div className={adminStyles.adminTitleTab}>
				<h1>Объекты кластера</h1>
			</div>

			<AdminContent $padding='0 0 30px 0' $backgroundColor='#ffffff'>
				<FormProvider {...methods}>
					<AdminContent $padding='30px 30px 0 30px' $height='300px' $backgroundColor='#ffffff'>
						<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
							<ControlledInput
								name='objectDesc'
								label='Описание раздела «Объекты»'
								margin='0'
								height='200px'
								isTextarea
							/>
							<AdminButton $margin='25px 0 50px 0' as='button' type='submit'>
								Сохранить
							</AdminButton>
						</form>
					</AdminContent>
				</FormProvider>
				<ObjectElements />
			</AdminContent>
		</>
	)
}
