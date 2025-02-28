import {
	type EventNewIdResponse,
	type EventInfoResponse,
	type EventPartners,
	type EventResponse,
	type EventContacts,
	type EventContent,
} from 'src/types/events'
import { type FieldValues } from 'react-hook-form'

import { createApi } from '@reduxjs/toolkit/query/react'

import { ReducerPath } from 'src/helpers/consts'
import { baseQueryWithReauth } from 'src/helpers/base-query'

export const eventsApi = createApi({
	reducerPath: ReducerPath.Events,
	tagTypes: [
		'Events',
		'EventInfo',
		'EventPartners',
		'EventContacts',
		'EventContent',
		'EventNews',
		'EventVideo',
	],
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		getAllEvents: build.query<
			EventResponse,
			{
				idObject?: string
				title?: string
				objectTitle?: string
				dateFrom?: string
				dateTo?: string
			}
		>({
			query: ({ idObject = '', title = '', objectTitle = '', dateFrom = '', dateTo = '' }) => ({
				url: `events/list`,
				params: {
					idObject,
					title,
					objectTitle,
					dateFrom,
					dateTo,
				},
			}),
			providesTags: ['Events'],
		}),
		deleteEventById: build.mutation<null, string>({
			query: (eventId) => ({
				url: `events/delete`,
				method: 'DELETE',
				body: { id: eventId },
			}),
			invalidatesTags: ['Events'],
		}),
		hideEventById: build.mutation<null, string>({
			query: (eventId) => ({
				url: `events/hide`,
				method: 'POST',
				body: { id: eventId },
			}),
			invalidatesTags: ['Events'],
		}),
		getEventInfo: build.query<EventInfoResponse, string>({
			query: (id) => ({
				url: `events/edit`,
				params: {
					id,
				},
			}),
			providesTags: ['EventInfo'],
		}),
		saveEventProfileInfo: build.mutation<string, FieldValues>({
			query: (FormData) => ({
				url: `events/save`,
				method: 'POST',
				body: FormData,
			}),
			invalidatesTags: ['EventInfo', 'Events'],
		}),
		getNewIdEvent: build.query<EventNewIdResponse, null>({
			query: () => ({
				url: `events/getnew`,
			}),
			providesTags: ['EventInfo', 'Events'],
		}),
		getContactsByEventId: build.query<EventContacts, string>({
			query: (id) => ({
				url: `events/edit_contacts`,
				params: {
					id,
				},
			}),
			providesTags: ['Events', 'EventContacts'],
		}),
		saveEventContactInfo: build.mutation<string, FieldValues>({
			query: (FormData) => ({
				url: `events/save_contacts`,
				method: 'POST',
				body: FormData,
			}),
			invalidatesTags: ['EventInfo', 'Events', 'EventContacts'],
		}),
		getContentByEventId: build.query<EventContent, string>({
			query: (id) => ({
				url: `events/edit_content`,
				params: {
					id,
				},
			}),
			providesTags: ['EventInfo', 'Events', 'EventContacts'],
		}),
		saveEventContentInfo: build.mutation<string, FieldValues>({
			query: (FormData) => ({
				url: `events/save_content`,
				method: 'POST',
				body: FormData,
			}),
			invalidatesTags: ['EventInfo', 'Events', 'EventContacts'],
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
	useHideEventByIdMutation,
	useGetEventInfoQuery,
	useSaveEventProfileInfoMutation,
	useGetNewIdEventQuery,
	useGetContactsByEventIdQuery,
	useSaveEventContactInfoMutation,
	useGetContentByEventIdQuery,
	useSaveEventContentInfoMutation,
	useGetPartnersByEventIdQuery,
	useDeleteEventPartnerByIdMutation,
} = eventsApi
