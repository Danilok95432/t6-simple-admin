import { createApi } from '@reduxjs/toolkit/query/react'
import { type FieldValues } from 'react-hook-form'
import { type AuthResponse } from 'src/types/response'
import { baseQueryWithReauth } from 'src/helpers/base-query'

export const authApi = createApi({
	reducerPath: 'auth/api',
	tagTypes: ['Auth'],
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		registrationUser: build.mutation<AuthResponse, FieldValues>({
			query: (formData) => ({
				url: '/registration',
				method: 'POST',
				body: formData,
			}),
		}),
		loginUser: build.mutation<AuthResponse, FieldValues>({
			query: (formData) => ({
				url: '/auth',
				method: 'POST',
				body: formData,
			}),
		}),
		logoutUser: build.mutation({
			query: () => ({
				url: '/logout',
				method: 'POST',
			}),
		}),
		checkAuth: build.query<AuthResponse, null>({
			query: () => ({
				url: '/refresh',
			}),
		}),
	}),
})
export const {
	useLoginUserMutation,
	useRegistrationUserMutation,
	useLogoutUserMutation,
	useLazyCheckAuthQuery,
} = authApi
