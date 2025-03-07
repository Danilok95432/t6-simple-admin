import { imageSchema, type ImagesInputs } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useActions } from 'src/hooks/actions/actions'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { transformToFormData } from 'src/helpers/utils'

import styles from './index.module.scss'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { CloseModalSvg } from 'src/UI/icons/closeModalSVG'
import {
	useGetNewIdImageQuery,
	useGetUploadedImageQuery,
	useSaveUploadedImageInfoMutation,
} from 'src/store/uploadImages/uploadImages.api'
import { useEffect, type FC, useState } from 'react'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { type ImageItemWithText } from 'src/types/photos'
import { RemoveImageModalSVG } from 'src/UI/icons/RemoveImageModalSVG'

type ImageModalProps = {
	id: string
	imgtype: string
}

export const ImageModal: FC<ImageModalProps> = ({ id, imgtype }) => {
	const { data: imageDataInfo } = useGetUploadedImageQuery(id)
	const { refetch: getNewId } = useGetNewIdImageQuery({ imgtype, idItem: '' })
	const [saveImageInfo] = useSaveUploadedImageInfoMutation()
	const { closeModal } = useActions()

	const [newImageId, setNewImageId] = useState(id)

	const addImage = async () => {
		const newIdResponse = await getNewId().unwrap()
		return newIdResponse.id
	}

	useEffect(() => {
		void (async () => {
			if (id === '') {
				const newId = await addImage()
				setNewImageId(newId)
			}
		})()
	}, [])

	const imageArr: ImageItemWithText[] = []
	const obj = {
		id: imageDataInfo?.id ?? '',
		thumbnail: imageDataInfo?.thumbnail ?? '',
		original: imageDataInfo?.thumbnail ?? '',
		author: imageDataInfo?.author ?? '',
		title: imageDataInfo?.title ?? '',
	}
	imageArr.push(obj)

	const methods = useForm<ImagesInputs>({
		mode: 'onBlur',
		resolver: yupResolver(imageSchema),
	})

	const onSubmit: SubmitHandler<ImagesInputs> = async (data) => {
		console.log(data)
		const serverData = {
			title: data.title,
			author: data.author,
		}
		const imageInfoFormData = transformToFormData(serverData)
		imageInfoFormData.append('id', id)
		try {
			await saveImageInfo(imageInfoFormData)
			closeModal()
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		if (imageDataInfo) {
			methods.reset({ ...imageDataInfo })
		}
	}, [imageDataInfo])

	return (
		<div className={styles.authModal}>
			<div className='modal-header'>
				<h3>Добавить изображение</h3>
				<button onClick={() => closeModal()} type='button'>
					<CloseModalSvg />
				</button>
			</div>
			<div className='modal-content'>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<ControlledInput
							name='title'
							label='Название изображения *'
							placeholder='Добавьте название'
							margin='0 0 20px 0'
						/>
						<ControlledInput
							name='author'
							label='Автор изображения'
							placeholder='Добавьте имя автора'
							margin='0 0 20px 0'
						/>
						<ReactDropzone
							name='thumbnail'
							prompt='PNG, JPG, JPEG. 1000 х1000px, не более 3 Мб'
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
							margin='0 0 20px 0'
							previewVariant='sm-img-edit'
							imgtype={imgtype}
							fileImages={imageArr}
							imgEditId={id ?? newImageId}
							removeIcon={<RemoveImageModalSVG />}
							customUploadBtn={<AddButton>Загрузить изображение</AddButton>}
						/>
						<AdminButton as='button' $height='40px' $margin='0' type='submit'>
							Добавить изображение
						</AdminButton>
					</form>
				</FormProvider>
			</div>
		</div>
	)
}
