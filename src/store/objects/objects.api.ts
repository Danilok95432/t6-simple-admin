import { type ObjectItem } from 'src/types/objects'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const objectsApi = createApi({
	reducerPath: ReducerPath.Objects,
	tagTypes: ['Objects'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllObjects: build.query<ObjectItem[], string>({
			query: (search) => ({
				url: `objects`,
				params: {
					q: search,
				},
			}),
		}),
		getObjectById: build.query<ObjectItem, string>({
			query: (objId) => ({
				url: `objects/${objId}`,
			}),
		}),
	}),
})

export const { useGetAllObjectsQuery, useGetObjectByIdQuery } = objectsApi
