import { type PromoInputs } from 'src/modals/promo-modal/schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'

import { CloseModalSvg } from 'src/UI/icons/closeModalSVG'
import { useActions } from 'src/hooks/actions/actions'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'

import styles from './index.module.scss'

export const PromoModal = () => {
	const { closeModal } = useActions()

	const methods = useForm<PromoInputs>({
		mode: 'onBlur',
		defaultValues: {
			isHidden: true,
			promoDesktopImage: [],
			promoMobileImage: [],
		},
	})

	const onSubmit: SubmitHandler<PromoInputs> = (data) => {
		console.log(data)
	}

	return (
		<div className={styles.promoModal}>
			<div className='modal-header'>
				<h3>Промо-блок на главной странице</h3>
				<button onClick={() => closeModal()} type='button'>
					<CloseModalSvg />
				</button>
			</div>
			<div className='modal-content'>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<ControlledSelect
							name='contentType'
							label='Тип контента'
							selectOptions={[
								{ label: 'Событие', value: '1' },
								{ label: 'Новости', value: '2' },
								{ label: 'Объекты', value: '3' },
							]}
							margin='0 0 20px 0'
						/>
						<ControlledSelect
							name='contentChoice'
							label='Выбор контента'
							selectOptions={[
								{ label: 'Атмановские кулачки 2024', value: '1' },
								{ label: 'Контент 2', value: '2' },
								{ label: 'Контент 3', value: '3' },
							]}
							margin='0 0 20px 0'
						/>
						<ReactDropzone
							label='Изображение для десктопа'
							name='promoDesktopImage'
							prompt='PNG, JPG, JPEG. 1855x646px, не более 3 Мб'
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
							margin='0 0 20px 0'
						/>
						<ReactDropzone
							label='Изображение для мобильной версии'
							name='promoMobileImage'
							prompt='PNG, JPG, JPEG. 310x500px, не более 3 Мб'
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
						/>
						<AdminButton as='button' $height='40px' type='submit'>
							Сохранить изменения
						</AdminButton>
					</form>
				</FormProvider>
			</div>
		</div>
	)
}