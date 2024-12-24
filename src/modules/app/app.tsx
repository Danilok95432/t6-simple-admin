import { type FC, useEffect } from 'react'

import { Route, Routes } from 'react-router-dom'

import { AdminRoutes } from 'src/routes/admin-routes/admin-routes'
import { NotFound } from 'src/pages/not-found/not-found'
import { useLazyCheckAuthQuery } from 'src/store/auth/auth.api'
import { useActions } from 'src/hooks/actions/actions'

export const App: FC = () => {
	const [checkAuth, { data: authData }] = useLazyCheckAuthQuery()
	const { setAuth, setUser } = useActions()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			checkAuth(null).catch((err) => console.error(err))
		}
	}, [])

	useEffect(() => {
		if (authData) {
			localStorage.setItem('token', authData.token)
			setAuth(true)
			setUser(authData.user)
		}
	}, [authData])

	return (
		<Routes>
			<Route path='/*' element={<AdminRoutes />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
export default App
