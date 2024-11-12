import { type FC } from 'react'
import {
	useDeleteCultureByIdMutation,
	useGetAllCulturesQuery,
} from 'src/store/cultures/cultures.api'
import { CustomTable } from 'src/components/custom-table/custom-table'

import { mainFormatDate } from 'src/helpers/utils'
import { Loader } from 'src/components/loader/loader'
import { type CultureElement } from 'src/types/culture'
import { Link } from 'react-router-dom'
import { RowController } from 'src/components/row-controller/row-controller'

import styles from './index.module.scss'

export const CultureElements: FC = () => {
	const { data: cultures, isLoading } = useGetAllCulturesQuery({ search: '' })

	const [deleteCulturesById] = useDeleteCultureByIdMutation()

	const tableTitles = [
		'Наименование элемента',
		'Размещено',
		'Уровень',
		'Регион',
		'Отдельный сайт',
		'',
	]

	const rowDeleteHandler = async (id: string) => {
		await deleteCulturesById(id)
	}
	const rowHideHandler = async (id: string) => {
		console.log(id + 'спрятан')
	}

	const formatCulturesTableData = (culturesData: CultureElement[]) => {
		return culturesData.map((cultureEl) => {
			return [
				<Link to={cultureEl.id} key='0'>
					{cultureEl.title}
				</Link>,
				mainFormatDate(cultureEl.assemblyDate),
				cultureEl.level,
				cultureEl.region,
				<a href={cultureEl.site ?? '#'} key='4'>
					{cultureEl.site}
				</a>,
				<RowController
					id={cultureEl.id}
					hideHandler={rowHideHandler}
					removeHandler={rowDeleteHandler}
					key='5'
				/>,
			]
		})
	}

	if (isLoading || !cultures) return <Loader />

	return (
		<div>
			<CustomTable
				className={styles.cultureTable}
				cellsData={formatCulturesTableData(cultures)}
				colTitles={tableTitles}
			/>
		</div>
	)
}
