import { type EventRequest, type EventsItem } from 'src/types/events'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const eventsApi = createApi({
	reducerPath: ReducerPath.Events,
	tagTypes: ['Events'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllEvents: build.query<EventsItem[], { search?: string; year?: string }>({
			query: ({ search = '', year = '' }) => ({
				url: `events`,
				params: {
					q: search,
					y: year,
				},
			}),
		}),
		getEventById: build.query<EventsItem, string>({
			query: (eventsId) => ({
				url: `events/${eventsId}`,
			}),
		}),
		getEventRequests: build.query<EventRequest[], null>({
			query: () => ({
				url: 'event-requests',
			}),
		}),
	}),
})

export const { useGetAllEventsQuery, useGetEventByIdQuery, useGetEventRequestsQuery } = eventsApi
