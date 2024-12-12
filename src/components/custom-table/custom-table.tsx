import React, { type FC, type ReactNode } from 'react'

import cn from 'classnames'

import styles from './index.module.scss'

export type RowData = {
	rowId: string
	cells: Array<string | ReactNode>
}

type CustomTableProps = {
	colTitles?: ReactNode[]
	rowData: RowData[]
	rowClickHandler?: (id: string) => void
}

export const CustomTable: FC<CustomTableProps & React.HTMLAttributes<HTMLTableElement>> = ({
	colTitles,
	rowData,
	className,
	rowClickHandler,
	...props
}) => {
	return (
		<table
			{...props}
			className={cn(styles.customTable, className, { [styles._short]: rowData?.length < 3 })}
		>
			{!!colTitles && (
				<thead>
					<tr>
						{colTitles.map((title, idx) => (
							<th key={idx}>{title}</th>
						))}
					</tr>
				</thead>
			)}

			<tbody>
				{rowData?.map((rowEl, rowIdx) => (
					<tr
						key={rowEl.rowId}
						data-idx={rowIdx + 1}
						onClick={() => rowClickHandler?.(rowEl.rowId)}
					>
						{rowEl.cells.map((cell, cellIdx) => (
							<td key={cellIdx}>{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}
