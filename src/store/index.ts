import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { usersApi } from 'src/store/users/users.api'
import { regionsApi } from 'src/store/regions/regions.api'
import { objectsApi } from 'src/store/objects/objects.api'
import { projectsApi } from 'src/store/projects/projects.api'
import { newsApi } from 'src/store/news/news.api'
import { eventsApi } from 'src/store/events/events.api'

export const store = configureStore({
	reducer: {
		[regionsApi.reducerPath]: regionsApi.reducer,
		[usersApi.reducerPath]: usersApi.reducer,
		[objectsApi.reducerPath]: objectsApi.reducer,
		[projectsApi.reducerPath]: projectsApi.reducer,
		[newsApi.reducerPath]: newsApi.reducer,
		[eventsApi.reducerPath]: eventsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			regionsApi.middleware,
			usersApi.middleware,
			objectsApi.middleware,
			projectsApi.middleware,
			newsApi.middleware,
			eventsApi.middleware,
		),
})

setupListeners(store.dispatch)
