import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

type ParticipantSidesBlock = {
	sideName: string
	sideColor: string
	sidePictogram: FileWithPreview[]
}

export type EventRegInputs = {
	regVisitorSection?: boolean
	regVisitorDateOpen?: Date
	regVisitorDateClose?: Date
	regVisitorTimeOpen?: Date
	regVisitorTimeClose?: Date
	autoAdmitVisitors?: boolean
	publicVisitorsList?: boolean
	regVisitorFieldSurname?: boolean
	isRequiredSurnameField?: boolean
	regVisitorFieldName?: boolean
	isRequiredNameField?: boolean
	regVisitorFieldPatronymic?: boolean
	isRequiredPatronymicField?: boolean
	regVisitorFieldAlias?: boolean
	isRequiredAliasField?: boolean
	regVisitorFieldPlace?: boolean
	isRequiredPlaceField?: boolean
	regVisitorFieldPhone?: boolean
	isRequiredPhoneField?: boolean
	regVisitorFieldEmail?: boolean
	isRequiredEmailField?: boolean
	regVisitorFieldTicket?: boolean
	isRequiredTicketField?: boolean
	regVisitorFieldType?: boolean
	isRequiredTypeField?: boolean
	regVisitorFieldGroup?: boolean
	isRequiredGroupField?: boolean
	regVisitorFieldTransport?: boolean
	isRequiredTransportField?: boolean
	brandTransportField?: boolean
	modelTransportField?: boolean
	numberTransportField?: boolean
	colorTransportField?: boolean
	typeTransportField?: boolean
	regParticipantSection?: boolean
	regParticipantDateOpen?: Date
	regParticipantDateClose?: Date
	regParticipantTimeOpen?: Date
	regParticipantTimeClose?: Date
	autoAdmitParticipants?: boolean
	publicParticipantsList?: boolean
	regParticipantFieldSurname?: boolean
	isRequiredSurnameFieldParticipant?: boolean
	regParticipantFieldName?: boolean
	isRequiredNameFieldParticipant?: boolean
	regParticipantFieldPatronymic?: boolean
	isRequiredPatronymicFieldParticipant?: boolean
	regParticipantFieldAlias?: boolean
	isRequiredAliasFieldParticipant?: boolean
	regParticipantFieldPlace?: boolean
	isRequiredPlaceFieldParticipant?: boolean
	regParticipantFieldPhone?: boolean
	isRequiredPhoneFieldParticipant?: boolean
	regParticipantFieldEmail?: boolean
	isRequiredEmailFieldParticipant?: boolean
	regParticipantFieldTicket?: boolean
	isRequiredTicketFieldParticipant?: boolean
	regParticipantFieldType?: boolean
	isRequiredTypeFieldParticipant?: boolean
	regParticipantFieldGroup?: boolean
	isRequiredGroupFieldParticipant?: boolean
	regParticipantFieldTransport?: boolean
	isRequiredTransportFieldParticipant?: boolean
	brandTransportFieldParticipant?: boolean
	modelTransportFieldParticipant?: boolean
	numberTransportFieldParticipant?: boolean
	colorTransportFieldParticipant?: boolean
	typeTransportFieldParticipant?: boolean
	isParticipantSides?: boolean
	participantSides?: ParticipantSidesBlock[]
}

export const eventRegSchema = yup.object().shape({
	regVisitorSection: yup.boolean(),
	regVisitorDateOpen: yup.date().when('regVisitorSection', ([regVisitorSection], schema) => {
		return regVisitorSection ? schema.required('Укажите дату открытия') : schema.notRequired()
	}),
	regVisitorDateClose: yup.date().when('regVisitorSection', ([regVisitorSection], schema) => {
		return regVisitorSection ? schema.required('Укажите дату закрытия') : schema.notRequired()
	}),
	regVisitorTimeOpen: yup.date().when('regVisitorSection', ([regVisitorSection], schema) => {
		return regVisitorSection ? schema.required('Укажите время открытия') : schema.notRequired()
	}),
	regVisitorTimeClose: yup.date().when('regVisitorSection', ([regVisitorSection], schema) => {
		return regVisitorSection ? schema.required('Укажите время закрытия') : schema.notRequired()
	}),
	regParticipantSection: yup.boolean(),
	regParticipantDateOpen: yup
		.date()
		.when('regParticipantSection', ([regParticipantSection], schema) => {
			return regParticipantSection ? schema.required('Укажите дату открытия') : schema.notRequired()
		}),
	regParticipantDateClose: yup
		.date()
		.when('regParticipantSection', ([regParticipantSection], schema) => {
			return regParticipantSection ? schema.required('Укажите дату закрытия') : schema.notRequired()
		}),
	regParticipantTimeOpen: yup
		.date()
		.when('regParticipantSection', ([regParticipantSection], schema) => {
			return regParticipantSection
				? schema.required('Укажите время открытия')
				: schema.notRequired()
		}),
	regParticipantTimeClose: yup
		.date()
		.when('regParticipantSection', ([regParticipantSection], schema) => {
			return regParticipantSection
				? schema.required('Укажите время закрытия')
				: schema.notRequired()
		}),
})
