import { type FC } from 'react'

import styles from './index.module.scss'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { PrevPaginationArrowSvg } from 'src/UI/icons/prevPaginationArrowSVG'
import { NextPaginationArrowSvg } from 'src/UI/icons/NextPaginationArrowSvg'
import { FlexRow } from 'src/components/flex-row/flex-row'

type TableFooterProps = {
	addText?: string
	addClickHandler?: () => void
	totalElements?: number
	currentPage?: number
	totalPages?: number
	className?: string
}

export const TableFooter: FC<TableFooterProps> = ({
	addText = 'Добавить',
	addClickHandler,
	totalElements = 0,
	currentPage = 1,
	totalPages = 1,
	className,
}) => {
	return (
		<div className={className ?? styles.tableFooterWrapper}>
			<div className={styles.tableFooter}>
				<div className={styles.pagination}>
					<div className={styles.paginationInfo}>
						<span>Всего элементов: {totalElements}</span>
						<FlexRow $alignItems='center' $gap='0'>
							Выводить по:
							<MainSelect
								className={styles.limitSelect}
								items={[
									{ label: '10', value: '10' },
									{ label: '50', value: '50' },
								]}
							/>
						</FlexRow>
					</div>
					<div className={styles.paginationControllers}>
						<button type='button'>
							<PrevPaginationArrowSvg />
						</button>
						<span>
							{currentPage} из {totalPages}
						</span>
						<button type='button'>
							<NextPaginationArrowSvg />
						</button>
					</div>
				</div>
				<AddButton className={styles.tableFooterAddBtn} onClick={addClickHandler}>
					{addText}
				</AddButton>
			</div>
		</div>
	)
}
