import { type TabNavigationItem } from 'src/types/navigation'

export const eventsListTabs: TabNavigationItem[] = [
	{
		title: 'Все события',
		link: '/events-list',
		exact: true,
	},
	{
		title: 'Прошедшие',
		link: 'events-past',
	},
	{
		title: 'Предстоящие',
		link: 'events-upcoming',
	},
	{
		title: 'Ключевые',
		link: 'events-main',
	},
	{
		title: 'Отмененные',
		link: 'events-canceled',
	},
]
