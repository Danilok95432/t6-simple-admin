import * as yup from 'yup'

export type OneRequestInputs = {
	datePublish: Date
	desc?: string
	titleContentRequest: string
}

export const oneRequestSchema = yup.object().shape({
	titleContentRequest: yup.string().required('Введите название'),
	datePublish: yup.date().required('Введите дату'),
})
