import { type GameItem } from 'src/types/community'
import { useNavigate } from 'react-router-dom'
import { type FC } from 'react'
import cn from 'classnames'

import {
	useDeleteGameByIdMutation,
	useHideGameByIdMutation,
} from 'src/store/community/community.api'
import { useGetNewIdGameQuery } from 'src/store/games/games.api'
import { TableFiltration } from 'src/modules/table-filtration/table-filtration'
import { GameElementsFiltrationInputs } from './consts'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { mainFormatDate } from 'src/helpers/utils'
import { Loader } from 'src/components/loader/loader'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { GridRow } from 'src/components/grid-row/grid-row'

import styles from './index.module.scss'

type GamesElementsProps = {
	games?: GameItem[]
}

export const GamesElements: FC<GamesElementsProps> = ({ games = [] }) => {
	const { refetch: getNewId } = useGetNewIdGameQuery(null)
	const [hideGameById] = useHideGameByIdMutation()
	const [deleteGameById] = useDeleteGameByIdMutation()

	const navigate = useNavigate()

	const addGame = async () => {
		const newIdResponse = await getNewId().unwrap()
		return newIdResponse.id
	}

	const tableTitles = ['Наименование элемента', 'Размещено', '']
	const formatGameTableData = (gameData: GameItem[]) => {
		return gameData.map((gameEl) => {
			return {
				rowId: gameEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': gameEl.hidden })} key='0'>
						{gameEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': gameEl.hidden })} key='1'>
						{mainFormatDate(gameEl.createdate)}
					</p>,
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
		await deleteGameById(id)
	}
	const rowHideHandler = async (id: string) => {
		await hideGameById(id)
	}

	const rowClickHandler = (id: string) => {
		navigate(`/game/game-info/${id}`)
	}

	const handleAddGameClick = async () => {
		const newId = await addGame()
		navigate(`/game/game-info/${newId}`)
	}

	if (!games) return <Loader />

	return (
		<div>
			<GridRow $margin='0 0 15px 0' className={styles.searchRow}>
				<TableFiltration filterInputs={GameElementsFiltrationInputs} />
			</GridRow>
			<CustomTable
				className={styles.gameTable}
				rowData={formatGameTableData(games)}
				colTitles={tableTitles}
				rowClickHandler={rowClickHandler}
			/>
			<TableFooter
				totalElements={games.length}
				addClickHandler={handleAddGameClick}
				addText='Добавить элемент'
			/>
		</div>
	)
}
