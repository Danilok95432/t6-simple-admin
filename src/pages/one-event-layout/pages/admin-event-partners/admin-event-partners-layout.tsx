import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminEventPartnersLayout: FC = () => {
	return (
		<>
			<Helmet>
				<title>Партнеры</title>
			</Helmet>
			<AdminContent $padding='0' $backgroundColor='#ffffff'>
				<Outlet />
			</AdminContent>
		</>
	)
}
