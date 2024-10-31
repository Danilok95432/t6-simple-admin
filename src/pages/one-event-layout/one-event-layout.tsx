import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'
import { oneEventTabs } from 'src/pages/one-event-layout/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const OneEventLayout = () => {
	return (
		<>
			<Helmet>
				<title>События</title>
			</Helmet>
			<div className={adminStyles.adminTitleTab}>
				<h1>События</h1>
				<TabNavigation navItems={oneEventTabs} />
			</div>

			<Outlet />
		</>
	)
}
