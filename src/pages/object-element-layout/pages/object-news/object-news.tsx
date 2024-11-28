import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import { NewsElements } from './components/news-elements/news-elements'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const ObjectNews = () => {
	return (
		<>
			<Helmet>
				<title>Новости</title>
			</Helmet>
			<AdminContent $padding='0' $backgroundColor='#ffffff'>
				<AdminContent $padding='35px' $backgroundColor='#ffffff' $height='0'>
					<Link to={`/${AdminRoute.AdminObjects}`} className={adminStyles.adminReturnLink}>
						Возврат к списку объектов
					</Link>
				</AdminContent>
				<AdminContent
					title='Новости'
					$backgroundColor='#ffffff'
					$height='0'
					$padding='0 30px 20px 30px'
				>
					<></>
				</AdminContent>
				<AdminContent $backgroundColor='#ffffff' $padding='0'>
					<NewsElements />
				</AdminContent>
				<AdminContent $padding='50px 35px' $backgroundColor='#ffffff' $height='0'>
					<Link to={`/${AdminRoute.AdminObjects}`} className={adminStyles.adminReturnLink}>
						Возврат к списку объектов
					</Link>
				</AdminContent>
			</AdminContent>
		</>
	)
}
