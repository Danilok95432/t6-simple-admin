import { type NewsItem } from 'src/types/news'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import { mainFormatDate } from 'src/helpers/utils'
import {
	useDeleteNewsByIdMutation,
	useGetAllNewsQuery,
	useHideNewsByIdMutation,
} from 'src/store/news/news.api'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { Loader } from 'src/components/loader/loader'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { GridRow } from 'src/components/grid-row/grid-row'
import { MainCheckBox } from 'src/UI/MainCheckBox/MainCheckBox'
import { CheckMarkSvg } from 'src/UI/icons/checkMarkSVG'

import styles from './index.module.scss'
import { useAppSelector } from 'src/hooks/store'
import { getFiltrationValues } from 'src/modules/table-filtration/store/table-filtration.selectors'
import { TableFiltration } from 'src/modules/table-filtration/table-filtration'
import { NewsElementsByEventIdFiltrationInputs } from './consts'

export const NewsList = () => {
	const filterValues = useAppSelector(getFiltrationValues)

	const { data: newsDataResponse, isLoading } = useGetAllNewsQuery({
		title: filterValues.title,
		date: filterValues.date,
		tags: filterValues.tags,
	})
	const [deleteNewsById] = useDeleteNewsByIdMutation()
	const [hideNewsById] = useHideNewsByIdMutation()

	const navigate = useNavigate()

	const tableTitles = ['Наименование', 'Дата', 'Теги', 'Ключевая', '']
	const formatObjectsTableData = (newsData: NewsItem[]) => {
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
						disabled={true}
						svgNode={<CheckMarkSvg />}
						className={styles.checkBoxWrapperNews}
					/>,
					<RowController
						id={newsEl.id}
						hideHandler={rowHideHandler}
						removeHandler={rowDeleteHandler}
						textOfHidden='Спрятать новость'
						key='4'
					/>,
				],
			}
		})
	}

	const rowDeleteHandler = async (newsId: string) => {
		await deleteNewsById(newsId)
	}

	const rowHideHandler = async (id: string) => {
		await hideNewsById(id)
	}

	const rowClickHandler = (id: string) => {
		navigate(`/news/news-list/${id}`)
	}

	if (isLoading || !newsDataResponse?.news) return <Loader />

	return (
		<>
			<h3>Новости</h3>
			<div>
				<GridRow $margin='0 0 15px 0' $padding='0 29px' className={styles.searchRow}>
					<TableFiltration filterInputs={NewsElementsByEventIdFiltrationInputs} />
				</GridRow>
				<CustomTable
					className={styles.newsTable}
					rowData={formatObjectsTableData(newsDataResponse?.news ?? [])}
					colTitles={tableTitles}
					rowClickHandler={rowClickHandler}
				/>
				<TableFooter
					totalElements={newsDataResponse?.news.length}
					addClickHandler={() => navigate('/news/news-list/new')}
					addText='Добавить новость'
				/>
			</div>
		</>
	)
}
