import * as yup from 'yup'

export type ArticleInputs = {
	articleName: string
	articleText: string
}

export const articleSchema = yup.object().shape({
	articleName: yup.string().required('Введите название'),
	articleText: yup.string().required('Введите текст'),
})
