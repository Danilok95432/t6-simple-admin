import { type FC, type ReactNode } from 'react'

import cn from 'classnames'

import { AdminSwitcher } from 'src/components/admin-switcher/admin-switcher'
import { useFormContext } from 'react-hook-form'

import styles from './index.module.scss'

type AdminSectionProps = {
	children: ReactNode
	additionalNodeForHead?: ReactNode
	sectionName?: string
	className?: string
	innerClassName?: string
	headSectionClassName?: string
	titleText?: string
	titleStyleClass?: string
	isBlock?: boolean
	noBorder?: boolean
}

export const AdminSection: FC<AdminSectionProps> = ({
	children,
	sectionName,
	className,
	innerClassName,
	titleText,
	headSectionClassName,
	isBlock = true,
	noBorder = false,
	additionalNodeForHead,
	titleStyleClass,
}) => {
	const { watch } = useFormContext()

	const isChecked = sectionName ? watch(sectionName) : true

	return (
		<section className={cn(styles.adminSection, { [styles._noBlock]: !isBlock }, className)}>
			<div
				className={cn(styles.sectionHead, headSectionClassName, {
					[styles._activeSection]: sectionName ? !!watch(sectionName) : false,
				})}
			>
				{sectionName ? (
					<AdminSwitcher name={sectionName}>{titleText}</AdminSwitcher>
				) : (
					titleText && (
						<h2
							className={cn(
								styles.singleTitle,
								{ [styles.noBorderBottom]: noBorder },
								titleStyleClass,
							)}
						>
							{titleText}
						</h2>
					)
				)}
				{additionalNodeForHead}
			</div>

			{isChecked && (
				<div className={cn(innerClassName, { [styles.switchedContentWrapper]: sectionName })}>
					{children}
				</div>
			)}
		</section>
	)
}
