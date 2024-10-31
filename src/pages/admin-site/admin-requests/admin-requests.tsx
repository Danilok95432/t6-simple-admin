import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminRequests: FC = () => {
	return (
		<>
			<Helmet>
				<title>Заявки</title>
			</Helmet>
			<h1>Заявки</h1>
			<AdminContent $height='1100px'>Заявки</AdminContent>
		</>
	)
}
