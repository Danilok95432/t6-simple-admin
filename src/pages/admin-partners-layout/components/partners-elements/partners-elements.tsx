import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'
import { type PartnersItem } from 'src/types/objects'

import { GridRow } from 'src/components/grid-row/grid-row'
import { TableFiltration } from 'src/modules/table-filtration/table-filtration'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'

import { PartnersElementsFiltrationInputs } from './const'

import styles from './index.module.scss'

export const PartnersElements: FC = () => {
	// mockData
	const objectsDataResponse = [
		{
			id: '1',
			hidden: false,
			title: 'ООО МЦАИ',
			events: '3',
			organizationType: 'наука',
			partnershipType: 'со-организатор, партнер событий',
			priority: '3',
		},
	]

	const navigate = useNavigate()
	const tableTitles = [
		'Наименование',
		'События',
		'Вид организации',
		'Тип партнерства',
		'Очередность',
		'',
	]
	const formatObjectsTableData = (partnersData: PartnersItem[]) => {
		return partnersData.map((partnerEl) => {
			return {
				rowId: partnerEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': partnerEl.hidden })} key='0'>
						{partnerEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': partnerEl.hidden })} key='1'>
						{partnerEl.events}
					</p>,
					<p className={cn({ 'hidden-cell': partnerEl.hidden })} key='3'>
						{partnerEl.organizationType}
					</p>,
					<p className={cn({ 'hidden-cell': partnerEl.hidden })} key='4'>
						{partnerEl.partnershipType}
					</p>,
					<input
						className={cn({ 'hidden-cell': partnerEl.hidden }, styles.priorityBox)}
						key='5'
						type='text'
						value={partnerEl.priority}
						onChange={(e) =>
							console.log(
								`очередность партнера с id ${partnerEl.id} изменена на значение ${e.target.value}`,
							)
						}
						onClick={(e) => e.stopPropagation()}
					/>,
					<RowController
						id={partnerEl.id}
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
		console.log(id)
		// await deleteObjectById(id)
	}
	const rowHideHandler = async (id: string) => {
		console.log(id)
		// await hideObjectById(id)
	}

	const rowClickHandler = (id: string) => {
		navigate(`/partners/partner/${id}`)
	}

	return (
		<div>
			<GridRow $margin='0 0 15px 0' $padding='0 29px' className={styles.searchRow}>
				<TableFiltration filterInputs={PartnersElementsFiltrationInputs} />
			</GridRow>
			<CustomTable
				className={styles.objectTable}
				rowData={formatObjectsTableData(objectsDataResponse)}
				colTitles={tableTitles}
				rowClickHandler={rowClickHandler}
			/>
			<TableFooter
				totalElements={objectsDataResponse.length}
				addClickHandler={() => navigate('/')}
				addText='Добавить объект'
			/>
		</div>
	)
}
