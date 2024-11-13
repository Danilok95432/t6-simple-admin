import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { modalActions } from 'src/modules/modal/store/modal.slice'

const actions = {
	...modalActions,
}
export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
