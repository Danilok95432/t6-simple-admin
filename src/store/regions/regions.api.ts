import { type RegionItem } from 'src/types/regions'
import { type UserItem } from 'src/types/users'
import { type EventsItem } from 'src/types/events'
import { type PhotoItem } from 'src/types/photos'
import { type VideoItem } from 'src/types/videos'
import { type ProjectItem } from 'src/types/projects'
import { type ObjectItem } from 'src/types/objects'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const regionsApi = createApi({
	reducerPath: ReducerPath.Regions,
	tagTypes: ['Regions'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllRegions: build.query<RegionItem[], string>({
			query: (search) => ({
				url: `regions`,
				params: {
					q: search,
				},
			}),
		}),
		getRegionByCode: build.query<RegionItem, string>({
			query: (regCode) => ({
				url: `regions/${regCode}`,
			}),
		}),

		getRegionParticipants: build.query<UserItem[], [string, string]>({
			query: ([search, regCode]) => ({
				url: `regions/${regCode}/participants`,
				params: {
					q: search,
				},
			}),
		}),

		getRegionEvents: build.query<EventsItem[], [string, string]>({
			query: ([search, regCode]) => ({
				url: `regions/${regCode}/events`,
				params: {
					q: search,
				},
			}),
		}),

		getRegionObjects: build.query<ObjectItem[], [string, string]>({
			query: ([search, regCode]) => ({
				url: `regions/${regCode}/objects`,
				params: {
					q: search,
				},
			}),
		}),

		getRegionProjects: build.query<ProjectItem[], [string, string]>({
			query: ([search, regCode]) => ({
				url: `regions/${regCode}/projects`,
				params: {
					q: search,
				},
			}),
		}),

		getRegionPhotos: build.query<PhotoItem[], string>({
			query: (regCode) => ({
				url: `regions/${regCode}/photos`,
			}),
		}),

		getRegionVideos: build.query<VideoItem[], string>({
			query: (regCode) => ({
				url: `regions/${regCode}/videos`,
			}),
		}),
	}),
})

export const {
	useGetAllRegionsQuery,
	useGetRegionByCodeQuery,
	useGetRegionParticipantsQuery,
	useGetRegionEventsQuery,
	useGetRegionObjectsQuery,
	useGetRegionProjectsQuery,
	useGetRegionPhotosQuery,
	useGetRegionVideosQuery,
} = regionsApi
