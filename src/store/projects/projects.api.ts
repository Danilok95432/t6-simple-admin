import { type ProjectItem } from 'src/types/projects'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const projectsApi = createApi({
	reducerPath: ReducerPath.Projects,
	tagTypes: ['Projects'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllProjects: build.query<ProjectItem[], string>({
			query: (search) => ({
				url: `projects`,
				params: {
					q: search,
				},
			}),
		}),
		getProjectById: build.query<ProjectItem, string>({
			query: (projectId) => ({
				url: `projects/${projectId}`,
			}),
		}),
	}),
})

export const { useGetAllProjectsQuery, useGetProjectByIdQuery } = projectsApi
