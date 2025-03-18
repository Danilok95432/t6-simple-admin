import { type EventProgram } from 'src/types/events'
import * as yup from 'yup'

export type ProgramInputs = {
	isShowProgramSection?: boolean
	programSection?: boolean
	program?: EventProgram[]
}

export const programSchema = yup.object({
	title: yup.string().required('Введите название программы'),
	place: yup.string().required('Введите локацию'),
	itemdate: yup.mixed<Date | string>().required('Введите дату'),
	begin_time: yup.mixed<Date | string>().required('Время начала обязательно'),
	end_time: yup.mixed<Date | string>(),
})

export const programInputsSchema = yup.object({
	isShowProgramSection: yup.boolean().optional(),
	programSection: yup.boolean().optional(),
	program: yup.array().of(programSchema),
})
