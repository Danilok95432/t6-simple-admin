import * as yup from 'yup'

type RouteBlock = {
	routeTitle: string
	routeDesc: string
	routeScript: string
}

export type LocationInputs = {
	mapScript: string
	mailSection?: boolean
	mailAddress?: string
	phoneSection?: boolean
	phoneOwner?: string
	phoneAddress?: string
	phoneNumber?: string
	emailsSection?: boolean
	emailOwner?: string
	emailAddress?: string
	routesSection?: boolean
	routes?: RouteBlock[]
}

export const locationSchema = yup.object().shape({
	mapScript: yup.string().required('Введите текст скрипта'),
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
	phoneAddress: yup.string().when('phoneSection', ([phoneSection]) => {
		return phoneSection ? yup.string().required('Введите адрес') : yup.string().notRequired()
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
	routesSection: yup.boolean(),
	routes: yup.array().when('routesSection', ([routesSection]) => {
		return routesSection
			? yup.array().of(
					yup.object().shape({
						routeTitle: yup.string().required('Введите название маршрута'),
						routeDesc: yup.string().required('Введите описание маршрута'),
						routeScript: yup.string().required('Введите текст скрипта'),
					}),
				)
			: yup.array().notRequired()
	}),
})
