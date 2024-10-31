import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminSettingsFeedback: FC = () => {
	return (
		<>
			<Helmet>
				<title>Настройка страницы обратной связи</title>
			</Helmet>
			<h1>Настройка страницы обратной связи</h1>
			<AdminContent>Настройка страницы обратной связи контент</AdminContent>
		</>
	)
}
