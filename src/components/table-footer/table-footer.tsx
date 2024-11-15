import { type FC } from 'react'

import styles from './index.module.scss'

type TableFooterProps = {
	addText?: string
}

export const TableFooter: FC<TableFooterProps> = ({ addText = 'Добавить' }) => {
	return <div className={styles.tableFooter}></div>
}
