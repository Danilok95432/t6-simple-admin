import { type EventPartners } from 'src/types/events'
import { useNavigate, useParams } from 'react-router-dom'
import cn from 'classnames'

import {
	useDeleteEventPartnerByIdMutation,
	useGetPartnersByEventIdQuery,
} from 'src/store/events/events.api'
import { useTableSearch } from 'src/hooks/table-search/table-search'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { Loader } from 'src/components/loader/loader'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { GridRow } from 'src/components/grid-row/grid-row'
import { TableSearchInput } from 'src/modules/table-search-input/table-search'

import styles from './index.module.scss'

export const PartnerElements = () => {
	const { id } = useParams()

	const { handleSearch, searchParams } = useTableSearch(['title', 'typeOrg', 'typePart'])
	const { data: partners, isLoading } = useGetPartnersByEventIdQuery({
		id,
		search: searchParams.title,
	})

	const [deletePartnerById] = useDeleteEventPartnerByIdMutation()

	const navigate = useNavigate()

	const tableTitles = ['Наименование', 'Вид организации', 'Тип партнерства', 'Очередность', '']
	const formatObjectsTableData = (partnersData: EventPartners[]) => {
		return partnersData.map((partnersEl) => {
			return {
				rowId: partnersEl.id,
				cells: [
					<p
						className={cn({ 'hidden-cell-icon': partnersEl.isHidden }, styles.titlePartnersTable)}
						key='0'
					>
						{partnersEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': partnersEl.isHidden })} key='1'>
						{partnersEl.typeOrg}
					</p>,
					<p className={cn({ 'hidden-cell': partnersEl.isHidden })} key='2'>
						{partnersEl.typePart.join(', ')}
					</p>,
					<p className={cn({ 'hidden-cell': partnersEl.isHidden }, styles.priorityBox)} key='3'>
						{partnersEl.priority}
					</p>,
					<RowController
						id={partnersEl.id}
						hideHandler={rowHideHandler}
						removeHandler={rowDeleteHandler}
						textOfHidden='Скрыть партнера'
						key='4'
					/>,
				],
			}
		})
	}

	const rowDeleteHandler = async (partnerId: string) => {
		await deletePartnerById({ eventId: id ?? '', partnerId })
	}

	const rowHideHandler = async (id: string) => {
		console.log(id + 'спрятан')
	}

	if (isLoading || !partners) return <Loader />

	return (
		<>
			<div>
				<GridRow $margin='0 0 15px 0' $padding='0 29px' className={styles.searchRow}>
					<TableSearchInput
						handleSearch={(val) => handleSearch('title', val)}
						placeholder='искать по наименованию'
					/>
					<TableSearchInput
						handleSearch={(val) => handleSearch('typeOrg', val)}
						placeholder='искать по виду организации'
					/>
					<TableSearchInput
						handleSearch={(val) => handleSearch('typePart', val)}
						placeholder='искать по типу партнерства'
					/>
				</GridRow>
				<CustomTable
					className={styles.partnersTable}
					rowData={formatObjectsTableData(partners)}
					colTitles={tableTitles}
				/>
				<TableFooter
					totalElements={partners.length}
					addClickHandler={() => navigate('/events/event-info/new')}
					addText='Добавить партнера'
				/>
			</div>
		</>
	)
}
