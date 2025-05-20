import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'
import { Outlet, useParams } from 'react-router-dom'
import type { TabNavigationItem } from 'src/types/navigation'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const CultureElementLayout = () => {
	const { id } = useParams()
	const cultureTabs: TabNavigationItem[] = [
		{
			title: 'Информация',
			link: `/culture/culture-info/${id ?? 'new'}`,
		},
		{
			title: 'История',
			link: `/culture/culture-history/${id ?? 'new'}`,
		},
	]
	return (
		<>
			<div className={adminStyles.adminTitleTab}>
				<h1>Одна традиция</h1>
				<TabNavigation navItems={cultureTabs} />
			</div>
			<Outlet />
		</>
	)
}
