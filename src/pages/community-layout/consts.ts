import { type TabNavigationItem } from 'src/types/navigation'

export const communityTabs: TabNavigationItem[] = [
	{
		title: 'Атманов Угол',
		link: '/atmans',
		exact: true,
	},
	{
		title: 'История',
		link: 'atm-history',
	},
	{
		title: 'Природа',
		link: 'atm-nature',
	},
	{
		title: 'Карта и маршруты',
		link: 'atm-location',
	},
	{
		title: 'Традиции Атманова угла',
		link: 'atm-culture',
	},
	{
		title: 'Игры Атманова Угла',
		link: 'atm-games',
	},
	/* {
		title: 'Документы',
		link: 'atm-documents',
	}, */
]
