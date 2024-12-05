import { type FC } from 'react'

import { Link } from 'react-router-dom'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
export const AdminEventHistory: FC = () => {
	return (
		<AdminContent>
			<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
				Возврат к списку событий
			</Link>
			<h3>История</h3>
			<p>В разработке...</p>
		</AdminContent>
	)
}
