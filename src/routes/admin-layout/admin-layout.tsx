import { type FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { Helmet } from 'react-helmet-async'
import { AdminFooter } from 'src/components/admin-footer/admin-footer'
import { AdminHeader } from 'src/modules/admin-header/admin-header'

import styles from './index.module.scss'
import { AdminNavigation } from 'src/modules/admin-navigation/admin-navigation'

export const AdminLayout: FC = () => {
	return (
		<>
			<Helmet>
				<title>Админка</title>
			</Helmet>
			<AdminHeader />
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
