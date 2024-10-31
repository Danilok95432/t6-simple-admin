import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminSettingsBlocks: FC = () => {
	return (
		<>
			<Helmet>
				<title>Настройка встраиваемых блоков</title>
			</Helmet>
			<h1>Настройка встраиваемых блоков</h1>
			<AdminContent>Настройка встраиваемых блоков контент</AdminContent>
		</>
	)
}
