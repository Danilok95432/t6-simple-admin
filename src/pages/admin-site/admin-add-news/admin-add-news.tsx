import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

import { NewsForm } from 'src/pages/admin-site/components/news-form/news-form'

export const AdminAddNews: FC = () => {
	return (
		<>
			<Helmet>
				<title>Новости</title>
			</Helmet>
			<h1>Добавить новость</h1>
			<AdminContent $padding='20px 30px 35px'>
				<NewsForm />
			</AdminContent>
		</>
	)
}
