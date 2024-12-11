import { type ObjectItem } from 'src/types/objects'
import { useNavigate } from 'react-router-dom'
import { type FC } from 'react'
import cn from 'classnames'

import { useDeleteObjectByIdMutation, useGetAllObjectsQuery } from 'src/store/objects/objects.api'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { Loader } from 'src/components/loader/loader'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { GridRow } from 'src/components/grid-row/grid-row'
import { TableSearchInput } from 'src/modules/table-search-input/table-search'
import { useTableSearch } from 'src/hooks/table-search/table-search'

import styles from './index.module.scss'

export const ObjectElements: FC = () => {
	const { handleSearch } = useTableSearch(['title', 'type', 'relation'])

	const { data: objectsDataResponse, isLoading } = useGetAllObjectsQuery(null)
	const [deleteObjectById] = useDeleteObjectByIdMutation()
	const navigate = useNavigate()

	const tableTitles = ['Наименование', 'Тип объекта', 'Принадлежность', '']
	const formatObjectsTableData = (objectsData: ObjectItem[]) => {
		return objectsData.map((objectEl) => {
			return {
				rowId: objectEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': objectEl.hidden })} key='0'>
						{objectEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': objectEl.hidden })} key='1'>
						{objectEl.object_type_name}
					</p>,
					<p className={cn({ 'hidden-cell': objectEl.hidden })} key='2'>
						{objectEl.object_apply_name}
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

	if (isLoading || !objectsDataResponse?.objects) return <Loader />

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
				rowData={formatObjectsTableData(objectsDataResponse.objects)}
				colTitles={tableTitles}
				rowClickHandler={rowClickHandler}
			/>
			<TableFooter
				totalElements={objectsDataResponse.objects.length}
				addClickHandler={() => navigate('/object/object-info/new')}
				addText='Добавить объект'
			/>
		</div>
	)
}
