import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminSettingsHome: FC = () => {
	return (
		<>
			<Helmet>
				<title>Настройка главной страницы</title>
			</Helmet>
			<h1>Настройка главной страницы</h1>
			<AdminContent>Настройка главной страницы контент</AdminContent>
		</>
	)
}
