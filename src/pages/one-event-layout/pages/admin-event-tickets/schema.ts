import * as yup from 'yup'

type TicketItem = {
	title: string
	quantity: string
	isPaidTicket: boolean
	isQuickReg: boolean
	isHimselfBuy: boolean
	isReturnTicket: boolean
	priceTicket: string
	isAllLocationsVisitors: boolean
	isLargeField: boolean
	isStandsField: boolean
	isCafe: boolean
	isHonoraryBox: boolean
	isAllLocationsParticipants: boolean
	isDressingRoom: boolean
	isCanteenSportsmen: boolean
	isCoaching: boolean
	isAllLocationsOrganizers: boolean
	isJudicial: boolean
	isOfficeArea: boolean
	isUnderTribune: boolean
	isMultipleEntry: boolean
	isMultiple: 'unlimited' | 'limited' | 'limitedTiming'
	entriesCount: string
	isAutographSession: boolean
	isTourney: boolean
	isAfterParty: boolean
	ticketDesc: string
	isAutoPass: boolean
	isAllLocationsVisitorsTransport: boolean
	isLargeParking: boolean
	isRefilling: boolean
	isAllLocationsParticipantsTransport: boolean
	isSecondEntry: boolean
	isAllLocationsOrganizersTransport: boolean
	isAdministrationParking: boolean
	isGarage: boolean
	isThirdEntry: boolean
}

export type EventTicketsInputs = {
	ticketsSection: boolean
	tickets?: TicketItem[]
}

export const eventTicketsSchema = yup.object().shape({
	ticketsSection: yup.boolean().required(),
	tickets: yup.array().when('ticketsSection', ([ticketsSection], schema) => {
		return ticketsSection
			? schema.of(
					yup.object().shape({
						title: yup.string().required('Введите название билета'),
						priceTicket: yup.string().required('Введите стоимость билета'),
						ticketDesc: yup.string().required('Введите описание билета'),
					}),
				)
			: schema.notRequired()
	}),
})

export const defaultTicketValues: TicketItem = {
	title: '',
	quantity: '',
	isPaidTicket: false,
	isQuickReg: false,
	isHimselfBuy: false,
	isReturnTicket: false,
	priceTicket: '',
	isAllLocationsVisitors: false,
	isLargeField: false,
	isStandsField: false,
	isCafe: false,
	isHonoraryBox: false,
	isAllLocationsParticipants: false,
	isDressingRoom: false,
	isCanteenSportsmen: false,
	isCoaching: false,
	isAllLocationsOrganizers: false,
	isJudicial: false,
	isOfficeArea: false,
	isUnderTribune: false,
	isMultipleEntry: false,
	isMultiple: 'unlimited',
	entriesCount: '5',
	isAutographSession: false,
	isTourney: false,
	isAfterParty: false,
	ticketDesc: '',
	isAutoPass: false,
	isAllLocationsVisitorsTransport: false,
	isLargeParking: false,
	isRefilling: false,
	isAllLocationsParticipantsTransport: false,
	isSecondEntry: false,
	isAllLocationsOrganizersTransport: false,
	isAdministrationParking: false,
	isGarage: false,
	isThirdEntry: false,
}
