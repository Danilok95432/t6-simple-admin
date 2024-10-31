import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminAddDepartments: FC = () => {
	return (
		<>
			<Helmet>
				<title>Создать отделение</title>
			</Helmet>
			<h1>Создать отделение</h1>
			<AdminContent>Создать отделение контент</AdminContent>
		</>
	)
}
