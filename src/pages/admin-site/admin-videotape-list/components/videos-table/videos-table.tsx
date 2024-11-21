// import { type NewsVideoItem } from 'src/types/news'
//
// import { useState } from 'react'
// import cnBind from 'classnames/bind'
//
// import { mainFormatDate } from 'src/helpers/utils'
// import { useDebounce } from 'src/hooks/debounce/debounce'
// import { TableSearch } from 'src/modules/table-search/table-search'
// import { Loader } from 'src/components/loader/loader'
// import { CustomTable } from 'src/components/custom-table/custom-table'
// import { useDeleteNewsVideoByIdMutation, useGetAllNewsVideosQuery } from 'src/store/news/news.api'
//
// import { Pagination } from 'src/components/pagination/pagination'
//
// import adminStyles from 'src/routes/admin-layout/index.module.scss'
// import styles from './index.module.scss'
//
// export const VideosTable = () => {
// 	const cx = cnBind.bind(styles)
//
// 	const [searchNewsVideo, setSearchNewsVideo] = useState<string>('')
// 	const [deleteNewsVideoById] = useDeleteNewsVideoByIdMutation()
// 	const debouncedSearch = useDebounce(searchNewsVideo)
//
// 	const { data: newsVideosList, isLoading } = useGetAllNewsVideosQuery({ search: debouncedSearch })
//
// 	const searchNewsHandler = (value: string) => {
// 		setSearchNewsVideo(value)
// 	}
//
// 	const tableTitles = [
// 		'№',
// 		<TableSearch
// 			wrapperClassName={styles.videosSearchWrapper}
// 			key={1}
// 			handleSearch={searchNewsHandler}
// 			placeholder='искать по наименованию'
// 		/>,
// 		<TableSearch
// 			wrapperClassName={styles.videosSearchWrapper}
// 			key={2}
// 			handleSearch={searchNewsHandler}
// 			placeholder='дата'
// 		/>,
// 		<TableSearch
// 			wrapperClassName={styles.videosSearchWrapper}
// 			key={3}
// 			handleSearch={searchNewsHandler}
// 			placeholder='искать по тегам'
// 		/>,
// 		'Спрятать',
// 		'Ключевая',
// 		'',
// 	]
//
// 	const formatVideosTableData = (newsVideoData: NewsVideoItem[]) => {
// 		return newsVideoData.map((newsVideoEl, idx) => {
// 			return [
// 				String(idx + 1),
// 				<a className={cx({ _hidden: newsVideoEl.hidden })} key={newsVideoEl.id} href='#'>
// 					{newsVideoEl.title}
// 				</a>,
// 				mainFormatDate(newsVideoEl.date, 'yyyy-MM-dd'),
// 				<span key={newsVideoEl.id}>{newsVideoEl.tags.join(', ')}</span>,
// 				<input key={newsVideoEl.id} type='checkbox' defaultChecked={newsVideoEl.hidden} />,
// 				<input key={newsVideoEl.id} type='checkbox' defaultChecked={newsVideoEl.main} />,
// 				<button
// 					className={styles.removeVideosBtn}
// 					onClick={async () => await deleteNewsVideoById(newsVideoEl.id)}
// 					key={newsVideoEl.id}
// 					type='button'
// 				>
// 					Удалить
// 				</button>,
// 			]
// 		})
// 	}
//
// 	if (isLoading || !newsVideosList) return <Loader />
//
// 	return (
// 		<>
// 			<CustomTable
// 				className={styles.videosTable}
// 				cellsData={formatVideosTableData(newsVideosList)}
// 				colTitles={tableTitles}
// 			/>
// 			<Pagination
// 				className={adminStyles.adminTablePagination}
// 				activeCountClass={adminStyles.activeCount}
// 				pagesCount={5}
// 				activePage={1}
// 			/>
// 		</>
// 	)
// }
