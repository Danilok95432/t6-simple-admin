import { type ReactNode } from 'react'

import { createSlice } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'

type ModalState = {
	isOpen: boolean
	content: null | ReactNode
}

const initialState: ModalState = {
	isOpen: false,
	content: null,
}

const modalSlice = createSlice({
	name: NameSpace.Modal,
	initialState,
	reducers: {
		openModal: (state, action) => {
			state.isOpen = true
			state.content = action.payload
		},
		closeModal: (state) => {
			state.isOpen = false
			state.content = null
		},
	},
})

export const modalActions = modalSlice.actions

export const modalReducer = modalSlice.reducer
