import { type ObjectItem } from 'src/types/objects'
import { useNavigate } from 'react-router-dom'
import { type FC } from 'react'
import cn from 'classnames'

import { useDeleteObjectByIdMutation, useGetAllObjectsQuery } from 'src/store/objects/objects.api'
import { useTableSearch } from 'src/hooks/table-search/table-search'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { Loader } from 'src/components/loader/loader'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { GridRow } from 'src/components/grid-row/grid-row'
import { TableSearchInput } from 'src/modules/table-search-input/table-search'

import styles from './index.module.scss'

export const ObjectElements: FC = () => {
	const { handleSearch, searchParams } = useTableSearch(['title', 'type', 'relation'])

	const { data: objects, isLoading } = useGetAllObjectsQuery({ search: searchParams.title })
	const [deleteObjectById] = useDeleteObjectByIdMutation()
	const navigate = useNavigate()

	const tableTitles = ['Наименование', 'Тип объекта', 'Принадлежность', '']
	const formatObjectsTableData = (objectsData: ObjectItem[]) => {
		return objectsData.map((objectEl) => {
			return {
				rowId: objectEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': objectEl.isHidden })} key='0'>
						{objectEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': objectEl.isHidden })} key='1'>
						{objectEl.type}
					</p>,
					<p className={cn({ 'hidden-cell': objectEl.isHidden })} key='2'>
						{objectEl.relation}
					</p>,
					<RowController
						id={objectEl.id}
						hideHandler={rowHideHandler}
						removeHandler={rowDeleteHandler}
						textOfHidden='Скрыть событие'
						key='3'
					/>,
				],
			}
		})
	}

	const rowDeleteHandler = async (id: string) => {
		await deleteObjectById(id)
	}
	const rowHideHandler = async (id: string) => {
		console.log(id + 'спрятан')
	}

	const rowClickHandler = (id: string) => {
		navigate(`/object/object-info/${id}`)
	}

	if (isLoading || !objects) return <Loader />

	return (
		<div>
			<GridRow $margin='0 0 15px 0' $padding='0 29px' className={styles.searchRow}>
				<TableSearchInput
					handleSearch={(val) => handleSearch('title', val)}
					placeholder='искать по наименованию'
				/>
				<TableSearchInput
					handleSearch={(val) => handleSearch('type', val)}
					placeholder='тип объекта'
				/>
				<TableSearchInput
					handleSearch={(val) => handleSearch('relation', val)}
					placeholder='принадлежность'
				/>
			</GridRow>
			<CustomTable
				className={styles.objectTable}
				rowData={formatObjectsTableData(objects)}
				colTitles={tableTitles}
				rowClickHandler={rowClickHandler}
			/>
			<TableFooter
				totalElements={objects.length}
				addClickHandler={() => navigate('/object/object-info/new')}
				addText='Добавить объект'
			/>
		</div>
	)
}
