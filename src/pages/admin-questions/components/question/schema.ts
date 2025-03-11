import * as yup from 'yup'

export type QuestionInputs = {
	question: string
	answer: string
}

export const QuestionSchema = yup.object().shape({
	question: yup.string().required('Введите вопрос'),
	answer: yup.string().required('Введите ответ'),
})
