import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type EventProfileInputs = {
	title: string
	objects_list?: SelOption[]
	event_types_list?: SelOption[]
	event_levels_list?: SelOption[]
	tags?: string
	date_from: string
	time_from: string
	date_to: string
	time_to: string
	description: string
	fullinfo: string
	conditions: string
	raspisanie: string
	age_list?: SelOption[]
	locations_list?: SelOption[]
	main?: boolean
	hidden?: boolean
}

export const eventProfileSchema = yup.object().shape({
	title: yup.string().required('Введите название события'),
	date_from: yup.string().required('Введите дату'),
	time_from: yup.string().required('Введите время'),
	date_to: yup.string().required('Введите дату'),
	time_to: yup.string().required('Введите время'),
	description: yup.string().required('Введите краткое описание'),
	fullinfo: yup.string().required('Введите подробное описание'),
	conditions: yup.string().required('Укажите условия'),
	raspisanie: yup.string().required('Укажите расписание'),
})
