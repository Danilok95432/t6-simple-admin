import { type FC } from 'react'
import { RequestStatusPendingSVG } from 'src/UI/icons/requestStatusPendingSVG'
import { RequestStatusPlacedSVG } from 'src/UI/icons/requestStatusPlacedSVG'
import { RequestStatusRejectedSVG } from 'src/UI/icons/requestStatusRejectedSVG'

type StatusRequestsProps = {
	statusCode?: number
	className?: string
}

export const StatusRequests: FC<StatusRequestsProps> = ({ statusCode = 0, className }) => {
	switch (statusCode) {
		case 200:
			return (
				<div className={className}>
					<RequestStatusPlacedSVG />
					<p>размещена</p>
				</div>
			)
		case 300:
			return (
				<div className={className}>
					<RequestStatusPendingSVG />
					<p>отложена</p>
				</div>
			)
		case 400:
			return (
				<div className={className}>
					<RequestStatusRejectedSVG />
					<p>отклонена</p>
				</div>
			)
		default:
			break
	}
}
