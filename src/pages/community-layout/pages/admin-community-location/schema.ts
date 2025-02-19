import * as yup from 'yup'

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
}

export const locationSchema = yup.object().shape({
	mapCoords: yup.string().required('Введите координаты'),
	mailSection: yup.boolean(),
	mailAddress: yup.string().when('mailSection', ([mailSection]) => {
		return mailSection ? yup.string().required('Введите адрес') : yup.string().notRequired()
	}),
	phoneSection: yup.boolean(),
	phoneOwner: yup.string().when('phoneSection', ([phoneSection]) => {
		return phoneSection
			? yup.string().required('Введите владельца номера')
			: yup.string().notRequired()
	}),
	phoneNumber: yup.string().when('phoneSection', ([phoneSection]) => {
		return phoneSection
			? yup.string().required('Введите номер телефона')
			: yup.string().notRequired()
	}),

	emailsSection: yup.boolean(),
	emailOwner: yup.string().when('emailsSection', ([emailsSection]) => {
		return emailsSection
			? yup.string().required('Введите владельца e-mail адреса')
			: yup.string().notRequired()
	}),
	emailAddress: yup.string().when('emailsSection', ([emailsSection]) => {
		return emailsSection
			? yup.string().email('Неверный формат e-mail').required('Введите e-mail адрес')
			: yup.string().notRequired()
	}),
})
