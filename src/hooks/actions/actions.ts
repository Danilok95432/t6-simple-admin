import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { modalActions } from 'src/modules/modal/store/modal.slice'
import { authActions } from 'src/store/auth/auth.slice'

const actions = {
	...modalActions,
	...authActions,
}
export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
