import { Helmet } from 'react-helmet-async'
import { AdminContent } from 'src/components/admin-content/admin-content'

export const ObjectInfo = () => {
	return (
		<>
			<Helmet>
				<title>Об объекте</title>
			</Helmet>
			<AdminContent>
				<h3>Об объекте</h3>
				<p>В разработке...</p>
			</AdminContent>
		</>
	)
}
