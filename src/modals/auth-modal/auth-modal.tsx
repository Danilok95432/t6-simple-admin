import { type AuthInputs, authSchema } from 'src/modals/auth-modal/schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { CloseModalSvg } from 'src/UI/icons/closeModalSVG'
import { useActions } from 'src/hooks/actions/actions'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { useLoginUserMutation } from 'src/store/auth/auth.api'
import { transformToFormData } from 'src/helpers/utils'

import styles from './index.module.scss'

export const AuthModal = () => {
	const { closeModal, setAuth, setUser } = useActions()
	const [loginUser] = useLoginUserMutation()

	const methods = useForm<AuthInputs>({
		mode: 'onBlur',
		resolver: yupResolver(authSchema),
	})

	const onSubmit: SubmitHandler<AuthInputs> = async (data) => {
		const formData = transformToFormData(data)
		try {
			const { data: resData } = await loginUser(formData)
			if (resData && 'token' in resData && 'user' in resData) {
				localStorage.setItem('token', resData.token)
				setAuth(true)
				setUser(resData.user)
				closeModal()
			}
		} catch (err) {
			console.error(err)
			closeModal()
		}
	}

	// const handleCodeSubmit = async () => {
	// 	const isValidLogin = await methods.trigger('login')
	//
	// 	if (isValidLogin) console.log(methods.getValues('login'))
	// }

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
							<ControlledInput name='user_name' label='Логин *' margin='0 0 20px 0' />
							{/* <AdminButton */}
							{/* 	as='button' */}
							{/* 	$height='26px' */}
							{/* 	$padding='0 10px' */}
							{/* 	$fontSize='13px' */}
							{/* 	type='button' */}
							{/* 	onClick={handleCodeSubmit} */}
							{/* > */}
							{/* 	Отправить код */}
							{/* </AdminButton> */}
						</div>

						<ControlledInput
							name='password'
							label='Пароль *'
							placeholder='**********'
							type='password'
							margin='0 0 20px 0'
						/>
						{/* <ControlledInput */}
						{/* 	name='verificationCode' */}
						{/* 	label='Проверочный код *' */}
						{/* 	placeholder='****' */}
						{/* 	type='password' */}
						{/* 	margin='0 0 25px 0' */}
						{/* /> */}
						<AdminButton as='button' $height='40px' $margin='0 0 20px 0' type='submit'>
							Войти
						</AdminButton>
					</form>
				</FormProvider>
			</div>
		</div>
	)
}
