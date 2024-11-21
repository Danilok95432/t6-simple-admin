import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

export const AdminNewsList: FC = () => {
	return (
		<>
			<Helmet>
				<title>Новости</title>
			</Helmet>
			<h1>Новости</h1>
			{/* <AdminContent className={styles.newsListContent}> */}
			{/* 	<NewsTable /> */}
			{/* </AdminContent> */}
		</>
	)
}
