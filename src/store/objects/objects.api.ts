import {
	type ObjectNews,
	type ObjectEvents,
	type ObjectsResponse,
	type ObjectNewsResponse,
} from 'src/types/objects'
import { type FieldValues } from 'react-hook-form'

import { createApi } from '@reduxjs/toolkit/query/react'

import { ReducerPath } from 'src/helpers/consts'
import { baseQueryWithReauth } from 'src/helpers/base-query'

export const objectsApi = createApi({
	reducerPath: ReducerPath.Objects,
	tagTypes: ['Object', 'ObjectNews', 'ObjectEvents'],
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		getAllObjects: build.query<ObjectsResponse, null>({
			query: () => ({
				url: `objects/list`,
			}),
			providesTags: ['Object'],
		}),
		saveObjectDescription: build.mutation<null, FieldValues>({
			query: (formData) => ({
				url: `objects/save_description`,
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['Object'],
		}),

		getNewsByObjectId: build.query<
			ObjectNews[],
			{ id?: string; title?: string; date?: string; tags?: string }
		>({
			query: ({ id = '', title = '', date = '', tags = '' }) => ({
				url: `objects/news/list`,
				params: {
					id,
					title,
					date,
					tags,
				},
			}),
			transformResponse: (response: ObjectNewsResponse) => response.news,
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
	useDeleteObjectByIdMutation,
	useGetNewsByObjectIdQuery,
	useDeleteObjectNewsByIdMutation,
	useGetEventsByObjectIdQuery,
	useDeleteObjectEventsByIdMutation,
	useSaveObjectDescriptionMutation,
} = objectsApi
