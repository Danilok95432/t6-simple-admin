import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
	type AddNewsVideosInputs,
	addNewsVideosSchema,
} from 'src/pages/admin-site/components/video-form/schema'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import styles from './index.module.scss'
import adminStyles from 'src/routes/admin-layout/index.module.scss'
export const VideoForm = () => {
	const methods = useForm<AddNewsVideosInputs>({
		mode: 'onBlur',
		resolver: yupResolver(addNewsVideosSchema),
		defaultValues: {
			newsVideosImage: [],
		},
	})

	const onSubmit: SubmitHandler<AddNewsVideosInputs> = (data) => {
		console.log(data)
	}
	return (
		<FormProvider {...methods}>
			<form
				className={styles.newsVideosForm}
				onSubmit={methods.handleSubmit(onSubmit)}
				noValidate
				autoComplete='off'
			>
				<div className={styles.newsVideosFormWrapper}>
					<div className={styles.newsVideosFormLeftFields}>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name='videoTitle'
							placeholder='Название'
							label='Название записи (не больше 200 символов)'
							height='56px'
							isTextarea
						/>
						<ControlledDateInput
							className={adminStyles.adminDateInput}
							name='datePublic'
							label='Дата публикации'
							dateFormat='dd.MM.yyyy'
							placeholder='дд.мм.гггг'
						/>

						<ControlledInput
							className={adminStyles.adminMainInput}
							name='shortDesc'
							label='Краткое описание (хранится в базе)'
							height='78px'
							isTextarea
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name='videoLink'
							placeholder='Введите текст ссылки на запись'
							label='Ссылка на видео ВК'
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name='codeText'
							label='Текст кода для вставки (экспорт из ВК)'
							height='78px'
							isTextarea
						/>
						<div className={styles.newsVideosDropzoneWrapper}>
							<ReactDropzone
								className={styles.newsVideosDropzone}
								label='Основное изображение'
								name='newsVideosImage'
								prompt='Перетащите изображение на это поле'
								accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
							/>
							<p>
								Если Вас не устраивает изображение, автоматически подставляемое видеохостингом, Вы
								можете загрузить свой вариант.
							</p>
						</div>
					</div>
					<div>
						<ControlledSelect
							className={styles.asideSelect}
							label='Спрятать запись?'
							selectOptions={[
								{ label: 'Нет', value: '0' },
								{ label: 'Да', value: '1' },
							]}
							name='isHidden'
						/>
					</div>
				</div>

				<div className={adminStyles.adminBtns}>
					<AdminButton as='button' type='submit'>
						Сохранить
					</AdminButton>
					<AdminButton to={`/${AdminRoute.AdminVideotapeList}`} as='link'>
						Отменить
					</AdminButton>
				</div>
			</form>
		</FormProvider>
	)
}
