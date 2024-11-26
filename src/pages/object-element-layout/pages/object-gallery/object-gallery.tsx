import { Helmet } from 'react-helmet-async'
import { AdminContent } from 'src/components/admin-content/admin-content'

export const ObjectGallery = () => {
	return (
		<>
			<Helmet>
				<title>Галерея</title>
			</Helmet>
			<AdminContent>
				<h3>Галерея</h3>
				<p>В разработке...</p>
			</AdminContent>
		</>
	)
}
