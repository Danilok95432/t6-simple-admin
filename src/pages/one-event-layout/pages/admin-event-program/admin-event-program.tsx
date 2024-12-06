import { type FC } from 'react'

import { AdminContent } from 'src/components/admin-content/admin-content'

import { Link } from 'react-router-dom'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const AdminEventProgram: FC = () => {
	return (
		<AdminContent className={styles.eventProgramPage}>
			<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
				Возврат к списку событий
			</Link>
			<h3>Программа</h3>
		</AdminContent>
	)
}
