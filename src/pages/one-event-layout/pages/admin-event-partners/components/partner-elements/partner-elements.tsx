import { type EventPartners } from 'src/types/events'
import { Link, useNavigate, useParams } from 'react-router-dom'
import cn from 'classnames'

import {
	useDeleteEventPartnerByIdMutation,
	useGetPartnersByEventIdQuery,
} from 'src/store/events/events.api'
import { useTableSearch } from 'src/hooks/table-search/table-search'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { TableFiltration } from 'src/modules/table-filtration/table-filtration'

import { Container } from 'src/UI/Container/Container'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { Loader } from 'src/components/loader/loader'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { GridRow } from 'src/components/grid-row/grid-row'
import { ObjectsElementsFiltrationInputs } from 'src/pages/admin-partners-layout/components/partners-elements/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const PartnerElements = () => {
	const { id } = useParams()

	const { handleSearch, searchParams } = useTableSearch(['title', 'typeOrg', 'typePart'])

	// const { data: partners, isLoading } = useGetPartnersByEventIdQuery({
	// 	id,
	// 	search: searchParams.title,
	// })
	// mock
	const partners = [
		{
			id: '1',
			isHidden: false,
			title: 'ООО МЦАИ',
			typeOrg: '',
			typePart: [''],
			priority: '',
		},
		{
			id: '1',
			isHidden: false,
			title: 'ООО МЦАИ',
			typeOrg: '',
			typePart: [''],
			priority: '',
		},
	]

	const [deletePartnerById] = useDeleteEventPartnerByIdMutation()

	const navigate = useNavigate()

	const tableTitles = ['Наименование', 'Вид организации', 'Тип партнерства', 'Очередность', '']

	const formatObjectsTableData = (partnersData: EventPartners[]) => {
		return partnersData.map((partnersEl) => {
			return {
				rowId: partnersEl.id,
				cells: [
					<p
						className={cn({ 'hidden-cell-icon': partnersEl.isHidden }, styles.titlePartnersTable)}
						key='0'
					>
						{partnersEl.title}
					</p>,
					<p className={cn({ 'hidden-cell': partnersEl.isHidden })} key='1'>
						{partnersEl.typeOrg}
					</p>,
					<p className={cn({ 'hidden-cell': partnersEl.isHidden })} key='2'>
						{partnersEl.typePart.join(', ')}
					</p>,
					<input
						className={cn({ 'hidden-cell': partnersEl.isHidden }, styles.priorityBox)}
						key='3'
						type='text'
						value={partnersEl.priority}
						onChange={(e) =>
							console.log(
								`очередность партнера с id ${partnersEl.id} изменена на значение ${e.target.value}`,
							)
						}
						onClick={(e) => e.stopPropagation()}
					/>,
					<RowController
						id={partnersEl.id}
						hideHandler={rowHideHandler}
						removeHandler={rowDeleteHandler}
						textOfHidden='Скрыть партнера'
						key='4'
					/>,
				],
			}
		})
	}

	const rowDeleteHandler = async (partnerId: string) => {
		await deletePartnerById({ eventId: id ?? '', partnerId })
	}
	const rowClickHandler = (id: string) => {
		navigate(`${AdminRoute.AdminEventOnePartner}/${id}`)
	}

	const rowHideHandler = async (id: string) => {
		console.log(id + 'спрятан')
	}

	// if (isLoading || !partners) return <Loader />

	return (
		<div className={styles.partnerElementsPage}>
			<Container $padding='0 0 35px 30px' $paddingMobile='0 0 35px 30px'>
				<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
					Возврат к списку событий
				</Link>
			</Container>
			<h3 className={styles.title}>Партнеры</h3>

			<GridRow $margin='0 0 15px 0' $padding='0 29px' className={styles.searchRow}>
				<TableFiltration filterInputs={ObjectsElementsFiltrationInputs} />
			</GridRow>
			<CustomTable
				className={styles.partnersTable}
				rowData={formatObjectsTableData(partners)}
				rowClickHandler={rowClickHandler}
				colTitles={tableTitles}
			/>
			<TableFooter
				totalElements={partners.length}
				addClickHandler={() => navigate(`${AdminRoute.AdminEventOnePartner}/new`)}
				addText='Добавить партнера'
			/>
			<Container $padding='35px 0 54px 30px' $paddingMobile='35px 0 54px 30px'>
				<Link to={`/${AdminRoute.AdminEventsList}`} className={adminStyles.adminReturnLink}>
					Возврат к списку событий
				</Link>
			</Container>
		</div>
	)
}
