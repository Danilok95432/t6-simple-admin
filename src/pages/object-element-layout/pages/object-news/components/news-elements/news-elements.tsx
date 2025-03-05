import { type ObjectNews } from 'src/types/objects'
import { useNavigate, useParams } from 'react-router-dom'
import { type FC } from 'react'
import cn from 'classnames'

import { mainFormatDate } from 'src/helpers/utils'
import {
	useDeleteObjectNewsByIdMutation,
	useGetNewsByObjectIdQuery,
	useHideObjectNewsByIdMutation,
} from 'src/store/objects/objects.api'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { GridRow } from 'src/components/grid-row/grid-row'
import { MainCheckBox } from 'src/UI/MainCheckBox/MainCheckBox'
import { CheckMarkSvg } from 'src/UI/icons/checkMarkSVG'
import { TableFiltration } from 'src/modules/table-filtration/table-filtration'
import { ObjectNewsFiltrationInputs } from 'src/pages/object-element-layout/pages/object-news/components/news-elements/consts'
import { useAppSelector } from 'src/hooks/store'
import { getFiltrationValues } from 'src/modules/table-filtration/store/table-filtration.selectors'

import styles from './index.module.scss'

export const NewsElements: FC = () => {
	const { id } = useParams()
	const filterValues = useAppSelector(getFiltrationValues)
	const { data: news = [] } = useGetNewsByObjectIdQuery({
		id,
		title: filterValues.title,
		tags: filterValues.tags,
		date: filterValues.date,
	})

	const [deleteNewsById] = useDeleteObjectNewsByIdMutation()
	const [hideNewsById] = useHideObjectNewsByIdMutation()

	const navigate = useNavigate()

	const tableTitles = ['Наименование', 'Дата', 'Теги', 'Ключевая', '']
	const formatObjectsTableData = (newsData: ObjectNews[]) => {
		return newsData.map((newsEl) => {
			return {
				rowId: newsEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': newsEl.hidden }, styles.titleNewsTable)} key='0'>
						{newsEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': newsEl.hidden })} key='1'>
						{mainFormatDate(newsEl.date)}
					</p>,
					<p className={cn({ 'hidden-cell': newsEl.hidden })} key='2'>
						{newsEl.tags}
					</p>,
					<MainCheckBox
						key='3'
						checked={newsEl.main}
						svgNode={<CheckMarkSvg />}
						className={styles.checkBoxWrapperObjectNews}
					/>,
					<RowController
						id={newsEl.id}
						hideHandler={rowHideHandler}
						removeHandler={rowDeleteHandler}
						textOfHidden='Скрыть новость'
						key='4'
					/>,
				],
			}
		})
	}

	const rowDeleteHandler = async (newsId: string) => {
		await deleteNewsById(newsId)
	}

	const rowHideHandler = async (newsId: string) => {
		await hideNewsById(newsId)
	}

	return (
		<div className={styles.objectNewsContainer}>
			<GridRow $margin='0 0 15px 0' $padding='0 29px' className={styles.searchRow}>
				<TableFiltration filterInputs={ObjectNewsFiltrationInputs} />
			</GridRow>
			<CustomTable
				className={styles.newsTable}
				rowData={formatObjectsTableData(news)}
				colTitles={tableTitles}
			/>
			<TableFooter
				totalElements={news.length}
				addClickHandler={() => navigate('/object/object-info/new')}
				addText='Добавить новость'
			/>
		</div>
	)
}
