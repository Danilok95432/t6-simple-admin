import { type FilterTableInput } from 'src/types/global'

export const TraditionElementsFiltrationInputs: FilterTableInput[] = [
	{
		name: 'title',
		placeholder: 'искать по наименованию',
		type: 'text',
	},
	{
		name: 'createdate',
		placeholder: 'размещено',
		type: 'date',
	},
]
