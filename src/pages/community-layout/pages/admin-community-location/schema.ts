import * as yup from 'yup'
import { type ImageItemWithText } from 'src/types/photos'

export type LocationInputs = {
	mapCoords: string
	mailSection?: boolean
	mailAddress?: string
	phoneSection?: boolean
	phoneOwner?: string
	phoneNumber?: string
	emailsSection?: boolean
	emailOwner?: string
	emailAddress?: string
	photos?: ImageItemWithText[]
}

export const locationSchema = yup.object().shape({
	mapCoords: yup.string().required('Введите координаты'),
	mailSection: yup.boolean(),
	mailAddress: yup.string().when('mailSection', ([mailSection]) => {
		return mailSection ? yup.string().required('Введите адрес') : yup.string().notRequired()
	}),
	phoneSection: yup.boolean(),
	emailsSection: yup.boolean(),
})
