import { type FC } from 'react'
import { type EventItem } from 'src/types/events'

import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'

import styles from './index.module.scss'

export const QuestionsElements: FC = () => {
	const navigate = useNavigate()
	const mockData = [
		{ id: '1', title: 'Требуется ли регистрация для детей?' },
		{ id: '2', title: 'Как понять, что я прошел регистрацию на сайте?' },
		{
			id: '3',
			title: 'Как проехать на парковку, если я не собираюсь оставаться в лагере с ночевкой?',
		},
	]

	const tableTitles = ['Название вопроса', '']

	const formatEventsTableData = (questionsData: EventItem[]) => {
		return questionsData.map((questionEl) => {
			return {
				rowId: questionEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': questionEl.hidden })} key='0'>
						{questionEl.title}
					</p>,
					<RowController
						id={questionEl.id}
						hideHandler={rowHideHandler}
						removeHandler={rowDeleteHandler}
						textOfHidden='Скрыть событие'
						key='4'
					/>,
				],
			}
		})
	}
	const rowDeleteHandler = async (id: string) => {}
	const rowHideHandler = async (id: string) => {
		console.log(id)
	}

	const rowClickHandler = (id: string) => {
		navigate(`/frequent-questions/question/${id}`)
	}

	const handleAddQuestionClick = async () => {
		// const newId = await addQuestion()
		// navigate(`/frequent-questions/question/${newId}`)
	}

	// if (isLoading || !eventsDataResponse?.events) return <Loader />

	return (
		<>
			<CustomTable
				className={styles.questionTable}
				rowData={formatEventsTableData(mockData)}
				colTitles={tableTitles}
				rowClickHandler={rowClickHandler}
			/>
			<TableFooter
				totalElements={mockData?.length}
				addClickHandler={handleAddQuestionClick}
				addText='Добавить вопрос'
			/>
		</>
	)
}
