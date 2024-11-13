import { type FC, useState } from 'react'

import cn from 'classnames'
import { NotificationSvg } from 'src/UI/icons/notificationSVG'
import { Link } from 'react-router-dom'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminPersonalSvg } from 'src/UI/icons/adminPersonalSVG'

import styles from './index.module.scss'
import { LoginIconSvg } from 'src/UI/icons/loginIconSVG'
import { useActions } from 'src/hooks/actions/actions'
import { AuthModal } from 'src/modals/auth-modal/auth-modal'

export const AdminPersonal: FC = () => {
	const [isAuth] = useState(false)
	const { openModal } = useActions()

	const openAuthModal = () => {
		openModal(<AuthModal />)
	}

	if (!isAuth)
		return (
			<button className={styles.loginBtn} onClick={openAuthModal} type='button'>
				Войти
				<LoginIconSvg />
			</button>
		)

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
