import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type CultureElement } from 'src/types/culture'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const culturesApi = createApi({
	reducerPath: ReducerPath.Culture,
	tagTypes: ['Culture'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllCultures: build.query<CultureElement[], { search?: string }>({
			query: ({ search = '' }) => ({
				url: `cultures`,
				params: {
					q: search,
				},
			}),
			providesTags: ['Culture'],
		}),
		getCultureById: build.query<CultureElement, string>({
			query: (cultureId) => ({
				url: `cultures/${cultureId}`,
			}),
		}),
		deleteCultureById: build.mutation<null, string>({
			query: (cultureId) => ({
				url: `cultureDelete/${cultureId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Culture'],
		}),
	}),
})

export const { useGetAllCulturesQuery, useGetCultureByIdQuery, useDeleteCultureByIdMutation } =
	culturesApi
