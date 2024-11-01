import { type FC, type ReactNode } from 'react'

import cn from 'classnames'

import { AdminSwitcher } from 'src/components/admin-switcher/admin-switcher'
import { useFormContext } from 'react-hook-form'

import styles from './index.module.scss'

type AdminSectionProps = {
	children: ReactNode
	sectionName?: string
	className?: string
	titleText?: string
	isBlock?: boolean
}

export const AdminSection: FC<AdminSectionProps> = ({
	children,
	sectionName,
	className,
	titleText,
	isBlock = true,
}) => {
	const { watch } = useFormContext()

	const isChecked = sectionName ? watch(sectionName) : true

	return (
		<section className={cn(styles.adminSection, { [styles._noBlock]: !isBlock }, className)}>
			{sectionName ? (
				<AdminSwitcher name={sectionName}>{titleText}</AdminSwitcher>
			) : (
				titleText && <h2 className={styles.sectionTitle}>{titleText}</h2>
			)}
			{isChecked && (
				<div className={cn({ [styles.switchedContentWrapper]: sectionName })}>{children}</div>
			)}
		</section>
	)
}
