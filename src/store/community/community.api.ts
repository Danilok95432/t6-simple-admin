import { createApi } from '@reduxjs/toolkit/query/react'
import { type FieldValues } from 'react-hook-form'
import {
	type HistoryCommunityResponse,
	type AboutCommunityResponse,
	type LocationCommunityResponse,
} from 'src/types/community'

import { ReducerPath } from 'src/helpers/consts'
import { baseQueryWithReauth } from 'src/helpers/base-query'

export const communityApi = createApi({
	reducerPath: ReducerPath.Community,
	tagTypes: ['CommunityAbout', 'CommunityHistory', 'CommunityLocation'],
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
	}),
})

export const {
	useGetAboutCommunityQuery,
	useSaveAboutCommunityMutation,
	useGetHistoryCommunityQuery,
	useSaveHistoryCommunityMutation,
	useGetLocationCommunityQuery,
	useSaveLocationCommunityMutation,
} = communityApi
