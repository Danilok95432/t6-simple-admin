import { useCallback, useEffect, useState, type FC } from 'react'
import {
	type CommunityCultureInputs,
	communityCultureSchema,
} from 'src/pages/community-layout/pages/admin-community-culture/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Helmet } from 'react-helmet-async'
import {
	useGetCultureCommunityQuery,
	useSaveCultureCommunityMutation,
} from 'src/store/community/community.api'
import { transformToFormData } from 'src/helpers/utils'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import { FlexRow } from 'src/components/flex-row/flex-row'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { CultureElements } from 'src/pages/community-layout/pages/admin-community-culture/components/culture-elements/culture-elements'
import { AddImageCulturePlusSVG } from 'src/UI/icons/addImageCulturePlusSVG'

import styles from './index.module.scss'
import { useActions } from 'src/hooks/actions/actions'
import { useGetNewIdImageQuery } from 'src/store/uploadImages/uploadImages.api'
import { ImageModal } from 'src/modals/images-modal/images-modal'
import { type ImageItemWithText } from 'src/types/photos'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

export const AdminCommunityCulture: FC = () => {
	const { data: cultureCommunityData } = useGetCultureCommunityQuery(null)
	const [localeImages, setLocaleImages] = useState<ImageItemWithText[]>(
		cultureCommunityData?.photos ?? [],
	)
	const [saveCultureCommunity] = useSaveCultureCommunityMutation()

	const { refetch: getNewId } = useGetNewIdImageQuery({
		imgtype: 'about_tradition_photo',
		idItem: '',
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
				imgtype='about_tradition_photo'
				syncAddHandler={syncAddImagesHandler}
				syncEditHandler={syncEditImagesHandler}
			/>,
		)
	}

	useEffect(() => {
		setLocaleImages(cultureCommunityData?.photos ?? [])
	}, [cultureCommunityData?.photos])

	const methods = useForm<CommunityCultureInputs>({
		mode: 'onBlur',
		resolver: yupResolver(communityCultureSchema),
		defaultValues: {
			photos: [],
		},
	})

	const { isSent, markAsSent } = useIsSent(methods.control)

	const onSubmit: SubmitHandler<CommunityCultureInputs> = async (data) => {
		try {
			const res = await saveCultureCommunity(transformToFormData(data))
			if (res) markAsSent(true)
		} catch (e) {
			console.error(e)
		}
	}

	useEffect(() => {
		if (cultureCommunityData) {
			methods.reset({ ...cultureCommunityData })
		}
	}, [cultureCommunityData])

	return (
		<>
			<Helmet>
				<title>Традиции Атманова угла</title>
			</Helmet>

			<AdminContent title='Традиции Атманова угла' $backgroundColor='#ffffff'>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<QuillEditor $heightEditor='310px' name='topDesc' label='Текст-анонс*' />
						<ReactDropzone
							margin='30px 0 0 0'
							label={`Галерея изображений (${cultureCommunityData?.photos?.length} из 8)`}
							previewVariant='img-list'
							variant='culture'
							name='photos'
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
							maxFiles={8}
							fileImages={localeImages}
							syncAdd={syncAddImagesHandler}
							syncEdit={syncEditImagesHandler}
							imgtype='about_tradition_photo'
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
						<FlexRow $margin='25px 0 50px 0' $gap='15px'>
							<AdminButton as='button' type='submit' $variant={isSent ? 'sent' : 'primary'}>
								Сохранить
							</AdminButton>
							<AdminButton as='link' to='/' $variant='light'>
								Отменить
							</AdminButton>
						</FlexRow>
					</form>
				</FormProvider>
				<CultureElements cultures={cultureCommunityData?.traditions} />
			</AdminContent>
		</>
	)
}
