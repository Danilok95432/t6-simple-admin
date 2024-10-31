import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'
import { eventsListTabs } from 'src/pages/events-list-layout/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const EventsListLayout = () => {
	return (
		<>
			<Helmet>
				<title>Список событий</title>
			</Helmet>
			<div className={adminStyles.adminTitleTab}>
				<h1>Список событий</h1>
				<TabNavigation navItems={eventsListTabs} />
			</div>

			<Outlet />
		</>
	)
}
