import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { NewsTable } from 'src/pages/admin-site/admin-news-list/components/news-table/news-table'

import { AdminRoute } from 'src/routes/admin-routes/consts'

import { PlusIconSvg } from 'src/UI/icons/plusIconSVG'

import styles from './index.module.scss'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

export const AdminNewsList: FC = () => {
	return (
		<>
			<Helmet>
				<title>Новости</title>
			</Helmet>
			<h1>Новости</h1>
			<AdminContent className={styles.newsListContent} $height='1100px'>
				<AdminButton
					as='link'
					to={`/${AdminRoute.AdminAddNews}`}
					$icon
					$padding='8px'
					$margin='0 0 20px 0'
				>
					<PlusIconSvg fill='#FFFFFF' />
					Добавить новость
				</AdminButton>
				<NewsTable />
				<AdminButton
					as='link'
					to={`/${AdminRoute.AdminAddNews}`}
					$icon
					$padding='8px'
					$margin='20px 0 0 0'
				>
					<PlusIconSvg fill='#FFFFFF' />
					Добавить новость
				</AdminButton>
			</AdminContent>
		</>
	)
}
