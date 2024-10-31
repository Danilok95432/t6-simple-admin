import * as yup from 'yup'

type LocationItem = {
	locName: string
	locDesc: string
	locAddress: string
	locWidget: string
	locType: string
}

export type EventLocationsInputs = {
	locationsSection: boolean
	locations?: LocationItem[]
}

export const eventLocationsSchema = yup.object().shape({
	locationsSection: yup.boolean().required(),
	locations: yup.array().when('locationsSection', ([locationsSection], schema) => {
		return locationsSection
			? schema.of(
					yup.object().shape({
						locName: yup.string().required('Введите название локации'),
						locType: yup.string().required().notOneOf(['0'], 'Выберите тип'),
					}),
				)
			: schema.notRequired()
	}),
})
