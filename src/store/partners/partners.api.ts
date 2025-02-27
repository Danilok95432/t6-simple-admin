import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from 'src/helpers/base-query'

import { ReducerPath } from 'src/helpers/consts'
import { PartnersResponse } from 'src/types/partners'

export const partnersApi = createApi({
	reducerPath: ReducerPath.Partners,
	tagTypes: ['Partners'],
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		getAllPartners: build.query<PartnersResponse, void>({
			query: () => ({
				url: 'partners/list',
			}),
			providesTags: ['Partners'],
		}),
	}),
})

export const { useGetAllPartnersQuery } = partnersApi
