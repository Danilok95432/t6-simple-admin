import { createApi } from '@reduxjs/toolkit/query/react'
import { type FieldValues } from 'react-hook-form'
import {
	type HistoryCommunityResponse,
	type AboutCommunityResponse,
	type LocationCommunityResponse,
	type CultureCommunityResponse,
} from 'src/types/community'

import { ReducerPath } from 'src/helpers/consts'
import { baseQueryWithReauth } from 'src/helpers/base-query'

export const communityApi = createApi({
	reducerPath: ReducerPath.Community,
	tagTypes: ['CommunityAbout', 'CommunityHistory', 'CommunityLocation', 'CommunityCulture'],
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		getAboutCommunity: build.query<AboutCommunityResponse, null>({
			query: () => ({
				url: `home/about/edit`,
			}),
			providesTags: ['CommunityAbout'],
		}),
		saveAboutCommunity: build.mutation<null, FieldValues>({
			query: (formData) => ({
				url: `home/about/save`,
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['CommunityAbout'],
		}),
		getHistoryCommunity: build.query<HistoryCommunityResponse, null>({
			query: () => ({
				url: `home/history/edit`,
			}),
			providesTags: ['CommunityHistory'],
		}),
		saveHistoryCommunity: build.mutation<null, FieldValues>({
			query: (formData) => ({
				url: `home/history/save`,
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['CommunityHistory'],
		}),
		getLocationCommunity: build.query<LocationCommunityResponse, null>({
			query: () => ({
				url: `home/map/edit`,
			}),
			providesTags: ['CommunityLocation'],
		}),
		saveLocationCommunity: build.mutation<null, FieldValues>({
			query: (formData) => ({
				url: `home/map/save`,
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['CommunityLocation'],
		}),
		getCultureCommunity: build.query<CultureCommunityResponse, null>({
			query: () => ({
				url: `home/culture/edit`,
			}),
			providesTags: ['CommunityCulture'],
		}),
		deleteCultureById: build.mutation<null, string>({
			query: (cultureId) => ({
				url: `home/culture/delete_item`,
				method: 'DELETE',
				body: { id: cultureId },
			}),
			invalidatesTags: ['CommunityCulture'],
		}),
		hideCultureById: build.mutation<null, string>({
			query: (cultureId) => ({
				url: `home/culture/hide_item`,
				method: 'POST',
				body: { id: cultureId },
			}),
			invalidatesTags: ['CommunityCulture'],
		}),
		saveCultureCommunity: build.mutation<null, FieldValues>({
			query: (formData) => ({
				url: `home/culture/save`,
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['CommunityCulture'],
		}),
	}),
})

export const {
	useGetAboutCommunityQuery,
	useSaveAboutCommunityMutation,
	useGetHistoryCommunityQuery,
	useSaveHistoryCommunityMutation,
	useGetLocationCommunityQuery,
	useSaveLocationCommunityMutation,
	useGetCultureCommunityQuery,
	useHideCultureByIdMutation,
	useDeleteCultureByIdMutation,
	useSaveCultureCommunityMutation,
} = communityApi
