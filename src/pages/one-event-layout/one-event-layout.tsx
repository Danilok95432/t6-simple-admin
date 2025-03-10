import { Outlet, useParams } from 'react-router-dom'

import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import type { TabNavigationItem } from 'src/types/navigation'

export const OneEventLayout = () => {
	const { id } = useParams()
	const eventTabs: TabNavigationItem[] = [
		{
			title: 'Профиль события',
			link: `/event/event-profile/${id ?? 'new'}`,
		},
		{
			title: 'Контакты',
			link: `/event/event-contacts/${id ?? 'new'}`,
		},
		{
			title: 'Контент',
			link: `/event/event-content/${id ?? 'new'}`,
		},
		{
			title: 'Партнеры',
			link: `/event/event-partners/${id ?? 'new'}`,
		},
		{
			title: 'Новости',
			link: `/event/event-news/${id ?? 'new'}`,
		},
		{
			title: 'Видеолента',
			link: `/event/event-videos/${id ?? 'new'}`,
		},
		{
			title: 'Программа',
			link: `/event/event-program/${id ?? 'new'}`,
		},
		/* {
			title: 'История',
			link: `/event/event-history/${id ?? 'new'}`,
		}, */
	]
	return (
		<>
			<div className={adminStyles.adminTitleTab}>
				<h1>{id === 'new' ? 'Новое событие' : 'Атмановские Кулачки 2024'}</h1>
				<TabNavigation navItems={eventTabs} />
			</div>
			<Outlet />
		</>
	)
}
