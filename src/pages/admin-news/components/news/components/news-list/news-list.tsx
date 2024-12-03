import { type NewsItem } from 'src/types/news'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import { mainFormatDate } from 'src/helpers/utils'
import { useDeleteNewsByIdMutation, useGetAllNewsQuery } from 'src/store/news/news.api'
import { useTableSearch } from 'src/hooks/table-search/table-search'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { Loader } from 'src/components/loader/loader'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { GridRow } from 'src/components/grid-row/grid-row'
import { TableSearchInput } from 'src/modules/table-search-input/table-search'
import { MainCheckBox } from 'src/UI/MainCheckBox/MainCheckBox'
import { CheckMarkSvg } from 'src/UI/icons/checkMarkSVG'

import styles from './index.module.scss'

export const NewsList = () => {
	const { handleSearch, searchParams } = useTableSearch(['title', 'tags', 'date'])
	const { data: news, isLoading } = useGetAllNewsQuery({ search: searchParams.title })
	console.log(news)
	const [deleteNewsById] = useDeleteNewsByIdMutation()

	const navigate = useNavigate()

	const tableTitles = ['Наименование', 'Дата', 'Теги', 'Ключевая', '']
	const formatObjectsTableData = (newsData: NewsItem[]) => {
		return newsData.map((newsEl) => {
			return {
				rowId: newsEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': newsEl.isHidden }, styles.titleNewsTable)} key='0'>
						{newsEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': newsEl.isHidden })} key='1'>
						{mainFormatDate(newsEl.date)}
					</p>,
					<p className={cn({ 'hidden-cell': newsEl.isHidden })} key='2'>
						{newsEl.tags.join(', ')}
					</p>,
					<MainCheckBox key='3' checked={newsEl.isKey} svgNode={<CheckMarkSvg />} />,
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
		console.log(id + 'спрятан')
	}

	if (isLoading || !news) return <Loader />

	return (
		<>
			<h3>Новости</h3>
			<div>
				<GridRow $margin='0 0 15px 0' $padding='0 29px' className={styles.searchRow}>
					<TableSearchInput
						handleSearch={(val) => handleSearch('title', val)}
						placeholder='искать по наименованию'
					/>
					<TableSearchInput
						handleSearch={(val) => handleSearch('date', val)}
						placeholder='дата'
						$variant='date'
						mask={Date}
					/>
					<TableSearchInput
						handleSearch={(val) => handleSearch('tags', val)}
						placeholder='искать по тегам'
					/>
				</GridRow>
				<CustomTable
					className={styles.newsTable}
					rowData={formatObjectsTableData(news)}
					colTitles={tableTitles}
				/>
				<TableFooter
					totalElements={news.length}
					addClickHandler={() => navigate('/news/news-list')}
					addText='Добавить новость'
				/>
			</div>
		</>
	)
}
