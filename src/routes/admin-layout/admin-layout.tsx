import { type FC } from 'react'

import { Outlet } from 'react-router-dom'

import { AdminHeader } from 'src/components/admin-header/admin-header'
import { AdminNavigation } from 'src/components/admin-navigation/admin-navigation'
import { Container } from 'src/UI/Container/Container'
import { Helmet } from 'react-helmet-async'
import { AdminFooter } from 'src/components/admin-footer/admin-footer'

import styles from './index.module.scss'
import { AuthModal } from 'src/modals/auth-modal'

export const AdminLayout: FC = () => {
	return (
		<>
			<Helmet>
				<title>Админка</title>
			</Helmet>
			<AdminHeader />
			<AuthModal />
			<main className={styles.adminMain}>
				<Container className={styles.adminInner} $padding='31px 30px 0'>
					<AdminNavigation />
					<div className={styles.contentWrapper}>
						<Outlet />
					</div>
				</Container>
			</main>

			<AdminFooter />
		</>
	)
}
