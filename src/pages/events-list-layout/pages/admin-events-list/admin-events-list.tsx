import { type FC } from 'react'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminEventsList: FC = () => {
	return (
		<AdminContent $padding='25px 30px 35px'>
			<ul>
				<li>Событие 1</li>
				<li>Событие 2</li>
				<li>Событие 3</li>
				<li>Событие 4</li>
			</ul>
		</AdminContent>
	)
}
