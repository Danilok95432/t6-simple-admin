import { type CultureElement } from 'src/types/culture'
import { useNavigate } from 'react-router-dom'
import { type FC } from 'react'
import cn from 'classnames'
import {
	useDeleteCultureByIdMutation,
	useGetAllCulturesQuery,
} from 'src/store/cultures/cultures.api'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { mainFormatDate } from 'src/helpers/utils'
import { Loader } from 'src/components/loader/loader'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { GridRow } from 'src/components/grid-row/grid-row'
import { TableSearchInput } from 'src/modules/table-search-input/table-search'
import { useTableSearch } from 'src/hooks/table-search/table-search'

import styles from './index.module.scss'

export const CultureElements: FC = () => {
	const { data: cultures, isLoading } = useGetAllCulturesQuery({ search: '' })

	const [deleteCulturesById] = useDeleteCultureByIdMutation()

	const navigate = useNavigate()

	const { handleSearch } = useTableSearch(['title', 'date', 'level', 'region'])

	const tableTitles = [
		'Наименование элемента',
		'Размещено',
		'Уровень',
		'Регион',
		'Отдельный сайт',
		'',
	]
	const formatCulturesTableData = (culturesData: CultureElement[]) => {
		return culturesData.map((cultureEl) => {
			return {
				rowId: cultureEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': cultureEl.isHidden })} key='0'>
						{cultureEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': cultureEl.isHidden })} key='1'>
						{mainFormatDate(cultureEl.assemblyDate)}
					</p>,
					<p className={cn({ 'hidden-cell': cultureEl.isHidden })} key='2'>
						{cultureEl.level}
					</p>,
					<p className={cn({ 'hidden-cell': cultureEl.isHidden })} key='3'>
						{cultureEl.region}
					</p>,
					cultureEl.site ? (
						<a
							className={cn({ 'hidden-cell': cultureEl.isHidden }, styles.cultureTableLink)}
							href={cultureEl.site}
							key='4'
						>
							{cultureEl.site}
						</a>
					) : (
						<p key='4' className={cn({ 'hidden-cell': cultureEl.isHidden })}>
							нет сайта
						</p>
					),
					<RowController
						id={cultureEl.id}
						hideHandler={rowHideHandler}
						removeHandler={rowDeleteHandler}
						textOfHidden='Скрыть направление'
						key='5'
					/>,
				],
			}
		})
	}

	const rowDeleteHandler = async (id: string) => {
		await deleteCulturesById(id)
	}
	const rowHideHandler = async (id: string) => {
		console.log(id + 'спрятан')
	}

	const rowClickHandler = (id: string) => {
		navigate(`/culture/culture-info/${id}`)
	}

	if (isLoading || !cultures) return <Loader />

	return (
		<div>
			<GridRow $margin='0 0 15px 0' className={styles.searchRow}>
				<TableSearchInput
					handleSearch={(val) => handleSearch('title', val)}
					placeholder='искать по наименованию'
				/>
				<TableSearchInput
					handleSearch={(val) => handleSearch('date', val)}
					placeholder='размещено'
					$variant='date'
					mask={Date}
				/>
				<TableSearchInput
					handleSearch={(val) => handleSearch('level', val)}
					placeholder='уровень'
				/>
				<TableSearchInput
					handleSearch={(val) => handleSearch('region', val)}
					placeholder='регион'
				/>
			</GridRow>
			<CustomTable
				className={styles.cultureTable}
				rowData={formatCulturesTableData(cultures)}
				colTitles={tableTitles}
				rowClickHandler={rowClickHandler}
			/>
			<TableFooter
				totalElements={cultures.length}
				addClickHandler={() => navigate('/culture/culture-info/new')}
				addText='Добавить элемент'
			/>
		</div>
	)
}
