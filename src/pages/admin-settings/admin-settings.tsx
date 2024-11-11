import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminSettings: FC = () => {
	return (
		<>
			<Helmet>
				<title>Настройка системы</title>
			</Helmet>
			<h1>Настройка системы</h1>
			<AdminContent>В разработке...</AdminContent>
		</>
	)
}
