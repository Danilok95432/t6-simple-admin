import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { EventsTable } from 'src/pages/events-list/components/events-table/events-table'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const EventsList = () => {
	return (
		<>
			<Helmet>
				<title>События</title>
			</Helmet>
			<div className={adminStyles.adminTitleTab}>
				<h1>События</h1>
			</div>
			<AdminContent
				className={styles.eventsListContent}
				$backgroundColor='#ffffff'
				$padding='30px 0'
			>
				<h3>События</h3>
				<EventsTable />
			</AdminContent>
		</>
	)
}
