import {
	type BaseQueryFn,
	createApi,
	type FetchArgs,
	fetchBaseQuery,
	type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { type FieldValues } from 'react-hook-form'
import { type AuthResponse } from 'src/types/response'

import { Mutex } from 'async-mutex'
import { authActions } from 'src/store/auth/auth.slice'
import { BASE_URL } from 'src/helpers/consts'

const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
	baseUrl: BASE_URL,
	credentials: 'include',
	prepareHeaders: (headers) => {
		const token = localStorage.getItem('token')
		if (token) {
			headers.set('Authorization', `Bearer ${token}`)
		}
	},
})

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
	args,
	api,
	extraOptions,
) => {
	await mutex.waitForUnlock()
	let result = await baseQuery(args, api, extraOptions)
	if (result.error && result.error.status === 401) {
		if (!mutex.isLocked()) {
			const release = await mutex.acquire()
			try {
				const refreshResult = await baseQuery('/refresh', api, extraOptions)
				if (refreshResult.data) {
					const authResponse = refreshResult.data as AuthResponse
					localStorage.setItem('token', authResponse.accessToken)
					result = await baseQuery(args, api, extraOptions)
				} else {
					api.dispatch(authActions.setAuth(false))
					api.dispatch(authActions.setUser(null))
					localStorage.removeItem('token')
				}
			} finally {
				release()
			}
		} else {
			await mutex.waitForUnlock()
			result = await baseQuery(args, api, extraOptions)
		}
	}
	return result
}

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
				url: '/login',
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
		checkAuth: build.query({
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
