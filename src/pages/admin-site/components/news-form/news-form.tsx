import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { type AddNewsInputs, addNewsSchema } from 'src/pages/admin-site/components/news-form/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import styles from './index.module.scss'
import adminStyles from 'src/routes/admin-layout/index.module.scss'
export const NewsForm = () => {
	const methods = useForm<AddNewsInputs>({
		mode: 'onBlur',
		resolver: yupResolver(addNewsSchema),
		defaultValues: {
			newsImage: [],
		},
	})

	const onSubmit: SubmitHandler<AddNewsInputs> = (data) => {
		console.log(data)
	}
	return (
		<FormProvider {...methods}>
			<form
				className={styles.newsForm}
				onSubmit={methods.handleSubmit(onSubmit)}
				noValidate
				autoComplete='off'
			>
				<div className={styles.newsFormWrapper}>
					<div className={styles.newsFormLeftFields}>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name='newsTitle'
							placeholder='Заголовок'
							label='Заголовок новости (не больше 200 символов)'
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
							name='tags'
							label='Введите теги через запятую. Не более 5 тегов на 1 новость'
						/>
						<ControlledSelect
							className={adminStyles.adminSelect}
							label='Галерея'
							selectOptions={[
								{ label: 'Не выбрано', value: '0' },
								{ label: 'Галерея 1', value: '1' },
								{ label: 'Галерея 2', value: '2' },
								{ label: 'Галерея 3', value: '3' },
							]}
							name='gallery'
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name='shortDesc'
							label='Краткое описание (анонс новости)'
							isTextarea
						/>
					</div>
					<div>
						<ControlledSelect
							className={styles.asideSelect}
							label='Ключевая новость?'
							selectOptions={[
								{ label: 'Нет', value: '0' },
								{ label: 'Да', value: '1' },
							]}
							name='isMain'
						/>
						<ControlledSelect
							className={styles.asideSelect}
							label='Спрятать новость?'
							selectOptions={[
								{ label: 'Нет', value: '0' },
								{ label: 'Да', value: '1' },
							]}
							name='isHidden'
						/>
					</div>
				</div>

				<QuillEditor name='newsText' label='Текст новости' />

				<div className={styles.newsFormBottom}>
					<ReactDropzone
						className={styles.newsDropzone}
						label='Основное изображение'
						name='newsImage'
						prompt='Перетащите изображение на это поле'
						accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
					/>

					<h3>SEO (продвижение сайта)</h3>
					<ControlledInput
						className={adminStyles.adminMainInput}
						name='seoDesc'
						placeholder='Описание'
						label='Введите описание (description)'
					/>
					<ControlledInput
						className={adminStyles.adminMainInput}
						name='seoWords'
						placeholder='Ключевые слова'
						label='Введите ключевые слова (keywords)'
					/>
				</div>

				<div className={adminStyles.adminBtns}>
					<AdminButton as='button' type='submit'>
						Сохранить
					</AdminButton>
					<AdminButton to={`/${AdminRoute.AdminNewsList}`} as='link'>
						Отменить
					</AdminButton>
				</div>
			</form>
		</FormProvider>
	)
}
