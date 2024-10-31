import { type TabNavigationItem } from 'src/types/navigation'

export const eventRostersSubtabs: TabNavigationItem[] = [
	{
		title: 'Посетители',
		link: '/event-new/event-rosters',
		exact: true,
	},
	{
		title: 'Группы',
		link: 'rosters-groups',
	},
	{
		title: 'Транспортные средства',
		link: 'rosters-transport',
	},
	{
		title: 'Сотрудники',
		link: 'rosters-employees',
	},
	{
		title: 'Приемы пищи',
		link: 'rosters-food',
	},
	{
		title: 'Списки питания',
		link: 'rosters-lists',
	},
]
