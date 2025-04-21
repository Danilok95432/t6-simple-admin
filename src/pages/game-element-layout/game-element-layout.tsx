import { Outlet, useParams } from 'react-router-dom'
import type { TabNavigationItem } from 'src/types/navigation'
import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const GameElementLayout = () => {
	const { id } = useParams()
	const gameTabs: TabNavigationItem[] = [
		{
			title: 'Информация',
			link: `/game/game-info/${id ?? 'new'}`,
		},
		{
			title: 'История',
			link: `/game/game-history/${id ?? 'new'}`,
		},
	]
	return (
		<>
			<div className={adminStyles.adminTitleTab}>
				<h1>Одна игра</h1>
				<TabNavigation navItems={gameTabs} />
			</div>
			<Outlet />
		</>
	)
}
