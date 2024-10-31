import { type NewsItem, type NewsVideoItem } from 'src/types/news'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const newsApi = createApi({
	reducerPath: ReducerPath.News,
	tagTypes: ['News', 'NewsVideos'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllNews: build.query<NewsItem[], { search?: string; year?: string }>({
			query: ({ search = '', year = '' }) => ({
				url: `news`,
				params: {
					q: search,
					y: year,
				},
			}),
			providesTags: ['News'],
		}),
		getNewsById: build.query<NewsItem, string>({
			query: (newsId) => ({
				url: `news/${newsId}`,
			}),
			providesTags: ['News'],
		}),
		deleteNewsById: build.mutation<null, string>({
			query: (newsId) => ({
				url: `newsDelete/${newsId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['News'],
		}),
		getAllNewsVideos: build.query<NewsVideoItem[], { search?: string; year?: string }>({
			query: ({ search = '', year = '' }) => ({
				url: `news-videos`,
				params: {
					q: search,
					y: year,
				},
			}),
			providesTags: ['NewsVideos'],
		}),
		deleteNewsVideoById: build.mutation<null, string>({
			query: (videoId) => ({
				url: `newsVideoDelete/${videoId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['NewsVideos'],
		}),
		getNewsVideoById: build.query<NewsVideoItem, string>({
			query: (videoId) => ({
				url: `news-videos/${videoId}`,
			}),
		}),
	}),
})

export const {
	useGetAllNewsQuery,
	useGetNewsByIdQuery,
	useDeleteNewsByIdMutation,
	useGetAllNewsVideosQuery,
	useDeleteNewsVideoByIdMutation,
} = newsApi
