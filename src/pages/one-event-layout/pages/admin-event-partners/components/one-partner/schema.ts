import { type PartnerCheckBoxesInfo } from 'src/types/partners'
import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type OneEventPartnerInputs = {
	partner_types?: PartnerCheckBoxesInfo[]
	partners_list?: SelOption[]
}

export const oneEventPartnerSchema = yup.object()
