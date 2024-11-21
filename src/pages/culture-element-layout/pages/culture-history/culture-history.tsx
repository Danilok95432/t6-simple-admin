import { Helmet } from 'react-helmet-async'
import { AdminContent } from 'src/components/admin-content/admin-content'
export const CultureHistory = () => {
	return (
		<>
			<Helmet>
				<title>История</title>
			</Helmet>
			<AdminContent>
				<h3>История</h3>
				<p>История культуры в разработке...</p>
			</AdminContent>
		</>
	)
}
