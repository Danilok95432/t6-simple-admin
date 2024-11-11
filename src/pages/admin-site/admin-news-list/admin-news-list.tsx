import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { NewsTable } from 'src/pages/admin-site/admin-news-list/components/news-table/news-table'

import styles from './index.module.scss'

export const AdminNewsList: FC = () => {
	return (
		<>
			<Helmet>
				<title>Новости</title>
			</Helmet>
			<h1>Новости</h1>
			<AdminContent className={styles.newsListContent} $height='1100px'>
				<NewsTable />
			</AdminContent>
		</>
	)
}
