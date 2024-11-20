import { type AuthInputs, authSchema } from 'src/modals/auth-modal/schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { CloseModalSvg } from 'src/UI/icons/closeModalSVG'
import { useActions } from 'src/hooks/actions/actions'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { ControlledMaskedInput } from 'src/components/controlled-masked-input/controlled-masked-input'
import { PassRecoveryModal } from 'src/modals/pass-recovery-modal/pass-recovery-modal'

import styles from './index.module.scss'

export const AuthModal = () => {
	const { closeModal, openModal } = useActions()

	const methods = useForm<AuthInputs>({
		mode: 'onBlur',
		resolver: yupResolver(authSchema),
	})

	const onSubmit: SubmitHandler<AuthInputs> = (data) => {
		console.log(data)
	}

	const handleCodeSubmit = async () => {
		const isValidLogin = await methods.trigger('login')

		if (isValidLogin) console.log(methods.getValues('login'))
	}

	return (
		<div className={styles.authModal}>
			<div className='modal-header'>
				<h3>Т-6 Атманов Угол</h3>
				<button onClick={() => closeModal()} type='button'>
					<CloseModalSvg />
				</button>
			</div>
			<div className='modal-content'>
				<h4>Вход в систему</h4>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<div className={styles.loginInputWrapper}>
							<ControlledMaskedInput
								name='login'
								label='Логин *'
								placeholder='+7 (999) 999-00-00'
								mask='{+7} (000) 000-00-00'
								$margin='0 0 20px 0'
							/>
							<AdminButton
								as='button'
								$height='26px'
								$padding='0 10px'
								$fontSize='13px'
								type='button'
								onClick={handleCodeSubmit}
							>
								Отправить код
							</AdminButton>
						</div>

						<ControlledInput
							name='password'
							label='Пароль *'
							placeholder='**********'
							type='password'
							margin='0 0 20px 0'
						/>
						<ControlledInput
							name='verificationCode'
							label='Проверочный код *'
							placeholder='****'
							type='password'
							margin='0 0 25px 0'
						/>
						<AdminButton as='button' $height='40px' $margin='0 0 20px 0' type='submit'>
							Войти
						</AdminButton>
						<button
							className='modal-link-btn'
							onClick={() => openModal(<PassRecoveryModal />)}
							type='button'
						>
							Восстановить пароль
						</button>
					</form>
				</FormProvider>
			</div>
		</div>
	)
}
