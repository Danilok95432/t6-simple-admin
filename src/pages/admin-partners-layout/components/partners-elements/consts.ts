import { type FilterTableInput } from 'src/types/global'

export const ObjectsElementsFiltrationInputs: FilterTableInput[] = [
	{
		name: 'title',
		placeholder: 'искать по наименованию',
		type: 'text',
	},
	{
		name: 'typeOrg',
		placeholder: 'искать по виду организации',
		type: 'text',
	},
	{
		name: 'typePart',
		placeholder: 'искать по типу партнерства',
		type: 'text',
	},
]
