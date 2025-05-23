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
import { OpenRequest } from 'src/pages/admin-news/components/requests/components/open-request/open-request'

import { EventsList } from 'src/pages/events-list/events-list'
import { OneEventLayout } from 'src/pages/one-event-layout/one-event-layout'
import { AdminEventProfile } from 'src/pages/one-event-layout/pages/admin-event-profile/admin-event-profile'
import { AdminEventContacts } from 'src/pages/one-event-layout/pages/admin-event-contacts/admin-event-contacts'
import { AdminEventContent } from 'src/pages/one-event-layout/pages/admin-event-content/admin-event-content'
import { AdminEventPartnersLayout } from 'src/pages/one-event-layout/pages/admin-event-partners/admin-event-partners-layout'
import { AdminEventNews } from 'src/pages/one-event-layout/pages/admin-event-news/admin-event-news'
import { AdminEventVideos } from 'src/pages/one-event-layout/pages/admin-event-videos/admin-event-videos'
import { AdminEventProgram } from 'src/pages/one-event-layout/pages/admin-event-program/admin-event-program'
import { AdminEventHistory } from 'src/pages/one-event-layout/pages/admin-event-history/admin-event-history'

import { CommunityLayout } from 'src/pages/community-layout/community-layout'
import { AdminCommunityAbout } from 'src/pages/community-layout/pages/admin-community-about/admin-community-about'
import { AdminCommunityHistory } from 'src/pages/community-layout/pages/admin-community-history/admin-community-history'
import { AdminCommunityLocation } from 'src/pages/community-layout/pages/admin-community-location/admin-community-location'
import { AdminCommunityCulture } from 'src/pages/community-layout/pages/admin-community-culture/admin-community-culture'
import { AdminCommunityTraditions } from 'src/pages/community-layout/pages/admin-community-traditions/admin-community-traditions'
import { AdminCommunityGames } from 'src/pages/community-layout/pages/admin-community-games/admin-community-games'
import { AdminCommunityDocuments } from 'src/pages/community-layout/pages/admin-community-documents/admin-community-documents'

import { CultureElementLayout } from 'src/pages/culture-element-layout/culture-element-layout'
import { CultureInfo } from 'src/pages/culture-element-layout/pages/culture-info/culture-info'
import { CultureHistory } from 'src/pages/culture-element-layout/pages/culture-history/culture-history'

import { AdminObjects } from 'src/pages/admin-objects/admin-objects'
import { AdminPartnersLayout } from 'src/pages/admin-partners-layout/admin-partners-layout'
import { ObjectElementLayout } from 'src/pages/object-element-layout/object-element-layout'
import { ObjectInfo } from 'src/pages/object-element-layout/pages/object-info/object-info'
import { ObjectNews } from 'src/pages/object-element-layout/pages/object-news/object-news'
import { ObjectHistory } from 'src/pages/object-element-layout/pages/object-history/object-history'
import { ObjectEvents } from 'src/pages/object-element-layout/pages/object-events/object-events'
import { ObjectGallery } from 'src/pages/object-element-layout/pages/object-gallery/object-gallery'
import { ObjectLocation } from 'src/pages/object-element-layout/pages/object-location/object-location'

import { AdminSupport } from 'src/pages/admin-support/admin-support'
import { AdminSettings } from 'src/pages/admin-settings/admin-settings'
import { PartnerElements } from 'src/pages/one-event-layout/pages/admin-event-partners/components/partner-elements/partner-elements'
import { OnePartner } from 'src/pages/one-event-layout/pages/admin-event-partners/components/one-partner/one-partner'
import { Partner } from 'src/pages/admin-partners-layout/components/partner/partner'
import { PartnersElements } from 'src/pages/admin-partners-layout/components/partners-elements/partners-elements'
import { AdminQuestionsLayout } from 'src/pages/admin-questions/admin-questions-layout'
import { QuestionsElements } from 'src/pages/admin-questions/components/questions-elements/questions-elements'
import { Question } from 'src/pages/admin-questions/components/question/question'
import { TraditionInfo } from 'src/pages/tradition-element-layout/pages/tradition-info/tradition-info'
import { TraditionElementLayout } from 'src/pages/tradition-element-layout/tradition-element-layout'
import { TraditionHistory } from 'src/pages/tradition-element-layout/pages/tradition-history/tradition-history'
import { GameHistory } from 'src/pages/game-element-layout/pages/game-history/game-history'
import { GameInfo } from 'src/pages/game-element-layout/pages/game-info/game-info'
import { GameElementLayout } from 'src/pages/game-element-layout/game-element-layout'
import { AdminCommunityNature } from 'src/pages/community-layout/pages/admin-community-nature/admin-community-nature'
import { ObjectVideos } from 'src/pages/object-element-layout/pages/object-videos/object-videos'

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
						<Route path=':id' element={<OpenRequest />} />
						<Route path='new' element={<OneRequest />} />
					</Route>
				</Route>
				<Route path={AdminRoute.AdminAtmans} element={<CommunityLayout />}>
					<Route index element={<AdminCommunityAbout />} />
					<Route path={AdminRoute.AdminAtmansHistory} element={<AdminCommunityHistory />} />
					<Route path={AdminRoute.AdminAtmansNature} element={<AdminCommunityNature />} />
					<Route path={AdminRoute.AdminAtmansLocation} element={<AdminCommunityLocation />} />
					<Route path={AdminRoute.AdminAtmansCulture} element={<AdminCommunityCulture />} />
					<Route path={AdminRoute.AdminAtmansTraditions} element={<AdminCommunityTraditions />} />
					<Route path={AdminRoute.AdminAtmansGames} element={<AdminCommunityGames />} />
					<Route path={AdminRoute.AdminAtmansDocuments} element={<AdminCommunityDocuments />} />
				</Route>
				<Route path={AdminRoute.AdminCultureElement} element={<CultureElementLayout />}>
					<Route path={`${AdminRoute.AdminCultureInfo}/:id`} element={<CultureInfo />} />
					<Route path={`${AdminRoute.AdminCultureHistory}/:id`} element={<CultureHistory />} />
				</Route>
				<Route path={AdminRoute.AdminTraditionElement} element={<TraditionElementLayout />}>
					<Route path={`${AdminRoute.AdminTraditionInfo}/:id`} element={<TraditionInfo />} />
					<Route path={`${AdminRoute.AdminTraditionHistory}/:id`} element={<TraditionHistory />} />
				</Route>
				<Route path={AdminRoute.AdminGameElement} element={<GameElementLayout />}>
					<Route path={`${AdminRoute.AdminGameInfo}/:id`} element={<GameInfo />} />
					<Route path={`${AdminRoute.AdminGameHistory}/:id`} element={<GameHistory />} />
				</Route>
				<Route path={AdminRoute.AdminObject} element={<ObjectElementLayout />}>
					<Route path={`${AdminRoute.AdminObjInfo}/:id`} element={<ObjectInfo />} />
					<Route path={`${AdminRoute.AdminObjNews}/:id`} element={<ObjectNews />} />
					<Route path={`${AdminRoute.AdminObjHistory}/:id`} element={<ObjectHistory />} />
					<Route path={`${AdminRoute.AdminObjEvents}/:id`} element={<ObjectEvents />} />
					<Route path={`${AdminRoute.AdminObjGallery}/:id`} element={<ObjectGallery />} />
					<Route path={`${AdminRoute.AdminObjVideos}/:id`} element={<ObjectVideos />} />
					<Route path={`${AdminRoute.AdminObjLocation}/:id`} element={<ObjectLocation />} />
				</Route>
				<Route path={AdminRoute.AdminObjects} element={<AdminObjects />} />

				<Route path={AdminRoute.AdminEventsList} element={<EventsList />} />
				<Route path={AdminRoute.AdminEvent} element={<OneEventLayout />}>
					<Route path={`${AdminRoute.AdminEventProfile}/:id`} element={<AdminEventProfile />} />
					<Route path={`${AdminRoute.AdminEventContacts}/:id`} element={<AdminEventContacts />} />
					<Route path={`${AdminRoute.AdminEventContent}/:id`} element={<AdminEventContent />} />
					<Route
						path={`${AdminRoute.AdminEventPartners}/:id`}
						element={<AdminEventPartnersLayout />}
					>
						<Route index element={<PartnerElements />} />
						<Route
							path={`${AdminRoute.AdminEventOnePartner}/:partnerId`}
							element={<OnePartner />}
						/>
					</Route>
					<Route path={`${AdminRoute.AdminEventNews}/:id`} element={<AdminEventNews />} />
					<Route path={`${AdminRoute.AdminEventVideos}/:id`} element={<AdminEventVideos />} />
					<Route path={`${AdminRoute.AdminEventProgram}/:id`} element={<AdminEventProgram />} />
					<Route path={`${AdminRoute.AdminEventHistory}/:id`} element={<AdminEventHistory />} />
				</Route>

				<Route path={AdminRoute.AdminPartners} element={<AdminPartnersLayout />}>
					<Route index element={<PartnersElements />} />
					<Route path={`${AdminRoute.AdminPartner}/:id`} element={<Partner />} />
				</Route>

				<Route path={AdminRoute.AdminFrequentQuestions} element={<AdminQuestionsLayout />}>
					<Route index element={<QuestionsElements />} />
					<Route path={`${AdminRoute.AdminQuestion}/:id`} element={<Question />} />
				</Route>

				<Route path={AdminRoute.AdminSupport} element={<AdminSupport />} />

				<Route path={AdminRoute.AdminSettings} element={<AdminSettings />} />
			</Route>
		</Routes>
	)
}
