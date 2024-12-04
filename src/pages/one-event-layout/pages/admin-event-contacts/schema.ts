import * as yup from 'yup'
import type { RouteBlock } from 'src/types/global'

export type EventContactsInputs = {
	site?: string
	phone?: string
	tgChannel?: string
	email?: string
	isShowPhone?: boolean
	isShowTgChannel?: boolean
	isShowEmail?: boolean
	isShowRoutesSection?: boolean
	routesSection?: boolean
	routes?: RouteBlock[]
}

export const eventContactsSchema = yup.object().shape({
	site: yup.string().url('Неверный формат сайта').notRequired(),
	email: yup.string().email('Неверный формат e-mail').notRequired(),
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
