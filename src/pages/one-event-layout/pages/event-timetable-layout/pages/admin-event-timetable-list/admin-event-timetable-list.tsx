import { type FC } from 'react'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { EventTitle } from 'src/components/event-title/event-title'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import { FlexRow } from 'src/components/flex-row/flex-row'
export const AdminEventTimetableList: FC = () => {
	return (
		<AdminContent $padding='25px 30px 35px'>
			<p className={adminStyles.adminPrompt}>
				поля, отмеченные символом *, обязательны для заполнения
			</p>
			<EventTitle
				title='Конференция ВООПИК 2024'
				dates={['26 августа 2023 года', '28 августа 2023 года']}
				address='с. Атманов Угол Тамбовской области'
			/>
			<FlexRow>
				<AdminButton className={adminStyles.adminViewPageLink} as='link' $margin='0'>
					Перейти к редактированию расписания
				</AdminButton>
			</FlexRow>
		</AdminContent>
	)
}
