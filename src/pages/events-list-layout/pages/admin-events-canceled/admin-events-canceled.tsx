import { type FC } from 'react'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminEventsCanceled: FC = () => {
	return (
		<AdminContent $padding='25px 30px 35px'>
			<p>Контент отмененных событий</p>
		</AdminContent>
	)
}
