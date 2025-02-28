import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'
import { type PartnersItem } from 'src/types/objects'
import { useTableSearch } from 'src/hooks/table-search/table-search'
import { useGetAllPartnersQuery } from 'src/store/partners/partners.api'
import { TableFiltration } from 'src/modules/table-filtration/table-filtration'

import { GridRow } from 'src/components/grid-row/grid-row'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { ObjectsElementsFiltrationInputs } from './consts'

import { Loader } from 'src/components/loader/loader'

import styles from './index.module.scss'

export const PartnersElements: FC = () => {
	const { handleSearch, searchParams } = useTableSearch(['title', 'typeOrg', 'typePart'])

	const { data, isLoading } = useGetAllPartnersQuery()

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
					<p className={cn({ 'hidden-cell-icon': partnerEl.isHidden })} key='0'>
						{partnerEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': partnerEl.isHidden })} key='1'>
						{partnerEl.events}
					</p>,
					<p className={cn({ 'hidden-cell': partnerEl.isHidden })} key='3'>
						{partnerEl.organizationType}
					</p>,
					<p className={cn({ 'hidden-cell': partnerEl.isHidden })} key='4'>
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

	if (isLoading || !data?.partners) return <Loader />

	return (
		<div>
			<GridRow $margin='0 0 15px 0' $padding='0 29px' className={styles.searchRow}>
				<TableFiltration filterInputs={ObjectsElementsFiltrationInputs} />
			</GridRow>
			<CustomTable
				className={styles.objectTable}
				rowData={formatObjectsTableData(data.partners ?? [])}
				colTitles={tableTitles}
				rowClickHandler={rowClickHandler}
			/>
			<TableFooter
				totalElements={data.partners.length}
				addClickHandler={() => navigate('/')}
				addText='Добавить объект'
			/>
		</div>
	)
}
