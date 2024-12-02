import * as yup from 'yup'

type RouteBlock = {
	routeTitle: string
	routeDesc: string
	routeScript: string
}

export type ObjLocationInputs = {
	mapScript: string
	routesSection?: boolean
	routes?: RouteBlock[]
}

export const ObjLocationSchema = yup.object().shape({
	mapScript: yup.string().required('Введите текст скрипта'),

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
