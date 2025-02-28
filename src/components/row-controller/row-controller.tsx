import React, { type FC } from 'react'
import cn from 'classnames'

import { RowControllerIconSvg } from 'src/UI/icons/rowControllerIconSVG'

import styles from './index.module.scss'

type RowControllerProps = {
	textOfHidden?: string
	className?: string
	id: string
	hideHandler: (id: string) => void
	removeHandler: (id: string) => void
}

export const RowController: FC<RowControllerProps> = ({
	textOfHidden,
	className,
	hideHandler,
	removeHandler,
	id,
}) => {
	const handleClickHide = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
		e.stopPropagation()
		hideHandler(id)
	}
	const handleClickRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
		e.stopPropagation()
		removeHandler(id)
	}

	return (
		<div className={cn(styles.rowControllerWrapper, className)}>
			<button className={styles.rowControllerBtn} type='button'>
				<RowControllerIconSvg />
			</button>
			<div className={cn(styles.rowControllers, 'row-controllers')}>
				<button className={styles.hideBtn} onClick={(e) => handleClickHide(e, id)} type='button'>
					{textOfHidden ?? 'Скрыть'}
				</button>
				<button
					className={styles.removeBtn}
					onClick={(e) => handleClickRemove(e, id)}
					type='button'
				>
					Удалить
				</button>
			</div>
		</div>
	)
}
