import React, { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminLayout } from 'src/routes/admin-layout/admin-layout'

import { AdminNewsList } from 'src/pages/admin-site/admin-news-list/admin-news-list'
import { AdminAddNews } from 'src/pages/admin-site/admin-add-news/admin-add-news'
import { AdminVideotapeList } from 'src/pages/admin-site/admin-videotape-list/admin-videotape-list'
import { AdminAddVideo } from 'src/pages/admin-site/admin-add-video/admin-add-video'
import { AdminRequests } from 'src/pages/admin-site/admin-requests/admin-requests'
import { AdminAboutContent } from 'src/pages/admin-site/admin-about-content/admin-about-content'

import { AdminAddDepartments } from 'src/pages/admin-add-departments/admin-add-departments'

import { OneEventLayout } from 'src/pages/one-event-layout/one-event-layout'
import { AdminEventProfile } from 'src/pages/one-event-layout/pages/admin-event-profile/admin-event-profile'
import { AdminEventReg } from 'src/pages/one-event-layout/pages/admin-event-reg/admin-event-reg'
import { AdminEventTickets } from 'src/pages/one-event-layout/pages/admin-event-tickets/admin-event-tickets'
import { AdminEventContent } from 'src/pages/one-event-layout/pages/admin-event-content/admin-event-content'
import { AdminEventLocations } from 'src/pages/one-event-layout/pages/admin-event-locations/admin-event-locations'

import { EventTimetableLayout } from 'src/pages/one-event-layout/pages/event-timetable-layout/event-timetable-layout'
import { AdminEventTimetableList } from 'src/pages/one-event-layout/pages/event-timetable-layout/pages/admin-event-timetable-list/admin-event-timetable-list'
import { AdminEventTimetableEdit } from 'src/pages/one-event-layout/pages/event-timetable-layout/pages/admin-event-timetable-edit/admin-event-timetable-edit'
import { AdminEventPartners } from 'src/pages/one-event-layout/pages/admin-event-partners/admin-event-partners'
import { AdminEventPublication } from 'src/pages/one-event-layout/pages/admin-event-publication/admin-event-publication'
import { EventRostersLayout } from 'src/pages/one-event-layout/pages/event-rosters-layout/event-rosters-layout'

import { AdminVisitorsRosters } from 'src/pages/one-event-layout/pages/event-rosters-layout/pages/admin-visitors-rosters/admin-visitors-rosters'
import { AdminGroupsRosters } from 'src/pages/one-event-layout/pages/event-rosters-layout/pages/admin-groups-rosters/admin-groups-rosters'
import { AdminTransportRosters } from 'src/pages/one-event-layout/pages/event-rosters-layout/pages/admin-transport-rosters/admin-transport-rosters'
import { AdminEmployeesRosters } from 'src/pages/one-event-layout/pages/event-rosters-layout/pages/admin-employees-rosters/admin-employees-rosters'
import { AdminFoodRosters } from 'src/pages/one-event-layout/pages/event-rosters-layout/pages/admin-food-rosters/admin-food-rosters'
import { AdminListsRosters } from 'src/pages/one-event-layout/pages/event-rosters-layout/pages/admin-lists-rosters/admin-lists-rosters'

import { EventReportsLayout } from 'src/pages/one-event-layout/pages/event-reports-layout/event-reports-layout'
import { AdminPassReports } from 'src/pages/one-event-layout/pages/event-reports-layout/pages/admin-pass-reports/admin-pass-reports'
import { AdminFoodReports } from 'src/pages/one-event-layout/pages/event-reports-layout/pages/admin-food-reports/admin-food-reports'

import { AdminSupport } from 'src/pages/admin-support/admin-support'

import { CommunityLayout } from 'src/pages/community-layout/community-layout'
import { AdminCommunityAbout } from 'src/pages/community-layout/pages/admin-community-about/admin-community-about'
import { AdminCommunityHistory } from 'src/pages/community-layout/pages/admin-community-history/admin-community-history'
import { AdminCommunityLocation } from 'src/pages/community-layout/pages/admin-community-location/admin-community-location'
import { AdminCommunityCulture } from 'src/pages/community-layout/pages/admin-community-culture/admin-community-culture'
import { AdminCommunityDocuments } from 'src/pages/community-layout/pages/admin-community-documents/admin-community-documents'

import { AdminSettings } from 'src/pages/admin-settings/admin-settings'
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
import { EventsList } from 'src/pages/events-list/events-list'

export const AdminRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<AdminLayout />}>
				<Route path={AdminRoute.AdminNewsList} element={<AdminNewsList />} />
				<Route path={AdminRoute.AdminAddNews} element={<AdminAddNews />} />
				<Route path={AdminRoute.AdminVideotapeList} element={<AdminVideotapeList />} />
				<Route path={AdminRoute.AdminAddVideo} element={<AdminAddVideo />} />
				<Route path={AdminRoute.AdminRequestList} element={<AdminRequests />} />
				<Route path={AdminRoute.AdminAboutContent} element={<AdminAboutContent />} />
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
				<Route path={AdminRoute.AdminAddDepartments} element={<AdminAddDepartments />} />

				<Route path={AdminRoute.AdminEventsList} element={<EventsList />} />
				<Route path={AdminRoute.AdminEventNew} element={<OneEventLayout />}>
					<Route index element={<AdminEventProfile />} />
					<Route path={AdminRoute.AdminEventReg} element={<AdminEventReg />} />
					<Route path={AdminRoute.AdminEventTickets} element={<AdminEventTickets />} />
					<Route path={AdminRoute.AdminEventContent} element={<AdminEventContent />} />
					<Route path={AdminRoute.AdminEventLocations} element={<AdminEventLocations />} />
					<Route path={AdminRoute.AdminEventTimetable} element={<EventTimetableLayout />}>
						<Route index element={<AdminEventTimetableList />} />
						<Route
							path={AdminRoute.AdminEventTimetableEdit}
							element={<AdminEventTimetableEdit />}
						/>
					</Route>
					<Route path={AdminRoute.AdminEventPartners} element={<AdminEventPartners />} />
					<Route path={AdminRoute.AdminEventPublication} element={<AdminEventPublication />} />
					<Route path={AdminRoute.AdminEventRosters} element={<EventRostersLayout />}>
						<Route index element={<AdminVisitorsRosters />} />
						<Route path={AdminRoute.AdminEventRostersGroups} element={<AdminGroupsRosters />} />
						<Route
							path={AdminRoute.AdminEventRostersTransport}
							element={<AdminTransportRosters />}
						/>
						<Route
							path={AdminRoute.AdminEventRostersEmployees}
							element={<AdminEmployeesRosters />}
						/>
						<Route path={AdminRoute.AdminEventRostersFood} element={<AdminFoodRosters />} />
						<Route path={AdminRoute.AdminEventRostersLists} element={<AdminListsRosters />} />
					</Route>
					<Route path={AdminRoute.AdminEventReports} element={<EventReportsLayout />}>
						<Route index element={<AdminPassReports />} />
						<Route path={AdminRoute.AdminEventReportsFood} element={<AdminFoodReports />} />
					</Route>
				</Route>

				<Route path={AdminRoute.AdminSupport} element={<AdminSupport />} />

				<Route path={AdminRoute.AdminSettings} element={<AdminSettings />} />
			</Route>
		</Routes>
	)
}
