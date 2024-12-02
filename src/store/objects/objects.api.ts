import { type ObjectNews, type ObjectItem, type ObjectEvents } from 'src/types/objects'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const objectsApi = createApi({
	reducerPath: ReducerPath.Objects,
	tagTypes: ['Object', 'ObjectNews', 'ObjectEvents'],
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
		getNewsByObjectId: build.query<ObjectNews[], { id: string | undefined; search?: string }>({
			query: ({ id: objId, search }) => ({
				url: `objects/${objId}/news`,
				params: {
					q: search,
				},
			}),
			providesTags: ['Object', 'ObjectNews'],
		}),
		getEventsByObjectId: build.query<ObjectEvents[], { id: string | undefined; search?: string }>({
			query: ({ id: objId, search }) => ({
				url: `objects/${objId}/events`,
				params: {
					q: search,
				},
			}),
			providesTags: ['Object', 'ObjectEvents'],
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
		deleteObjectEventsById: build.mutation<null, { objectId: string; eventId: string }>({
			query: ({ objectId, eventId }) => ({
				url: `/object/${objectId}/eventDelete/${eventId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Object', 'ObjectEvents'],
		}),
	}),
})

export const {
	useGetAllObjectsQuery,
	useGetObjectByIdQuery,
	useDeleteObjectByIdMutation,
	useGetNewsByObjectIdQuery,
	useDeleteObjectNewsByIdMutation,
	useGetEventsByObjectIdQuery,
	useDeleteObjectEventsByIdMutation,
} = objectsApi
