import {
	type CultureInfoInputs,
	cultureInfoSchema,
} from 'src/pages/culture-element-layout/pages/culture-info/schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback, useEffect, useState } from 'react'

import {
	useGetCultureInfoQuery,
	useSaveCultureInfoCommunityMutation,
} from 'src/store/cultures/cultures.api'
import { transformToFormData } from 'src/helpers/utils'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AddImageCulturePlusSVG } from 'src/UI/icons/addImageCulturePlusSVG'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { useActions } from 'src/hooks/actions/actions'
import { useGetNewIdImageQuery } from 'src/store/uploadImages/uploadImages.api'
import { ImageModal } from 'src/modals/images-modal/images-modal'
import { type ImageItemWithText } from 'src/types/photos'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

export const CultureInfo = () => {
	const { id = '0' } = useParams()
	const { data: cultureInfoData } = useGetCultureInfoQuery(id)
	const [localeImages, setLocaleImages] = useState<ImageItemWithText[]>(
		cultureInfoData?.photos ?? [],
	)
	const [saveCultureInfo] = useSaveCultureInfoCommunityMutation()

	const { refetch: getNewId } = useGetNewIdImageQuery({
		imgtype: 'traditions_photo',
		idItem: id,
	})
	const addImage = async () => {
		const newIdResponse = await getNewId().unwrap()
		return newIdResponse.id
	}

	const syncAddImagesHandler = useCallback((newImage: ImageItemWithText) => {
		setLocaleImages((prevImages) => [...prevImages, newImage])
	}, [])

	const syncEditImagesHandler = useCallback((editImage: ImageItemWithText) => {
		setLocaleImages((prevImages) => {
			return prevImages.map((image) => {
				if (image.id === editImage.id) {
					return { ...image, ...editImage }
				}
				return image
			})
		})
	}, [])

	const { openModal } = useActions()

	const handleOpenModal = async () => {
		const newId = await addImage()
		openModal(
			<ImageModal
				id={newId}
				imgtype='cultures_photo'
				syncAddHandler={syncAddImagesHandler}
				syncEditHandler={syncEditImagesHandler}
			/>,
		)
	}

	useEffect(() => {
		setLocaleImages(cultureInfoData?.photos ?? [])
	}, [cultureInfoData?.photos])

	const methods = useForm<CultureInfoInputs>({
		mode: 'onBlur',
		resolver: yupResolver(cultureInfoSchema),
		defaultValues: {
			logo: [],
			photos: [],
		},
	})

	const { isSent, markAsSent } = useIsSent(methods.control)

	const onSubmit: SubmitHandler<CultureInfoInputs> = async (data) => {
		try {
			const res = await saveCultureInfo(transformToFormData(data))
			if (res) markAsSent(true)
		} catch (e) {
			console.error(e)
		}
	}

	useEffect(() => {
		if (cultureInfoData) {
			methods.reset({ ...cultureInfoData })
		}
	}, [cultureInfoData])

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
							name='title'
							label='Наименование направления *'
							maxWidth='1140px'
							margin='0 0 20px 0'
						/>
						<ControlledInput
							name='website'
							label='Адрес интернет-сайта *'
							maxWidth='1140px'
							margin='0 0 20px 0'
						/>
						<ReactDropzone
							label='Фотография *'
							name='logo'
							prompt='PNG, JPG, JPEG. 1000 х1000px, не более 3 Мб'
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
							margin='0 0 20px 0'
							previewVariant='sm-img'
							imgtype='traditions'
							fileImages={cultureInfoData?.logo}
						/>
						<QuillEditor
							name='topDesc'
							label='Текст-анонс'
							$maxWidth='1140px'
							$heightEditor='105px'
						/>
						<ReactDropzone
							margin='30px 0 20px 0'
							label='Галерея изображений'
							previewVariant='img-list'
							variant='culture'
							name='photos'
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
							maxFiles={8}
							fileImages={localeImages}
							syncAdd={syncAddImagesHandler}
							syncEdit={syncEditImagesHandler}
							imgtype='traditions_photo'
							dzAreaClassName={styles.cultureGalleryController}
							multiple
							customOpenModal={
								<AddButton
									onClick={handleOpenModal}
									icon={<AddImageCulturePlusSVG />}
									$padding='44px 60px'
								>
									{' '}
								</AddButton>
							}
							customUploadBtn={
								<AddButton
									onClick={handleOpenModal}
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
							<AdminButton as='button' type='submit' $variant={isSent ? 'sent' : 'primary'}>
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
