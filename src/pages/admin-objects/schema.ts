import * as yup from 'yup'

export type ObjectInputs = {
	objectDesc: string
}

export const objectSchema = yup.object().shape({
	objectDesc: yup.string().required('Введите текст'),
})
