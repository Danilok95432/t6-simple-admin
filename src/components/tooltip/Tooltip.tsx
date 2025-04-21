import { type FC, useState, useRef, useEffect } from 'react'
import classNames from 'classnames'

import styles from './tooltip.module.scss'

interface ITooltipProps {
	text: string
	position?: 'top' | 'bottom' | 'left' | 'right'
	children: React.ReactNode
	delay?: number
	className?: string
	wrapperClassName?: string
}

export const Tooltip: FC<ITooltipProps> = (props) => {
	const { text, position = 'top', children, delay = 500, wrapperClassName, className } = props

	const [isVisible, setIsVisible] = useState(false)
	const timeoutRef = useRef<NodeJS.Timeout | null>(null)

	const showTooltip = () => {
		timeoutRef.current = setTimeout(() => {
			setIsVisible(true)
		}, delay)
	}

	const hideTooltip = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}
		setIsVisible(false)
	}

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
		}
	}, [])

	return (
		<div
			className={classNames(styles.tooltipWrapper, wrapperClassName)}
			onMouseEnter={showTooltip}
			onMouseLeave={hideTooltip}
		>
			{children}
			<span
				className={classNames(
					styles.tooltipTip,
					className,
					styles[position],
					!isVisible ? styles.hidden : '',
				)}
			>
				{text}
			</span>
		</div>
	)
}
