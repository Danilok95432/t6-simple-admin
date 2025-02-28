import {
	type CultureInfoInputs,
	cultureInfoSchema,
} from 'src/pages/culture-element-layout/pages/culture-info/schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const CultureInfo = () => {
	const methods = useForm<CultureInfoInputs>({
		mode: 'onBlur',
		resolver: yupResolver(cultureInfoSchema),
		defaultValues: {
			directionLogo: [],
			galleryImages: [],
		},
	})

	const onSubmit: SubmitHandler<CultureInfoInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Информация</title>
			</Helmet>
			<AdminContent className={styles.cultureInfoPage}>
				<Link
					to={`/${AdminRoute.AdminAtmans}/${AdminRoute.AdminAtmansCulture}`}
					className={adminStyles.adminReturnLink}
				>
					Возврат к списку элементов
				</Link>
				<h3>Информация</h3>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<ControlledInput
							name='directionTitle'
							label='Наименование направления *'
							maxWidth='1140px'
							margin='0 0 20px 0'
						/>
						<ControlledInput
							name='site'
							label='Адрес интернет-сайта *'
							maxWidth='1140px'
							margin='0 0 20px 0'
						/>
						<ReactDropzone
							label='Логотип направления *'
							name='directionLogo'
							prompt='JPEG, PNG, 500х500px, не более 2.5 Мб'
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
							margin='0 0 20px 0'
						/>
						<QuillEditor
							name='firstText'
							label='Первый текстовый блок'
							$maxWidth='1140px'
							$heightEditor='105px'
						/>
						<ReactDropzone
							margin='20px 0'
							label='Галерея изображений'
							previewVariant='list'
							name='galleryImages'
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
							maxFiles={16}
							multiple
							customUploadBtn={<AddButton>Добавить фото</AddButton>}
						/>
						<QuillEditor
							name='secondText'
							label='Второй текстовый блок'
							$heightEditor='105px'
							$maxWidth='1140px'
						/>
						<FlexRow $margin='40px 0 45px 0' $gap='15px'>
							<AdminButton as='button' type='submit'>
								Сохранить
							</AdminButton>
							<AdminButton as='link' to='/' $variant='light'>
								Отменить
							</AdminButton>
						</FlexRow>
					</form>
				</FormProvider>
				<Link
					to={`/${AdminRoute.AdminAtmans}/${AdminRoute.AdminAtmansCulture}`}
					className={adminStyles.adminReturnLink}
				>
					Возврат к списку элементов
				</Link>
			</AdminContent>
		</>
	)
}
