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
		title: 'Карта и маршруты',
		link: 'atm-location',
	},
	{
		title: 'Материальная культура',
		link: 'atm-culture',
	},
	{
		title: 'Традиции Атманова Угла',
		link: 'atm-traditions',
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
