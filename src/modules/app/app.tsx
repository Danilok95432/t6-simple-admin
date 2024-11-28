import { type FC } from 'react'

import { Route, Routes } from 'react-router-dom'

import { AdminRoutes } from 'src/routes/admin-routes/admin-routes'
import { NotFound } from 'src/pages/not-found/not-found'

export const App: FC = () => {
	// const [checkAuth, { data: authData }] = useLazyCheckAuthQuery()
	// const { setAuth, setUser } = useActions()
	//
	// useEffect(() => {
	// 	;(async () => {
	// 		if (localStorage.getItem('token')) {
	// 			await checkAuth(null)
	// 			if (authData) {
	// 				localStorage.setItem('token', authData.accessToken)
	// 				setAuth(true)
	// 				setUser(authData.user)
	// 			}
	// 		}
	// 	})()
	// }, [authData])
	return (
		<Routes>
			<Route path='/*' element={<AdminRoutes />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
export default App
