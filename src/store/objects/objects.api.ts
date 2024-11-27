import { type ObjectItem } from 'src/types/objects'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const objectsApi = createApi({
	reducerPath: ReducerPath.Objects,
	tagTypes: ['Object'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllObjects: build.query<ObjectItem[], { search?: string }>({
			query: ({ search = '' }) => ({
				url: `objects`,
				params: {
					q: search,
				},
			}),
			providesTags: ['Object'],
		}),
		getObjectById: build.query<ObjectItem, string>({
			query: (objId) => ({
				url: `objects/${objId}`,
			}),
			providesTags: ['Object'],
		}),
		deleteObjectById: build.mutation<null, string>({
			query: (objectId) => ({
				url: `objectDelete/${objectId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Object'],
		}),
	}),
})

export const { useGetAllObjectsQuery, useGetObjectByIdQuery, useDeleteObjectByIdMutation } =
	objectsApi
