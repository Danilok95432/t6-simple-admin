import { type NewsResponse, type NewsItem, type NewsInfoResponse } from 'src/types/news'

import { createApi } from '@reduxjs/toolkit/query/react'

import { ReducerPath } from 'src/helpers/consts'
import { baseQueryWithReauth } from 'src/helpers/base-query'

export const newsApi = createApi({
	reducerPath: ReducerPath.News,
	tagTypes: ['News', 'NewsInfo'],
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		getAllNews: build.query<NewsResponse, { title?: string; date?: string; tags?: string }>({
			query: ({ title = '', date = '', tags = '' }) => ({
				url: `news/list`,
				params: {
					title,
					date,
					tags,
				},
			}),
			providesTags: ['News'],
		}),
		deleteNewsById: build.mutation<null, string>({
			query: (newsId) => ({
				url: `news/delete`,
				method: 'DELETE',
				body: { id: newsId },
			}),
			invalidatesTags: ['News'],
		}),
		hideNewsById: build.mutation<null, string>({
			query: (newsId) => ({
				url: `news/hide`,
				method: 'POST',
				body: { id: newsId },
			}),
			invalidatesTags: ['News'],
		}),
		getNewsById: build.query<NewsItem, string>({
			query: (newsId) => ({
				url: `news/${newsId}`,
			}),
			providesTags: ['News'],
		}),
		getNewsInfo: build.query<NewsInfoResponse, string>({
			query: (id) => ({
				url: `news/edit`,
				params: {
					id,
				},
			}),
			providesTags: ['NewsInfo'],
		}),
	}),
})

export const {
	useGetAllNewsQuery,
	useGetNewsByIdQuery,
	useDeleteNewsByIdMutation,
	useHideNewsByIdMutation,
	useGetNewsInfoQuery,
} = newsApi
