import { type FC } from 'react'
import { RequestStatusPendingSVG } from 'src/UI/icons/requestStatusPendingSVG'
import { RequestStatusPlacedSVG } from 'src/UI/icons/requestStatusPlacedSVG'
import { RequestStatusRejectedSVG } from 'src/UI/icons/requestStatusRejectedSVG'

import styles from './index.module.scss'

type StatusRequestsProps = {
	statusCode?: string
}

export const StatusRequests: FC<StatusRequestsProps> = ({ statusCode }) => {
	switch (statusCode) {
		case 'placed':
			return (
				<div className={styles.statusRequest}>
					<RequestStatusPlacedSVG />
					<p>размещена</p>
				</div>
			)
		case 'pending':
			return (
				<div className={styles.statusRequest}>
					<RequestStatusPendingSVG />
					<p>отложена</p>
				</div>
			)
		case 'rejected':
			return (
				<div className={styles.statusRequest}>
					<RequestStatusRejectedSVG />
					<p>отклонена</p>
				</div>
			)
		default:
			break
	}
}
