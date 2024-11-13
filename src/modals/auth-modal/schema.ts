import * as yup from 'yup'

export type AuthInputs = {
	login: string
	password: string
	verificationCode: string
}

export const authSchema = yup.object().shape({
	login: yup.string().required('Введите логин'),
	password: yup.string().required('Введите пароль'),
	verificationCode: yup.string().required('Введите проверочный код'),
})
