import { type CultureItem } from 'src/types/community'
import { useNavigate } from 'react-router-dom'
import { type FC } from 'react'
import cn from 'classnames'

import {
	useDeleteCultureByIdMutation,
	useHideCultureByIdMutation,
} from 'src/store/community/community.api'
import { useGetNewIdCultureQuery } from 'src/store/cultures/cultures.api'
import { TableFiltration } from 'src/modules/table-filtration/table-filtration'
import { CultureElementsFiltrationInputs } from './consts'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { mainFormatDate } from 'src/helpers/utils'
import { Loader } from 'src/components/loader/loader'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { GridRow } from 'src/components/grid-row/grid-row'

import styles from './index.module.scss'

type CultureElementsProps = {
	cultures?: CultureItem[]
}

export const CultureElements: FC<CultureElementsProps> = ({ cultures = [] }) => {
	const { refetch: getNewId } = useGetNewIdCultureQuery(null)
	const [hideCulturesById] = useHideCultureByIdMutation()
	const [deleteCulturesById] = useDeleteCultureByIdMutation()

	const navigate = useNavigate()

	const addCulture = async () => {
		const newIdResponse = await getNewId().unwrap()
		return newIdResponse.id
	}

	const tableTitles = ['Наименование элемента', 'Размещено', 'Отдельный сайт', '']
	const formatCulturesTableData = (culturesData: CultureItem[]) => {
		return culturesData.map((cultureEl) => {
			return {
				rowId: cultureEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': cultureEl.hidden })} key='0'>
						{cultureEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': cultureEl.hidden })} key='1'>
						{mainFormatDate(cultureEl.createdate)}
					</p>,
					cultureEl.website ? (
						<a
							className={cn({ 'hidden-cell': cultureEl.hidden }, styles.cultureTableLink)}
							href={cultureEl.website}
							key='4'
						>
							{cultureEl.website}
						</a>
					) : (
						<p key='4' className={cn({ 'hidden-cell': cultureEl.hidden })}>
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
		await hideCulturesById(id)
	}

	const rowClickHandler = (id: string) => {
		navigate(`/culture/culture-info/${id}`)
	}

	const handleAddCultureClick = async () => {
		const newId = await addCulture()
		navigate(`/culture/culture-info/${newId}`)
	}

	if (!cultures) return <Loader />

	return (
		<div>
			<GridRow $margin='0 0 15px 0' className={styles.searchRow}>
				<TableFiltration filterInputs={CultureElementsFiltrationInputs} />
			</GridRow>
			<CustomTable
				className={styles.cultureTable}
				rowData={formatCulturesTableData(cultures)}
				colTitles={tableTitles}
				rowClickHandler={rowClickHandler}
			/>
			<TableFooter
				totalElements={cultures.length}
				addClickHandler={handleAddCultureClick}
				addText='Добавить элемент'
			/>
		</div>
	)
}
