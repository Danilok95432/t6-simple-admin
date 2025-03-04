import { createApi } from '@reduxjs/toolkit/query/react'
import { type FieldValues } from 'react-hook-form'
import { type CultureInfoResponse } from 'src/types/culture'

import { ReducerPath } from 'src/helpers/consts'
import { baseQueryWithReauth } from 'src/helpers/base-query'

export const culturesApi = createApi({
	reducerPath: ReducerPath.Culture,
	tagTypes: ['Culture', 'CultureInfo'],
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		getCultureInfo: build.query<CultureInfoResponse, string>({
			query: (id) => ({
				url: `home/culture/edit_item`,
				params: {
					id,
				},
			}),
			providesTags: ['CultureInfo'],
		}),
		saveCultureInfoCommunity: build.mutation<null, FieldValues>({
			query: (formData) => ({
				url: `home/culture/save_item`,
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['CultureInfo'],
		}),
	}),
})

export const { useGetCultureInfoQuery, useSaveCultureInfoCommunityMutation } = culturesApi
