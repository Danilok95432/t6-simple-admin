import { type FC } from 'react'
import { type TabNavigationItem } from 'src/types/navigation'

import { NavLink } from 'react-router-dom'
import { setActive } from 'src/helpers/utils'

import styles from './index.module.scss'

type TabNavigationProps = {
	navItems: TabNavigationItem[]
	variant?: 'main' | 'sub'
}
export const TabNavigation: FC<TabNavigationProps> = ({ navItems, variant = 'main' }) => {
	return (
		<ul className={variant === 'main' ? styles.tabNavList : styles.subtabList}>
			{navItems?.map((navEl) => (
				<li key={navEl.title}>
					<NavLink
						className={({ isActive }) => setActive(isActive, styles.activeLink)}
						to={navEl.link}
						end={navEl.exact}
					>
						{navEl.title}
					</NavLink>
				</li>
			))}
		</ul>
	)
}
