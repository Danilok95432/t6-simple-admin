import { type FilterTableInput } from 'src/types/global'

export const PartnersElementsFiltrationInputs: FilterTableInput[] = [
	{
		name: 'title',
		placeholder: 'искать по наименованию',
		type: 'text',
	},
	{
		name: 'type',
		placeholder: 'искать по виду организации',
		type: 'text',
	},
	{
		name: 'relation',
		placeholder: 'искать по типу партнерства',
		type: 'text',
	},
]
