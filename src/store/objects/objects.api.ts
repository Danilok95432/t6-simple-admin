import { type ObjectNews, type ObjectItem } from 'src/types/objects'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const objectsApi = createApi({
	reducerPath: ReducerPath.Objects,
	tagTypes: ['Object', 'ObjectNews'],
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
		getNewsByObjectId: build.query<ObjectNews[], string>({
			query: (objId) => ({
				url: `objects/${objId}/news`,
			}),
			providesTags: ['Object', 'ObjectNews'],
		}),
		deleteObjectById: build.mutation<null, string>({
			query: (objectId) => ({
				url: `objectDelete/${objectId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Object'],
		}),
		deleteObjectNewsById: build.mutation<null, { objectId: string; newsId: string }>({
			query: ({ objectId, newsId }) => ({
				url: `/object/${objectId}/newsDelete/${newsId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Object', 'ObjectNews'],
		}),
	}),
})

export const {
	useGetAllObjectsQuery,
	useGetObjectByIdQuery,
	useDeleteObjectByIdMutation,
	useGetNewsByObjectIdQuery,
	useDeleteObjectNewsByIdMutation,
} = objectsApi
