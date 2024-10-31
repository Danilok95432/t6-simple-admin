import { type FC } from 'react'

import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import { adminMenuItems } from 'src/components/admin-navigation/consts'
import { AdminNavBtn } from 'src/components/admin-nav-btn/admin-nav-btn'

import { setActive } from 'src/helpers/utils'

import styles from './index.module.scss'

export const AdminNavigation: FC = () => {
	return (
		<aside className={styles.adminNavigation}>
			<ul className={styles.adminNavigationList}>
				{adminMenuItems.map((navItem) => (
					<li className={cn({ [styles._disableLink]: navItem.disable })} key={navItem.link}>
						{navItem.childItems ? (
							<AdminNavBtn
								title={navItem.title}
								icon={navItem.icon}
								childNavItems={navItem.childItems}
							/>
						) : (
							<NavLink
								className={({ isActive }) => setActive(isActive, styles.activeLink)}
								to={navItem.link}
							>
								{navItem.icon}
								{navItem.title}
							</NavLink>
						)}
					</li>
				))}
			</ul>
		</aside>
	)
}
