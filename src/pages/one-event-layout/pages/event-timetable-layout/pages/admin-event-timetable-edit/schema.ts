import * as yup from 'yup'

type TimetableItem = {
	title: string
	location: string
	dateStart: Date
	timeStart: Date
	dateEnd: Date
	timeEnd: Date
}

export type EventTimetableInputs = {
	timetables?: TimetableItem[]
}

export const eventTimetableSchema = yup.object().shape({
	timetables: yup.array().of(
		yup.object().shape({
			title: yup.string().required('Введите название пункта расписания'),
			location: yup.string().required().notOneOf(['0'], 'Выберите локацию'),
			dateStart: yup.date().required('Укажите дату начала'),
			timeStart: yup.date().required('Укажите время начала'),
			dateEnd: yup.date().required('Укажите дату окончания'),
			timeEnd: yup.date().required('Введите время окончания'),
		}),
	),
})
