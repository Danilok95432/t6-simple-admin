import { Helmet } from 'react-helmet-async'
import { AdminContent } from 'src/components/admin-content/admin-content'

export const ObjectLocation = () => {
	return (
		<>
			<Helmet>
				<title>Карта и маршруты</title>
			</Helmet>
			<AdminContent>
				<h3>Карта и маршруты</h3>
				<p>В разработке...</p>
			</AdminContent>
		</>
	)
}
