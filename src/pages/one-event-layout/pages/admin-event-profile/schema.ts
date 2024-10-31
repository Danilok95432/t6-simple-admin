import * as yup from 'yup'

export type EventProfileInputs = {
	eventName: string
	eventType: string
	eventLevel: string
	eventSite?: string
	eventTags?: string
	dateEventStart: Date
	timeEventStart: Date
	dateEventEnd: Date
	timeEventEnd: Date
	shortDesc: string
	fullDesc: string
	eventConditions: string
	visitingAge?: string
	participationAge?: string
	areaList: string
	areaName: string
	newAreaSection?: boolean
	newAreaName?: string
	newAreaLocation?: string
	newAreaDesc?: string
	newAreaAddress?: string
	newAreaWidget?: string
	newAreaType?: string
	saveNewArea?: boolean
	availableNewArea?: boolean
}

export const eventProfileSchema = yup.object().shape({
	eventName: yup.string().required('Введите название события'),
	eventType: yup.string().required().notOneOf(['0'], 'Выберите значение'),
	eventLevel: yup.string().required().notOneOf(['0'], 'Выберите значение'),
	dateEventStart: yup.date().required('Введите дату'),
	timeEventStart: yup.date().required('Введите время'),
	dateEventEnd: yup.date().required('Введите дату'),
	timeEventEnd: yup.date().required('Введите время'),
	shortDesc: yup.string().required('Введите краткое описание'),
	fullDesc: yup.string().required('Введите подробное описание'),
	eventConditions: yup.string().required('Укажите условия'),
	areaList: yup.string().required().notOneOf(['0'], 'Выберите значение'),
	areaName: yup.string().required('Введите название'),
	newAreaSection: yup.boolean(),
	newAreaName: yup.string().when('newAreaSection', ([newAreaSection], schema) => {
		return newAreaSection ? schema.required('Укажите название площадки') : schema.notRequired()
	}),
	newAreaLocation: yup.string().when('newAreaSection', ([newAreaSection], schema) => {
		return newAreaSection ? schema.required('Укажите населенный пункт') : schema.notRequired()
	}),
	newAreaType: yup.string().when('newAreaSection', ([newAreaSection], schema) => {
		return newAreaSection
			? schema.required('Выберите тип').notOneOf(['0'], 'Выберите тип')
			: schema.notRequired()
	}),
})
