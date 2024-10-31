import { type TabNavigationItem } from 'src/types/navigation'

export const oneEventTabs: TabNavigationItem[] = [
	{
		title: 'Профиль события',
		link: '/event-new',
		exact: true,
	},
	{
		title: 'Регистрация',
		link: 'event-reg',
	},
	{
		title: 'Билеты и допуски',
		link: 'event-tickets',
	},
	{
		title: 'Контент',
		link: 'event-content',
	},
	{
		title: 'Локации',
		link: 'event-locations',
	},
	{
		title: 'Расписание',
		link: 'event-timetable',
	},
	{
		title: 'Партнеры',
		link: 'event-partners',
	},
	{
		title: 'Публикация',
		link: 'event-publication',
	},
	{
		title: 'Списки',
		link: 'event-rosters',
	},
	{
		title: 'Отчеты',
		link: 'event-reports',
	},
]
