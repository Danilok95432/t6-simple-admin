import { type VideoItem } from 'src/types/videos'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const videosApi = createApi({
	reducerPath: ReducerPath.Videos,
	tagTypes: ['Videos'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllVideos: build.query<VideoItem[], { search?: string; year?: string }>({
			query: ({ search = '', year = '' }) => ({
				url: `videos`,
				params: {
					q: search,
					y: year,
				},
			}),
			providesTags: ['Videos'],
		}),
		deleteVideoById: build.mutation<null, string>({
			query: (videoId) => ({
				url: `videoDelete/${videoId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Videos'],
		}),
		getVideoById: build.query<VideoItem, string>({
			query: (videoId) => ({
				url: `videos/${videoId}`,
			}),
		}),
	}),
})

export const { useGetAllVideosQuery, useGetVideoByIdQuery, useDeleteVideoByIdMutation } = videosApi
