import { type FC } from 'react'
import { type EventItem } from 'src/types/events'

import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { Loader } from 'src/components/loader/loader'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { GridRow } from 'src/components/grid-row/grid-row'
import { TableSearchInput } from 'src/modules/table-search-input/table-search'
import { useDeleteEventByIdMutation, useGetAllEventsQuery } from 'src/store/events/events.api'
import { useTableSearch } from 'src/hooks/table-search/table-search'
import { mainFormatDate } from 'src/helpers/utils'

import styles from './index.module.scss'

export const EventsTable: FC = () => {
	const { handleSearch, searchParams } = useTableSearch([
		'title',
		'dateStart',
		'dateEnd',
		'location',
	])
	const { data: events, isLoading } = useGetAllEventsQuery({ search: searchParams.title })

	const [deleteEventById] = useDeleteEventByIdMutation()

	const navigate = useNavigate()

	const tableTitles = ['Наименование события', 'Начало', 'Окончание', 'Объект кластера', '']
	const formatEventsTableData = (eventsData: EventItem[]) => {
		return eventsData.map((eventEl) => {
			return {
				rowId: eventEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': eventEl.isHidden })} key='0'>
						{eventEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': eventEl.isHidden })} key='1'>
						{mainFormatDate(eventEl.dates[0])}
					</p>,
					<p className={cn({ 'hidden-cell': eventEl.isHidden })} key='2'>
						{mainFormatDate(eventEl.dates[1])}
					</p>,
					<p className={cn({ 'hidden-cell': eventEl.isHidden })} key='3'>
						{eventEl.object}
					</p>,
					<RowController
						id={eventEl.id}
						hideHandler={rowHideHandler}
						removeHandler={rowDeleteHandler}
						textOfHidden='Скрыть событие'
						key='4'
					/>,
				],
			}
		})
	}

	const rowDeleteHandler = async (id: string) => {
		await deleteEventById(id)
	}
	const rowHideHandler = async (id: string) => {
		console.log(id + 'спрятан')
	}

	const rowClickHandler = (id: string) => {
		navigate(`/event/event-profile/${id}`)
	}

	if (isLoading || !events) return <Loader />

	return (
		<div>
			<GridRow $margin='0 0 15px 0' $padding='0 29px' className={styles.searchRow}>
				<TableSearchInput
					handleSearch={(val) => handleSearch('title', val)}
					placeholder='искать по наименованию'
				/>
				<TableSearchInput
					handleSearch={(val) => handleSearch('dateStart', val)}
					placeholder='начало'
					$variant='date'
				/>
				<TableSearchInput
					handleSearch={(val) => handleSearch('dateEnd', val)}
					placeholder='окончание'
					$variant='date'
				/>
				<TableSearchInput
					handleSearch={(val) => handleSearch('location', val)}
					placeholder='место проведения'
				/>
			</GridRow>
			<CustomTable
				className={styles.eventsTable}
				rowData={formatEventsTableData(events)}
				colTitles={tableTitles}
				rowClickHandler={rowClickHandler}
			/>
			<TableFooter
				totalElements={events.length}
				addClickHandler={() => navigate('/event/event-profile/new')}
				addText='Добавить событие'
			/>
		</div>
	)
}
