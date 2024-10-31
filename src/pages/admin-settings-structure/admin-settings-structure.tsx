import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminSettingsStructure: FC = () => {
	return (
		<>
			<Helmet>
				<title>Настройка структуры страниц</title>
			</Helmet>
			<h1>Настройка структуры страниц</h1>
			<AdminContent>Настройка структуры страниц контент</AdminContent>
		</>
	)
}
