import { type NewsItem } from 'src/types/news'

import { useState } from 'react'

import { useDebounce } from 'src/hooks/debounce/debounce'
import { TableSearch } from 'src/modules/table-search/table-search'
import { Loader } from 'src/components/loader/loader'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { useDeleteNewsByIdMutation, useGetAllNewsQuery } from 'src/store/news/news.api'

import { AdminSearchIconSvg } from 'src/UI/icons/adminSearchIconSVG'
import { AdminDateIconSvg } from 'src/UI/icons/adminDateIconSVG'

import cnBind from 'classnames/bind'

import { Pagination } from 'src/components/pagination/pagination'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { mainFormatDate } from 'src/helpers/utils'

export const NewsTable = () => {
	const cx = cnBind.bind(styles)

	const [searchNews, setSearchNews] = useState<string>('')
	const [deleteNewsById] = useDeleteNewsByIdMutation()
	const debouncedSearch = useDebounce(searchNews)

	const { data: newsList, isLoading } = useGetAllNewsQuery({ search: debouncedSearch })

	const searchNewsHandler = (value: string) => {
		setSearchNews(value)
	}

	const tableTitles = [
		'№',
		<TableSearch
			wrapperClassName={styles.newsSearchWrapper}
			key={1}
			handleSearch={searchNewsHandler}
			placeholder='искать по наименованию'
		/>,
		<TableSearch
			wrapperClassName={styles.newsSearchWrapper}
			key={2}
			handleSearch={searchNewsHandler}
			placeholder='дата'
		/>,
		<TableSearch
			wrapperClassName={styles.newsSearchWrapper}
			key={3}
			handleSearch={searchNewsHandler}
			placeholder='искать по тегам'
		/>,
		'Спрятать',
		'Ключевая',
		'',
	]

	const formatNewsTableData = (newsData: NewsItem[]) => {
		return newsData.map((newsEl, idx) => {
			return [
				String(idx + 1),
				<a className={cx({ _hidden: newsEl.hidden })} key={newsEl.id} href='#'>
					{newsEl.title}
				</a>,
				mainFormatDate(newsEl.date, 'yyyy-MM-dd'),
				<span key={newsEl.id}>{newsEl.tags.join(', ')}</span>,
				<input key={newsEl.id} type='checkbox' defaultChecked={newsEl.hidden} />,
				<input key={newsEl.id} type='checkbox' defaultChecked={newsEl.main} />,
				<button
					className={styles.removeNewsBtn}
					onClick={async () => await deleteNewsById(newsEl.id)}
					key={newsEl.id}
					type='button'
				>
					Удалить
				</button>,
			]
		})
	}

	if (isLoading || !newsList) return <Loader />

	return (
		<>
			<CustomTable
				className={styles.newsTable}
				cellsData={formatNewsTableData(newsList)}
				colTitles={tableTitles}
			/>
			<Pagination
				className={adminStyles.adminTablePagination}
				activeCountClass={adminStyles.activeCount}
				pagesCount={5}
				activePage={1}
			/>
		</>
	)
}
