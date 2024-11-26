import { Helmet } from 'react-helmet-async'
import { AdminContent } from 'src/components/admin-content/admin-content'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const AdminObjects = () => {
	return (
		<>
			<Helmet>
				<title>Объекты кластера</title>
			</Helmet>
			<div className={adminStyles.adminTitleTab}>
				<h1>Объекты кластера</h1>
			</div>

			<AdminContent>
				<p>в разработке...</p>
			</AdminContent>
		</>
	)
}
