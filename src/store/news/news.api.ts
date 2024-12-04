import { type NewsItem } from 'src/types/news'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const newsApi = createApi({
	reducerPath: ReducerPath.News,
	tagTypes: ['News'],
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
	}),
})

export const { useGetAllNewsQuery, useGetNewsByIdQuery, useDeleteNewsByIdMutation } = newsApi
