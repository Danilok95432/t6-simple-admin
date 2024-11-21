import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'
import { Outlet } from 'react-router-dom'
import { cultureTabs } from 'src/pages/culture-element-layout/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const CultureElementLayout = () => {
	return (
		<>
			<div className={adminStyles.adminTitleTab}>
				<h1>Элемент материальной культуры</h1>
				<TabNavigation navItems={cultureTabs} />
			</div>
			<Outlet />
		</>
	)
}
