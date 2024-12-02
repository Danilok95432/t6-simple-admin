import { type FC } from 'react'
import { Link } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { MainInput } from 'src/UI/MainInput/MainInput'
import { SearchSvg } from 'src/UI/icons/searchSVG'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminLogoSvg } from 'src/UI/icons/adminLogoSVG'
import { AdminPersonal } from 'src/modules/admin-header/components/profile-personal/admin-personal'
import { useLazyTestLoginQuery } from 'src/store/auth/auth.api'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import styles from './index.module.scss'

export const AdminHeader: FC = () => {
	const [testLogin] = useLazyTestLoginQuery()

	const handleTestLogin = async () => {
		const { data } = await testLogin(null)
		console.log(data)
	}

	return (
		<header className={styles.adminHeader}>
			<Container className={styles.adminHeaderContainer}>
				<Link className={styles.logoLink} to={AdminRoute.AdminHome}>
					<AdminLogoSvg />
				</Link>
				<MainInput
					className={styles.adminSearchInput}
					name='admin_search'
					placeholder='Поиск'
					svgNode={<SearchSvg />}
				/>
				<AdminButton onClick={handleTestLogin} type='button' $height='35px'>
					Тест API
				</AdminButton>
				<AdminPersonal />
			</Container>
		</header>
	)
}
