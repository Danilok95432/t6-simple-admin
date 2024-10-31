import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminSettingsUsers: FC = () => {
	return (
		<>
			<Helmet>
				<title>Настройка страницы пользователей</title>
			</Helmet>
			<h1>Настройка страницы пользователей</h1>
			<AdminContent>Настройка страницы пользователей контент</AdminContent>
		</>
	)
}
