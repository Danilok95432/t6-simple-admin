import { Helmet } from 'react-helmet-async'
import { AdminContent } from 'src/components/admin-content/admin-content'

export const ObjectNews = () => {
	return (
		<>
			<Helmet>
				<title>Новости</title>
			</Helmet>
			<AdminContent>
				<h3>Новости</h3>
				<p>В разработке...</p>
			</AdminContent>
		</>
	)
}
