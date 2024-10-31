import { type FC } from 'react'

import cn from 'classnames'
import { NotificationSvg } from 'src/UI/icons/notificationSVG'
import { Link } from 'react-router-dom'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminPersonalSvg } from 'src/UI/icons/adminPersonalSVG'

import styles from './index.module.scss'

export const AdminPersonal: FC = () => {
	// const { data: userData } = useGetUserByIdQuery('0')
	// if (!userData) return <button className={styles.authBtn}>Войти</button>
	return (
		<div className={styles.adminPersonal}>
			<Link
				className={cn(styles.notificationLink, { [styles._unread]: true })}
				to={AdminRoute.AdminNotifications}
			>
				<NotificationSvg />
			</Link>
			<Link to={AdminRoute.AdminPersonal}>
				<AdminPersonalSvg />
			</Link>
		</div>
	)
}
