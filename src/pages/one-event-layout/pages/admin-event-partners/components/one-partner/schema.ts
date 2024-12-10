import { type FileWithPreview } from 'src/types/files'
import * as yup from 'yup'

export type OnePartnerInputs = {
	titlePartner: string
	generalSponsor?: boolean
	partner?: boolean
	infoPartner?: boolean
	sponsor?: boolean
	organizer?: boolean
	volonteer?: boolean
	supplier?: boolean
	coOrganizer?: boolean
	adminPartner?: boolean
	monopoly?: boolean
	scienceInstitution?: boolean
	softwareProd?: boolean
	financialOrg?: boolean
	goodsProd?: boolean
	tradingFood?: boolean
	educationalInstitution?: boolean
	services?: boolean
	tradingGoods?: boolean
	linkPartner: string
	logoPartner: FileWithPreview[]
}

export const onePartnerSchema = yup.object().shape({
	titlePartner: yup.string().required('Введите название'),
	linkPartner: yup.string().url('Неверный формат ссылки').required('Введите ссылку'),
	logoPartner: yup.array().min(1, 'Загрузите логотип').required('Загрузите логотип'),
})
