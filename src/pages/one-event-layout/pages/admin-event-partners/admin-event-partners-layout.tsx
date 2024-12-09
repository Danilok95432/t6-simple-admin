import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, Outlet } from 'react-router-dom'

import { AdminRoute } from 'src/routes/admin-routes/consts'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { Container } from 'src/UI/Container/Container'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const AdminEventPartnersLayout: FC = () => {
	return (
		<>
			<Helmet>
				<title>Партнеры</title>
			</Helmet>
			<AdminContent $padding='0' $backgroundColor='#ffffff'>
				<Container $padding='35px' $paddingMobile='35px'>
					<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
						Возврат к списку событий
					</Link>
				</Container>
				<Outlet />
				<Container $padding='50px 35px' $paddingMobile='50px 35px'>
					<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
						Возврат к списку событий
					</Link>
				</Container>
			</AdminContent>
		</>
	)
}
