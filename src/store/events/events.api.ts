import { type EventItem } from 'src/types/events'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const eventsApi = createApi({
	reducerPath: ReducerPath.Events,
	tagTypes: ['Events'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllEvents: build.query<EventItem[], { search?: string }>({
			query: ({ search = '' }) => ({
				url: `events`,
				params: {
					q: search,
				},
			}),
			providesTags: ['Events'],
		}),
		deleteEventById: build.mutation<null, string>({
			query: (eventId) => ({
				url: `eventDelete/${eventId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Events'],
		}),
	}),
})

export const { useGetAllEventsQuery, useDeleteEventByIdMutation } = eventsApi
