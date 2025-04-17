import { Link } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import { AddButton } from 'src/UI/AddButton/AddButton'
import { AddImageCulturePlusSVG } from 'src/UI/icons/addImageCulturePlusSVG'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'
import { FlexRow } from 'src/components/flex-row/flex-row'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const GameInfo = () => {
	const methods = useForm({ mode: 'onBlur' })

	return (
		<>
			<Helmet>
				<title>Одна игра</title>
			</Helmet>
			<AdminContent className={styles.gameInfoPage}>
				<Link
					to={`/${AdminRoute.AdminAtmans}/${AdminRoute.AdminAtmansGames}`}
					className={adminStyles.adminReturnLink}
				>
					Возврат к списку элементов
				</Link>
				<h3>Информация</h3>
				<FormProvider {...methods}>
					<form /* onSubmit={methods.handleSubmit(onSubmit)} */ noValidate>
						<ControlledInput
							name='title'
							label='Наименование элемента *'
							maxWidth='1140px'
							margin='0 0 20px 0'
						/>
						<ReactDropzone
							label='Фотография'
							name='logo'
							prompt='PNG, JPG, JPEG. 1000 х1000px, не более 3 Мб'
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
							margin='0 0 20px 0'
							previewVariant='sm-img'
							imgtype='game'
							// fileImages={}
						/>

						<QuillEditor
							name='bottomDesc'
							label='Текст-анонс'
							$heightEditor='105px'
							$maxWidth='1140px'
						/>
						<ReactDropzone
							margin='30px 0 20px 0'
							label='Галерея изображений'
							previewVariant='img-list'
							variant='culture'
							name='photos'
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
							maxFiles={8}
							// fileImages={localeImages}
							// syncAdd={syncAddImagesHandler}
							// syncEdit={syncEditImagesHandler}
							imgtype='game_photo'
							dzAreaClassName={styles.gameGalleryController}
							multiple
							customOpenModal={
								<AddButton
									// onClick={handleOpenModal}
									icon={<AddImageCulturePlusSVG />}
									$padding='44px 60px'
								>
									{' '}
								</AddButton>
							}
							customUploadBtn={
								<AddButton
									// onClick={handleOpenModal}
									icon={<AddImageCulturePlusSVG />}
									$padding='44px 60px'
								>
									{' '}
								</AddButton>
							}
						/>
						<QuillEditor
							name='bottomDesc'
							label='Текст статьи'
							$heightEditor='105px'
							$maxWidth='1140px'
						/>
						<FlexRow $margin='40px 0 45px 0' $gap='15px'>
							<AdminButton as='button' type='submit' /* $variant={isSent ? 'sent' : 'primary'} */>
								Сохранить
							</AdminButton>
							<AdminButton as='link' to='/' $variant='light'>
								Отменить
							</AdminButton>
						</FlexRow>
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
