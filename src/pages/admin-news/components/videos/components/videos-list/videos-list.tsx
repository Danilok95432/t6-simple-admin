import { type VideoItem } from 'src/types/videos'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import { mainFormatDate } from 'src/helpers/utils'
import { useDeleteVideoByIdMutation, useGetAllVideosQuery } from 'src/store/videos/videos.api'
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

export const VideosList = () => {
	const { handleSearch, searchParams } = useTableSearch(['title', 'tags', 'date'])
	const { data: videos, isLoading } = useGetAllVideosQuery({ search: searchParams.title })
	const [deleteVideoById] = useDeleteVideoByIdMutation()

	const navigate = useNavigate()

	const tableTitles = ['Наименование', 'Дата', 'Теги', 'Ключевая', '']
	const formatObjectsTableData = (videosData: VideoItem[]) => {
		return videosData.map((videosEl) => {
			return {
				rowId: videosEl.id,
				cells: [
					<p
						className={cn({ 'hidden-cell-icon': videosEl.isHidden }, styles.titleVideosTable)}
						key='0'
					>
						{videosEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': videosEl.isHidden })} key='1'>
						{mainFormatDate(videosEl.date)}
					</p>,
					<p className={cn({ 'hidden-cell': videosEl.isHidden })} key='2'>
						{videosEl.tags.join(', ')}
					</p>,
					<MainCheckBox
						key='3'
						checked={videosEl.isKey}
						svgNode={<CheckMarkSvg />}
						className={styles.checkBoxWrapperVideos}
					/>,
					<RowController
						id={videosEl.id}
						hideHandler={rowHideHandler}
						removeHandler={rowDeleteHandler}
						textOfHidden='Спрятать видео'
						key='4'
					/>,
				],
			}
		})
	}

	const rowDeleteHandler = async (videoId: string) => {
		await deleteVideoById(videoId)
	}

	const rowHideHandler = async (id: string) => {
		console.log(id + 'спрятан')
	}

	if (isLoading || !videos) return <Loader />

	return (
		<>
			<h3>Видеолента</h3>
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
					className={styles.videosTable}
					rowData={formatObjectsTableData(videos)}
					colTitles={tableTitles}
				/>
				<TableFooter
					totalElements={videos.length}
					addClickHandler={() => navigate('/news/videos-list/new')}
					addText='Добавить видео'
				/>
			</div>
		</>
	)
}
