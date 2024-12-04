import { type RequestItem } from 'src/types/requests'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const requestsApi = createApi({
	reducerPath: ReducerPath.Requests,
	tagTypes: ['Requests'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllRequests: build.query<RequestItem[], { search?: string; exceptStatus?: string[] }>({
			query: ({ search = '', exceptStatus = [''] }) => ({
				url: `requests`,
				params: {
					q: search,
					y: exceptStatus,
				},
			}),
			providesTags: ['Requests'],
		}),
		deleteRequestById: build.mutation<null, string>({
			query: (requestId) => ({
				url: `requestDelete/${requestId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Requests'],
		}),
		getRequestById: build.query<RequestItem, string>({
			query: (requestId) => ({
				url: `requests/${requestId}`,
			}),
		}),
	}),
})

export const { useGetAllRequestsQuery, useGetRequestByIdQuery, useDeleteRequestByIdMutation } =
	requestsApi
