import { type ObjectEvents } from 'src/types/objects'
import { useParams } from 'react-router-dom'
import { type FC } from 'react'
import cn from 'classnames'

import { mainFormatDate } from 'src/helpers/utils'
import {
	useDeleteObjectEventsByIdMutation,
	useGetEventsByObjectIdQuery,
} from 'src/store/objects/objects.api'
import { useTableSearch } from 'src/hooks/table-search/table-search'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { Loader } from 'src/components/loader/loader'
import { RowController } from 'src/components/row-controller/row-controller'
import { GridRow } from 'src/components/grid-row/grid-row'
import { TableSearchInput } from 'src/modules/table-search-input/table-search'

import styles from './index.module.scss'

export const EventElements: FC = () => {
	const { id } = useParams()

	const { handleSearch, searchParams } = useTableSearch([
		'title',
		'typeEvent',
		'typePart',
		'startDate',
		'endDate',
	])
	const { data: events, isLoading } = useGetEventsByObjectIdQuery({
		id,
		search: searchParams.title,
	})

	const [deleteEventById] = useDeleteObjectEventsByIdMutation()

	const tableTitles = ['Наименование', 'Тип события', 'Тип участия', 'Начало', 'Окончание', '']
	const formatObjectsTableData = (eventsData: ObjectEvents[]) => {
		return eventsData.map((eventsEl) => {
			return {
				rowId: eventsEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': eventsEl.isHidden })} key='0'>
						{eventsEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': eventsEl.isHidden })} key='1'>
						{eventsEl.typeEvent}
					</p>,
					<p className={cn({ 'hidden-cell': eventsEl.isHidden })} key='2'>
						{eventsEl.typePart}
					</p>,
					<p className={cn({ 'hidden-cell': eventsEl.isHidden })} key='3'>
						{mainFormatDate(eventsEl.startDate)}
					</p>,
					<p className={cn({ 'hidden-cell': eventsEl.isHidden })} key='4'>
						{mainFormatDate(eventsEl.endDate)}
					</p>,
					<RowController
						id={eventsEl.id}
						hideHandler={rowHideHandler}
						removeHandler={rowDeleteHandler}
						textOfHidden='Скрыть направление'
						key='5'
					/>,
				],
			}
		})
	}

	const rowDeleteHandler = async (eventId: string) => {
		await deleteEventById({ objectId: id ?? '', eventId })
	}

	const rowHideHandler = async (id: string) => {
		console.log(id + 'спрятан')
	}

	if (isLoading || !events) return <Loader />

	return (
		<div>
			<GridRow
				$margin='0 0 15px 0'
				$padding='0 29px'
				$template='auto /   minmax(300px, 2.2fr)
        minmax(130px, 1.1fr)
        minmax(130px, 1.3fr)
        minmax(100px, 0.6fr)
        minmax(120px, 0.6fr)
        minmax(50px, 0.2fr)'
			>
				<TableSearchInput
					handleSearch={(val) => handleSearch('title', val)}
					placeholder='искать по наименованию события'
				/>
				<TableSearchInput
					handleSearch={(val) => handleSearch('typeEvent', val)}
					placeholder='тип события'
				/>
				<TableSearchInput
					handleSearch={(val) => handleSearch('typePart', val)}
					placeholder='тип участия'
				/>
				<TableSearchInput
					handleSearch={(val) => handleSearch('startDate', val)}
					placeholder='начало'
					$variant='date'
					mask={Date}
				/>
				<TableSearchInput
					handleSearch={(val) => handleSearch('endDate', val)}
					placeholder='окончание'
					$variant='date'
					mask={Date}
				/>
			</GridRow>
			<CustomTable
				className={styles.eventsTable}
				rowData={formatObjectsTableData(events)}
				colTitles={tableTitles}
			/>
		</div>
	)
}
