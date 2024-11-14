import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { NameSpace } from 'src/helpers/consts'
import { modalReducer } from 'src/modules/modal/store/modal.slice'
import { objectsApi } from 'src/store/objects/objects.api'
import { projectsApi } from 'src/store/projects/projects.api'
import { newsApi } from 'src/store/news/news.api'
import { eventsApi } from 'src/store/events/events.api'
import { culturesApi } from 'src/store/cultures/cultures.api'
import { siteSettingsApi } from 'src/store/site-settings/site-settings.api'

export const store = configureStore({
	reducer: {
		[NameSpace.Modal]: modalReducer,
		[objectsApi.reducerPath]: objectsApi.reducer,
		[projectsApi.reducerPath]: projectsApi.reducer,
		[newsApi.reducerPath]: newsApi.reducer,
		[eventsApi.reducerPath]: eventsApi.reducer,
		[culturesApi.reducerPath]: culturesApi.reducer,
		[siteSettingsApi.reducerPath]: siteSettingsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			objectsApi.middleware,
			projectsApi.middleware,
			newsApi.middleware,
			eventsApi.middleware,
			culturesApi.middleware,
			siteSettingsApi.middleware,
		),
})

setupListeners(store.dispatch)
