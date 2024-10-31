import { Outlet } from 'react-router-dom'

import { EventTitle } from 'src/components/event-title/event-title'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'
import { eventRostersSubtabs } from 'src/pages/one-event-layout/pages/event-rosters-layout/consts'

export const EventRostersLayout = () => {
	return (
		<AdminContent $padding='25px 30px 35px'>
			<EventTitle
				title='Конференция ВООПИК 2024'
				dates={['26 августа 2023 года', '28 августа 2023 года']}
				address='с. Атманов Угол Тамбовской области'
			/>
			<TabNavigation navItems={eventRostersSubtabs} variant='sub' />
			<Outlet />
		</AdminContent>
	)
}
