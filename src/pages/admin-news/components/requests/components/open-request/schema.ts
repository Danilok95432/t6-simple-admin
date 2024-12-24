import * as yup from 'yup'

export type OpenRequestInputs = {
	datePublish?: Date
	isHiddenRequest?: boolean
}

export const openRequestSchema = yup.object().shape({})
