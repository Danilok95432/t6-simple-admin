import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { AdminRoute } from 'src/routes/admin-routes/consts'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { Container } from 'src/UI/Container/Container'
import { PartnerElements } from './components/partner-elements/partner-elements'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const AdminEventPartners: FC = () => {
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
					<h3 className={styles.title}>Партнеры</h3>
				</Container>
				<PartnerElements />
				<Container $padding='50px 35px' $paddingMobile='50px 35px'>
					<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
						Возврат к списку событий
					</Link>
				</Container>
			</AdminContent>
		</>
	)
}
