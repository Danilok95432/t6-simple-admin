import { type TabNavigationItem } from 'src/types/navigation'

export const communityTabs: TabNavigationItem[] = [
	{
		title: 'Атманов угол',
		link: '/atmans',
		exact: true,
	},
	{
		title: 'История',
		link: 'atm-history',
	},
	{
		title: 'Карта и маршруты',
		link: 'atm-location',
	},
	{
		title: 'Материальная культура',
		link: 'atm-culture',
	},
	{
		title: 'Документы',
		link: 'atm-documents',
	},
]
