import { imageSchema, type ImagesInputs } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useActions } from 'src/hooks/actions/actions'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { transformToFormData } from 'src/helpers/utils'
import { ReactDropzoneFiles } from 'src/components/react-dropzone-files/react-dropzone-files'

import styles from './index.module.scss'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { CloseModalSvg } from 'src/UI/icons/closeModalSVG'

export const ImageModal = () => {
	const { closeModal } = useActions()

	const methods = useForm<ImagesInputs>({
		mode: 'onBlur',
		resolver: yupResolver(imageSchema),
	})

	const onSubmit: SubmitHandler<ImagesInputs> = async (data) => {
		const formData = transformToFormData(data)
		console.log(formData)
		try {
			closeModal()
		} catch (err) {
			console.error(err)
			closeModal()
		}
	}

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
						<ReactDropzoneFiles
							name='logo'
							prompt='PNG, JPG, JPEG. 1000 х1000px, не более 3 Мб'
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
							margin='0 0 20px 0'
							previewVariant='sm-img'
							imgtype='about_general'
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
