import { type ReactNode } from 'react'
import { type RequestItem } from 'src/types/requests'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import { mainFormatDate } from 'src/helpers/utils'
import {
	useDeleteRequestByIdMutation,
	useGetAllRequestsQuery,
} from 'src/store/requests/requests.api'
import { useTableSearch } from 'src/hooks/table-search/table-search'
import { useCheckboxChange } from 'src/hooks/checkbox-change/checkbox-change'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { Loader } from 'src/components/loader/loader'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { GridRow } from 'src/components/grid-row/grid-row'
import { TableSearchInput } from 'src/modules/table-search-input/table-search'
import { MainCheckBox } from 'src/UI/MainCheckBox/MainCheckBox'
import { RequestStatusPlacedSVG } from 'src/UI/icons/requestStatusPlacedSVG'
import { RequestStatusPendingSVG } from 'src/UI/icons/requestStatusPendingSVG'
import { RequestStatusRejectedSVG } from 'src/UI/icons/requestStatusRejectedSVG'

import styles from './index.module.scss'

export const RequestsList = () => {
	const { handleSearch, searchParams } = useTableSearch(['title', 'source', 'date'])
	const { handleCheckboxChange, exceptStatus } = useCheckboxChange()

	const { data: requests, isLoading } = useGetAllRequestsQuery({
		search: searchParams.title,
		exceptStatus,
	})
	const [deleteRequestById] = useDeleteRequestByIdMutation()

	const navigate = useNavigate()

	const tableTitles = ['Наименование', 'Тип заявки', 'Статус', 'Дата', 'Источник', '']
	const formatObjectsTableData = (requestsData: RequestItem[]) => {
		return requestsData.map((requestEl) => {
			let statusIcon: ReactNode = null
			switch (requestEl.status) {
				case 'размещена':
					statusIcon = <RequestStatusPlacedSVG />
					break
				case 'отложена':
					statusIcon = <RequestStatusPendingSVG />
					break
				case 'отклонена':
					statusIcon = <RequestStatusRejectedSVG />
					break
				default:
					statusIcon = null
					break
			}
			return {
				rowId: requestEl.id,
				cells: [
					<p
						className={cn({ 'hidden-cell-icon': requestEl.isHidden }, styles.titleRequestsTable)}
						key='0'
					>
						{requestEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': requestEl.isHidden })} key='1'>
						{requestEl.type}
					</p>,
					<p className={cn({ 'hidden-cell': requestEl.isHidden }, styles.statusRequest)} key='2'>
						{statusIcon}
						{requestEl.status}
					</p>,
					<p className={cn({ 'hidden-cell': requestEl.isHidden })} key='3'>
						{mainFormatDate(requestEl.date)}
					</p>,
					<p className={cn({ 'hidden-cell': requestEl.isHidden })} key='4'>
						{requestEl.source}
					</p>,
					<RowController
						id={requestEl.id}
						hideHandler={rowHideHandler}
						removeHandler={rowDeleteHandler}
						textOfHidden='Спрятать заявку'
						key='5'
					/>,
				],
			}
		})
	}

	const rowDeleteHandler = async (requestId: string) => {
		await deleteRequestById(requestId)
	}

	const rowHideHandler = async (id: string) => {
		console.log(id + 'спрятан')
	}

	if (isLoading || !requests) return <Loader />

	return (
		<>
			<h3>Заявки</h3>
			<div>
				<GridRow
					$alignItems='center'
					$margin='0 0 15px 0'
					$padding='0 29px'
					className={styles.searchRow}
				>
					<TableSearchInput
						handleSearch={(val) => handleSearch('title', val)}
						placeholder='искать по наименованию'
					/>
					<TableSearchInput
						handleSearch={(val) => handleSearch('source', val)}
						placeholder='искать по источнику'
					/>
					<TableSearchInput
						handleSearch={(val) => handleSearch('date', val)}
						placeholder='дата'
						$variant='date'
						mask={Date}
					/>
					<MainCheckBox
						className={styles.checkBoxWrapperRequest}
						checked={false}
						label='Скрыть размещенные'
						handleChange={(active: boolean) => handleCheckboxChange('размещена', active)}
					/>
					<MainCheckBox
						checked={false}
						label='Скрыть отклоненные'
						handleChange={(active: boolean) => handleCheckboxChange('отклонена', active)}
					/>
					<MainCheckBox
						checked={false}
						label='Скрыть отложенные'
						handleChange={(active: boolean) => handleCheckboxChange('отложена', active)}
					/>
				</GridRow>
				<CustomTable
					className={styles.requestsTable}
					rowData={formatObjectsTableData(requests)}
					colTitles={tableTitles}
				/>
				<TableFooter
					totalElements={requests.length}
					addClickHandler={() => navigate('/news/requests-list')}
					addText='Подать заявку'
				/>
			</div>
		</>
	)
}
