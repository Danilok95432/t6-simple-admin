import React, { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminLayout } from 'src/routes/admin-layout/admin-layout'

import { AdminNewsLayout } from 'src/pages/admin-news/admin-news-layout'
import { NewsList } from 'src/pages/admin-news/components/news/components/news-list/news-list'
import { OneNews } from 'src/pages/admin-news/components/news/components/one-news/one-news'
import { NewsLayout } from 'src/pages/admin-news/components/news/news-layout'
import { VideosLayout } from 'src/pages/admin-news/components/videos/videos-layout'
import { VideosList } from 'src/pages/admin-news/components/videos/components/videos-list/videos-list'
import { OneVideo } from 'src/pages/admin-news/components/videos/components/one-video/one-video'
import { RequestsLayout } from 'src/pages/admin-news/components/requests/requests-layout'
import { RequestsList } from 'src/pages/admin-news/components/requests/components/requests-list/requests-list'
import { OneRequest } from 'src/pages/admin-news/components/requests/components/one-request/one-request'

import { EventsList } from 'src/pages/events-list/events-list'
import { OneEventLayout } from 'src/pages/one-event-layout/one-event-layout'
import { AdminEventProfile } from 'src/pages/one-event-layout/pages/admin-event-profile/admin-event-profile'
import { AdminEventContacts } from 'src/pages/one-event-layout/pages/admin-event-contacts/admin-event-contacts'
import { AdminEventContent } from 'src/pages/one-event-layout/pages/admin-event-content/admin-event-content'
import { AdminEventPartners } from 'src/pages/one-event-layout/pages/admin-event-partners/admin-event-partners'
import { AdminEventHistory } from 'src/pages/one-event-layout/pages/admin-event-history/admin-event-history'

import { CommunityLayout } from 'src/pages/community-layout/community-layout'
import { AdminCommunityAbout } from 'src/pages/community-layout/pages/admin-community-about/admin-community-about'
import { AdminCommunityHistory } from 'src/pages/community-layout/pages/admin-community-history/admin-community-history'
import { AdminCommunityLocation } from 'src/pages/community-layout/pages/admin-community-location/admin-community-location'
import { AdminCommunityCulture } from 'src/pages/community-layout/pages/admin-community-culture/admin-community-culture'
import { AdminCommunityDocuments } from 'src/pages/community-layout/pages/admin-community-documents/admin-community-documents'

import { CultureElementLayout } from 'src/pages/culture-element-layout/culture-element-layout'
import { CultureInfo } from 'src/pages/culture-element-layout/pages/culture-info/culture-info'
import { CultureHistory } from 'src/pages/culture-element-layout/pages/culture-history/culture-history'

import { AdminObjects } from 'src/pages/admin-objects/admin-objects'
import { ObjectElementLayout } from 'src/pages/object-element-layout/object-element-layout'
import { ObjectInfo } from 'src/pages/object-element-layout/pages/object-info/object-info'
import { ObjectNews } from 'src/pages/object-element-layout/pages/object-news/object-news'
import { ObjectHistory } from 'src/pages/object-element-layout/pages/object-history/object-history'
import { ObjectEvents } from 'src/pages/object-element-layout/pages/object-events/object-events'
import { ObjectGallery } from 'src/pages/object-element-layout/pages/object-gallery/object-gallery'
import { ObjectLocation } from 'src/pages/object-element-layout/pages/object-location/object-location'

import { AdminSupport } from 'src/pages/admin-support/admin-support'
import { AdminSettings } from 'src/pages/admin-settings/admin-settings'

export const AdminRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<AdminLayout />}>
				<Route path={AdminRoute.AdminNews} element={<AdminNewsLayout />}>
					<Route path={AdminRoute.AdminNewsList} element={<NewsLayout />}>
						<Route index element={<NewsList />} />
						<Route path=':id' element={<OneNews />} />
					</Route>
					<Route path={AdminRoute.AdminVideosList} element={<VideosLayout />}>
						<Route index element={<VideosList />} />
						<Route path=':id' element={<OneVideo />} />
					</Route>
					<Route path={AdminRoute.AdminRequestList} element={<RequestsLayout />}>
						<Route index element={<RequestsList />} />
						<Route path=':id' element={<OneRequest />} />
					</Route>
				</Route>
				<Route path={AdminRoute.AdminAtmans} element={<CommunityLayout />}>
					<Route index element={<AdminCommunityAbout />} />
					<Route path={AdminRoute.AdminAtmansHistory} element={<AdminCommunityHistory />} />
					<Route path={AdminRoute.AdminAtmansLocation} element={<AdminCommunityLocation />} />
					<Route path={AdminRoute.AdminAtmansCulture} element={<AdminCommunityCulture />} />
					<Route path={AdminRoute.AdminAtmansDocuments} element={<AdminCommunityDocuments />} />
				</Route>
				<Route path={AdminRoute.AdminCultureElement} element={<CultureElementLayout />}>
					<Route path={`${AdminRoute.AdminCultureInfo}/:id`} element={<CultureInfo />} />
					<Route path={`${AdminRoute.AdminCultureHistory}/:id`} element={<CultureHistory />} />
				</Route>
				<Route path={AdminRoute.AdminObject} element={<ObjectElementLayout />}>
					<Route path={`${AdminRoute.AdminObjInfo}/:id`} element={<ObjectInfo />} />
					<Route path={`${AdminRoute.AdminObjNews}/:id`} element={<ObjectNews />} />
					<Route path={`${AdminRoute.AdminObjHistory}/:id`} element={<ObjectHistory />} />
					<Route path={`${AdminRoute.AdminObjEvents}/:id`} element={<ObjectEvents />} />
					<Route path={`${AdminRoute.AdminObjGallery}/:id`} element={<ObjectGallery />} />
					<Route path={`${AdminRoute.AdminObjLocation}/:id`} element={<ObjectLocation />} />
				</Route>
				<Route path={AdminRoute.AdminObjects} element={<AdminObjects />} />

				<Route path={AdminRoute.AdminEventsList} element={<EventsList />} />
				<Route path={AdminRoute.AdminEvent} element={<OneEventLayout />}>
					<Route path={`${AdminRoute.AdminEventProfile}/:id`} element={<AdminEventProfile />} />
					<Route path={`${AdminRoute.AdminEventContacts}/:id`} element={<AdminEventContacts />} />
					<Route path={`${AdminRoute.AdminEventContent}/:id`} element={<AdminEventContent />} />
					<Route path={`${AdminRoute.AdminEventPartners}/:id`} element={<AdminEventPartners />} />
					<Route path={`${AdminRoute.AdminEventHistory}/:id`} element={<AdminEventHistory />} />
				</Route>

				<Route path={AdminRoute.AdminSupport} element={<AdminSupport />} />

				<Route path={AdminRoute.AdminSettings} element={<AdminSettings />} />
			</Route>
		</Routes>
	)
}
