import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type EventProfileInputs = {
	title: string
	objects_list: string | SelOption[]
	event_types_list: string | SelOption[]
	// event_levels_list: string | SelOption[]
	// brands_list: string | SelOption[]
	tags?: string
	date_from: string
	time_from: Date
	date_to: string
	time_to: Date
	description: string
	fullinfo: string
	conditions: string
	age_list?: SelOption[]
	locations_list?: SelOption[]
	main?: boolean
	hidden?: boolean
}

export const eventProfileSchema = yup.object().shape({
	title: yup.string().required('Введите название события'),
	date_from: yup.string().required('Введите дату'),
	time_from: yup.date().required('Введите время'),
	date_to: yup.string().required('Введите дату'),
	time_to: yup.date().required('Введите время'),
	description: yup.string().required('Введите краткое описание'),
	fullinfo: yup.string().required('Введите подробное описание'),
	conditions: yup.string().required('Укажите условия'),
	objects_list: yup
		.mixed<string | SelOption[]>()
		.test('is-object-selected', 'Выберите хотя бы один объект', (value) => {
			if (typeof value === 'string') {
				return true
			} else if (Array.isArray(value) && value.length > 0) {
				const firstElement = value[0]
				if (
					typeof firstElement === 'object' &&
					firstElement !== null &&
					'label' in firstElement &&
					'value' in firstElement &&
					firstElement.label === 'Объект не выбран'
				) {
					return false
				} else {
					return true
				}
			} else {
				return false
			}
		})
		.required('Выберите хотя бы один объект'),
	event_types_list: yup
		.mixed<string | SelOption[]>()
		.test('is-type-selected', 'Выберите хотя бы один тип', (value) => {
			if (typeof value === 'string') {
				return true
			} else if (Array.isArray(value) && value.length > 0) {
				const firstElement = value[0]
				if (
					typeof firstElement === 'object' &&
					firstElement !== null &&
					'label' in firstElement &&
					'value' in firstElement &&
					firstElement.label === 'Тип не выбран'
				) {
					return false
				} else {
					return true
				}
			} else {
				return false
			}
		})
		.required('Выберите хотя бы один тип'),
	/* event_levels_list: yup
		.mixed<string | SelOption[]>()
		.test('is-level-selected', 'Выберите хотя бы один уровень', (value) => {
			if (typeof value === 'string') {
				return true
			} else if (Array.isArray(value) && value.length > 0) {
				const firstElement = value[0]
				if (
					typeof firstElement === 'object' &&
					firstElement !== null &&
					'label' in firstElement &&
					'value' in firstElement &&
					firstElement.label === 'Уровень не выбран'
				) {
					return false
				} else {
					return true
				}
			} else {
				return false
			}
		})
		.required('Выберите хотя бы один уровень'),
		*/
	/* brands_list: yup
		.mixed<string | SelOption[]>()
		.test('is-level-selected', 'Выберите хотя бы один бренд', (value) => {
			if (typeof value === 'string') {
				return true
			} else if (Array.isArray(value) && value.length > 0) {
				const firstElement = value[0]
				if (
					typeof firstElement === 'object' &&
					firstElement !== null &&
					'label' in firstElement &&
					'value' in firstElement &&
					firstElement.label === 'Бренд не выбран'
				) {
					return false
				} else {
					return true
				}
			} else {
				return false
			}
		})
		.required('Выберите хотя бы один бренд'), */
})
