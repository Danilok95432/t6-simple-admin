import * as yup from 'yup'

type PhoneBlock = {
	phoneOwner: string
	phoneAddress: string
	phoneNumber: string
}

type EmailBlock = {
	emailOwner: string
	emailAddress: string
}

type LinkBlock = {
	linkText: string
	linkAddress: string
}

export type ContactsInputs = {
	mapScript: string
	mailSection?: boolean
	mailAddress?: string
	phonesSection?: boolean
	phoneNumbers?: PhoneBlock[]
	emailsSection?: boolean
	emails?: EmailBlock[]
	linksSection?: boolean
	links?: LinkBlock[]
}

export const contactsSchema = yup.object().shape({
	mapScript: yup.string().required('Введите текст скрипта'),
	mailSection: yup.boolean(),
	mailAddress: yup.string().when('mailSection', ([mailSection]) => {
		return mailSection ? yup.string().required('Введите адрес') : yup.string().notRequired()
	}),
	phonesSection: yup.boolean(),
	phoneNumbers: yup.array().when('phonesSection', ([phonesSection]) => {
		return phonesSection
			? yup.array().of(
					yup.object().shape({
						phoneOwner: yup.string().required('Введите владельца номера'),
						phoneAddress: yup.string().required('Введите адрес'),
						phoneNumber: yup.string().required('Введите номер телефона'),
					}),
				)
			: yup.array().notRequired()
	}),
	emailsSection: yup.boolean(),
	emails: yup.array().when('emailsSection', ([emailsSection]) => {
		return emailsSection
			? yup.array().of(
					yup.object().shape({
						emailOwner: yup.string().required('Введите владельца e-mail адреса'),
						emailAddress: yup
							.string()
							.email('Неверный формат e-mail')
							.required('Введите e-mail адрес'),
					}),
				)
			: yup.array().notRequired()
	}),
	linksSection: yup.boolean(),
	links: yup.array().when('linksSection', ([linksSection]) => {
		return linksSection
			? yup.array().of(
					yup.object().shape({
						linkText: yup.string().required('Введите текст ссылки'),
						linkAddress: yup.string().url('Неверный формат URL').required('Введите URL адрес'),
					}),
				)
			: yup.array().notRequired()
	}),
})
