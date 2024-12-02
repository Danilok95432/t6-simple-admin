import {
	type BaseQueryFn,
	type FetchArgs,
	fetchBaseQuery,
	type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'
import type { AuthResponse } from 'src/types/response'

import { authActions } from 'src/store/auth/auth.slice'
import { DEV_URL } from 'src/helpers/consts'

const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
	baseUrl: DEV_URL,
	credentials: 'include',
	prepareHeaders: (headers) => {
		const token = localStorage.getItem('token')
		if (token) {
			headers.set('Authorization', token)
		}
	},
})

export const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	await mutex.waitForUnlock()
	let result = await baseQuery(args, api, extraOptions)
	if (result.error && result.error.status === 401) {
		if (!mutex.isLocked()) {
			const release = await mutex.acquire()
			try {
				const refreshResult = await baseQuery('/refresh', api, extraOptions)
				if (refreshResult.data) {
					const authResponse = refreshResult.data as AuthResponse
					localStorage.setItem('token', authResponse.token)
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
