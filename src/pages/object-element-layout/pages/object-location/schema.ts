import * as yup from 'yup'
import { type RouteBlock } from 'src/types/global'

export type ObjLocationInputs = {
	mapScript: string
	isShowRoutesSection?: boolean
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
