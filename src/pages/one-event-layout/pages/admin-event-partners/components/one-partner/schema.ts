import { type PartnerCheckBoxesInfo } from 'src/types/partners'
import * as yup from 'yup'

export type OnePartnerInputs = {
	title: string
	itemlink: string
	partner_vids?: PartnerCheckBoxesInfo[]
	partner_types?: PartnerCheckBoxesInfo[]
}

export const onePartnerSchema = yup.object().shape({
	title: yup.string().required('Введите название'),
	itemlink: yup.string().url('Неверный формат ссылки').required('Введите ссылку'),
})
