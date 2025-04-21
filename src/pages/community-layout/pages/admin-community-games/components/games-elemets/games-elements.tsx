import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import { GameElementsFiltrationInputs } from './consts'
import { mainFormatDate } from 'src/helpers/utils'
import { type GameItem } from 'src/types/community'

import { RowController } from 'src/components/row-controller/row-controller'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { GridRow } from 'src/components/grid-row/grid-row'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { TableFiltration } from 'src/modules/table-filtration/table-filtration'

import styles from './index.module.scss'

export const GamesElements: FC = () => {
	const navigate = useNavigate()

	const gamesData = [
		{
			id: '1',
			title: 'Русский этноспорт',
			createdate: new Date(),
			website: 'ethnosport.ru',
			hidden: false,
		},
		{
			id: '2',
			title: 'Башкирский этноспорт',
			createdate: new Date(),
			website: 'bigmanitoodwelling.com',
			hidden: false,
		},
	]

	const tableTitles = ['Наименование элемента', 'Размещено', 'Отдельный сайт', '']
	const formatGamesTableData = (gamesData: GameItem[]) => {
		return gamesData.map((gameEl) => {
			return {
				rowId: gameEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': gameEl.hidden })} key='0'>
						{gameEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': gameEl.hidden })} key='1'>
						{mainFormatDate(gameEl.createdate)}
					</p>,
					gameEl.website ? (
						<a
							className={cn({ 'hidden-cell': gameEl.hidden }, styles.gameTableLink)}
							href={gameEl.website}
							key='4'
						>
							{gameEl.website}
						</a>
					) : (
						<p key='4' className={cn({ 'hidden-cell': gameEl.hidden })}>
							нет сайта
						</p>
					),
					<RowController
						id={gameEl.id}
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
		console.log(id)
	}
	const rowHideHandler = async (id: string) => {
		console.log(id)
	}

	const rowClickHandler = (id: string) => {
		navigate(`/game/game-info/${id}`)
	}

	const handleAddCultureClick = async () => {
		// const newId = await addTradition()
		// navigate(`/game/game-info/${newId}`)
	}

	return (
		<div>
			<GridRow $margin='0 0 15px 0' className={styles.searchRow}>
				<TableFiltration filterInputs={GameElementsFiltrationInputs} />
			</GridRow>
			<CustomTable
				className={styles.gamesTable}
				rowData={formatGamesTableData(gamesData)}
				colTitles={tableTitles}
				rowClickHandler={rowClickHandler}
			/>
			<TableFooter
				// totalElements={cultures.length}
				addClickHandler={handleAddCultureClick}
				addText='Добавить элемент'
			/>
		</div>
	)
}
