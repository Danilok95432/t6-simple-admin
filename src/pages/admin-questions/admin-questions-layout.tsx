import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { AdminContent } from 'src/components/admin-content/admin-content'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const AdminQuestionsLayout: FC = () => {
	return (
		<>
			<Helmet>
				<title>Частые вопросы</title>
			</Helmet>
			<div className={adminStyles.adminTitleTab}>
				<h1>Частые вопросы</h1>
			</div>
			<AdminContent
				className={''}
				$backgroundColor='#ffffff'
				$padding='30px 0'
				link='#'
				linkPadding='0 0 0 30px'
			>
				<h3 className={styles['table-title']}>Частые вопросы</h3>
				<Outlet />
			</AdminContent>
		</>
	)
}
