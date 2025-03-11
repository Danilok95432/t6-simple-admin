import { type FC } from 'react'

import { useNavigate } from 'react-router-dom'
import cn from 'classnames'
import { QuestionItem } from 'src/types/questions'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { AdminContent } from 'src/components/admin-content/admin-content'

import styles from './index.module.scss'

export const QuestionsElements: FC = () => {
	const navigate = useNavigate()
	const tableTitles = ['Название вопроса', '']

	const mockData = [
		{ id: '1', title: 'Требуется ли регистрация для детей?' },
		{ id: '2', title: 'Как понять, что я прошел регистрацию на сайте?' },
		{
			id: '3',
			title: 'Как проехать на парковку, если я не собираюсь оставаться в лагере с ночевкой?',
		},
	]

	const addQuestion = async () => {}

	const formatQuestionsTableData = (questionsData: QuestionItem[]) => {
		return questionsData.map((questionEl) => {
			return {
				rowId: questionEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': questionEl.isHidden })} key='0'>
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
	const rowDeleteHandler = async (id: string) => {
		console.log(id)
	}

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

	return (
		<AdminContent
			$backgroundColor='#ffffff'
			$height='786px'
			$padding='30px 0'
			link='/'
			hasBottomLink
			className={styles.questionsPageContent}
			classNameLink={styles.questionsPageLinks}
		>
			<div className={styles.questionTableWrapper}>
				<h3 className={styles['table-title']}>Частые вопросы</h3>

				<CustomTable
					className={styles.questionTable}
					rowData={formatQuestionsTableData(mockData)}
					colTitles={tableTitles}
					rowClickHandler={rowClickHandler}
				/>
				<TableFooter
					totalElements={mockData?.length}
					addClickHandler={handleAddQuestionClick}
					addText='Добавить вопрос'
					className={styles.questionTableFooter}
				/>
			</div>
		</AdminContent>
	)
}
