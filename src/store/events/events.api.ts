import { type EventPartners, type EventItem } from 'src/types/events'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const eventsApi = createApi({
	reducerPath: ReducerPath.Events,
	tagTypes: ['Events', 'EventPartners'],
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
		getPartnersByEventId: build.query<EventPartners[], { id: string | undefined; search?: string }>(
			{
				query: ({ id: eventId, search }) => ({
					url: `events/${eventId}/partners`,
					params: {
						q: search,
					},
				}),
				providesTags: ['Events', 'EventPartners'],
			},
		),
		deleteEventPartnerById: build.mutation<null, { eventId: string; partnerId: string }>({
			query: ({ eventId, partnerId }) => ({
				url: `/event/${eventId}/partnerDelete/${partnerId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Events', 'EventPartners'],
		}),
	}),
})

export const {
	useGetAllEventsQuery,
	useDeleteEventByIdMutation,
	useGetPartnersByEventIdQuery,
	useDeleteEventPartnerByIdMutation,
} = eventsApi
