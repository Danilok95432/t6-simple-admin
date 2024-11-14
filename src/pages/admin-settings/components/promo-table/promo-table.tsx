import { type PromoBlock } from 'src/types/site-settings'
import { useGetPromosQuery } from 'src/store/site-settings/site-settings.api'
import { CustomTable } from 'src/components/custom-table/custom-table'

import { mainFormatDate } from 'src/helpers/utils'
import { RowController } from 'src/components/row-controller/row-controller'
import { Loader } from 'src/components/loader/loader'

import styles from './index.module.scss'
import cn from 'classnames'

export const PromoTable = () => {
	const { data: promoItems, isLoading } = useGetPromosQuery(null)

	const rowDeleteHandler = async (id: string) => {
		// await deleteCulturesById(id)
		console.log(id)
	}
	const rowHideHandler = async (id: string) => {
		console.log(id + 'спрятан')
	}

	const tableTitles = [
		'Название промо-блока',
		'Тип контента',
		'Выбранный контент',
		'Блок создан',
		'',
	]
	const formatPromosTableData = (promosData: PromoBlock[]) => {
		return promosData.map((promoEl) => {
			return {
				rowId: promoEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': promoEl.isHidden })} key='0'>
						{promoEl.title}
					</p>,
					<span className={cn({ 'hidden-cell': promoEl.isHidden })} key='1'>
						{promoEl.contentType}
					</span>,
					<span className={cn({ 'hidden-cell': promoEl.isHidden })} key='2'>
						{promoEl.contentChoice}
					</span>,
					<span className={cn({ 'hidden-cell': promoEl.isHidden })} key='3'>
						{mainFormatDate(promoEl.createdAt)}
					</span>,
					<RowController
						id={promoEl.id}
						hideHandler={rowHideHandler}
						removeHandler={rowDeleteHandler}
						key='4'
					/>,
				],
			}
		})
	}

	const handlePromoRowClick = (id: string) => {
		console.log(id)
	}

	if (isLoading || !promoItems) return <Loader />
	return (
		<div className={styles.promosWrapper}>
			<h3>Промо-блоки</h3>
			<CustomTable
				className={styles.promoTable}
				rowData={formatPromosTableData(promoItems)}
				colTitles={tableTitles}
				rowClickHandler={handlePromoRowClick}
			/>
		</div>
	)
}
