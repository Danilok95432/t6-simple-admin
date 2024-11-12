import { type FC } from 'react'

import styles from './index.module.scss'
import { RowControllerIconSvg } from 'src/UI/icons/rowControllerIconSVG'

type RowControllerProps = {
	textOfHidden?: string
	id: string
	hideHandler: (id: string) => void
	removeHandler: (id: string) => void
}

export const RowController: FC<RowControllerProps> = ({
	textOfHidden,
	hideHandler,
	removeHandler,
	id,
}) => {
	return (
		<div className={styles.rowControllerWrapper}>
			<button className={styles.rowControllerBtn} type='button'>
				<RowControllerIconSvg />
			</button>
			<div className={styles.rowControllers}>
				<button className={styles.hideBtn} onClick={() => hideHandler(id)} type='button'>
					{textOfHidden ?? 'Скрыть'}
				</button>
				<button className={styles.removeBtn} onClick={() => removeHandler(id)} type='button'>
					Удалить
				</button>
			</div>
		</div>
	)
}
