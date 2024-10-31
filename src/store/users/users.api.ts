import { type UserItem } from 'src/types/users'
import { type GroupItem } from 'src/types/groups'
import { type EventsItem } from 'src/types/events'
import { type ProjectItem } from 'src/types/projects'
import { type ObjectItem } from 'src/types/objects'
import { type PhotoItem } from 'src/types/photos'
import { type VideoItem } from 'src/types/videos'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const usersApi = createApi({
	reducerPath: ReducerPath.Users,
	tagTypes: ['Users'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllUsers: build.query<UserItem[], string>({
			query: (search) => ({
				url: `users`,
				params: {
					q: search,
				},
			}),
		}),
		getUserById: build.query<UserItem, string>({
			query: (userId) => ({
				url: `users/${userId}`,
			}),
		}),
		getUserGroup: build.query<GroupItem[], [string, string]>({
			query: ([search, userId]) => ({
				url: `users/${userId}/group`,
				params: {
					q: search,
				},
			}),
		}),
		getUserEvent: build.query<EventsItem[], [string, string]>({
			query: ([search, userId]) => ({
				url: `users/${userId}/event`,
				params: {
					q: search,
				},
			}),
		}),
		getUserProject: build.query<ProjectItem[], [string, string]>({
			query: ([search, userId]) => ({
				url: `users/${userId}/project`,
				params: {
					q: search,
				},
			}),
		}),
		getUserObject: build.query<ObjectItem[], [string, string]>({
			query: ([search, userId]) => ({
				url: `users/${userId}/object`,
				params: {
					q: search,
				},
			}),
		}),
		getUserPhoto: build.query<PhotoItem[], [string, string]>({
			query: ([search, userId]) => ({
				url: `users/${userId}/photo`,
				params: {
					q: search,
				},
			}),
		}),
		getUserVideo: build.query<VideoItem[], [string, string]>({
			query: ([search, userId]) => ({
				url: `users/${userId}/video`,
				params: {
					q: search,
				},
			}),
		}),
	}),
})

export const {
	useGetAllUsersQuery,
	useGetUserByIdQuery,
	useGetUserGroupQuery,
	useGetUserEventQuery,
	useGetUserProjectQuery,
	useGetUserObjectQuery,
	useGetUserPhotoQuery,
	useGetUserVideoQuery,
} = usersApi
