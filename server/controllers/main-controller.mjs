import { regions } from '../mockData/regions.mjs'
import { users } from '../mockData/users.mjs'
import { objects } from '../mockData/objects.mjs'
import { projects } from '../mockData/projects.mjs'
import { news } from '../mockData/news.mjs'
import { events } from '../mockData/events.mjs'
import { newsVideos } from '../mockData/newsVideos.mjs'
import { eventRequests } from '../mockData/eventRequests.mjs'

export const getRegions = (req, res) => {
	const { q } = req.query

	const filteredRegions = regions.filter((el) => el.title.toLowerCase().includes(q))

	res.status(200).json(filteredRegions)
}
export const getRegionParticipants = (req, res) => {
	const { q } = req.query
	const regionCode = req.params.code

	const foundRegion = regions.find((region) => region.regionCode === regionCode)
	const filteredRegionParticipants = foundRegion.participants.filter((item) =>
		item.fullname.toLowerCase().includes(q),
	)
	res.status(200).json(filteredRegionParticipants)
}

export const getRegionEvents = (req, res) => {
	const { q } = req.query
	const regionCode = req.params.code

	const foundRegion = regions.find((region) => region.regionCode === regionCode)
	const filteredRegionEvents = foundRegion.events.filter((item) =>
		item.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredRegionEvents)
}

export const getRegionObjects = (req, res) => {
	const { q } = req.query
	const regionCode = req.params.code

	const foundRegion = regions.find((region) => region.regionCode === regionCode)
	const filteredRegionObjects = foundRegion.objects.filter((item) =>
		item.title.toLowerCase().includes(q),
	)
	res.status(200).json(filteredRegionObjects)
}

export const getRegionProjects = (req, res) => {
	const { q } = req.query
	const regionCode = req.params.code

	const foundRegion = regions.find((region) => region.regionCode === regionCode)
	const filteredRegionProjects = foundRegion.projects.filter((item) =>
		item.title.toLowerCase().includes(q),
	)
	res.status(200).json(filteredRegionProjects)
}

export const getRegionPhotos = (req, res) => {
	const regionCode = req.params.code
	const foundRegion = regions.find((region) => region.regionCode === regionCode)
	const regionPhotos = foundRegion.photos
	res.status(200).json(regionPhotos)
}

export const getRegionVideos = (req, res) => {
	const regionCode = req.params.code
	const foundRegion = regions.find((region) => region.regionCode === regionCode)
	res.status(200).json(foundRegion.videos)
}

export const getRegionByCode = (req, res) => {
	const regionCode = req.params.code
	const foundRegion = regions.find((region) => region.regionCode === regionCode)

	res.status(200).json(foundRegion)
}

export const getUsers = (req, res) => {
	const { q } = req.query

	const filteredUsers = users.filter((el) => el.fullname.toLowerCase().includes(q))

	res.status(200).json(filteredUsers)
}
export const getUserById = (req, res) => {
	const userId = req.params.id
	const foundUser = users.find((user) => user.id === userId)

	res.status(200).json(foundUser)
}
export const getUsersGroup = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredGroups = searchedUser.groups.filter((group) =>
		group.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredGroups)
}
export const getUsersEvent = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredEvents = searchedUser.events.filter((event) =>
		event.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredEvents)
}
export const getUsersProject = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredProjects = searchedUser.projects.filter((project) =>
		project.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredProjects)
}
export const getUsersObject = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredObjects = searchedUser.objects.filter((object) =>
		object.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredObjects)
}
export const getUsersPhotos = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredPhotos = searchedUser.photos.filter((photo) =>
		photo.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredPhotos)
}
export const getUsersVideos = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredVideos = searchedUser.videos.filter((video) =>
		video.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredVideos)
}
export const getObjects = (req, res) => {
	const { q } = req.query

	const filteredObjects = objects.filter((el) => el.title.toLowerCase().includes(q))

	res.status(200).json(filteredObjects)
}

export const getObjectById = (req, res) => {
	const objectId = req.params.id
	const foundObject = objects.find((object) => object.id === objectId)

	res.status(200).json(foundObject)
}
export const getProjects = (req, res) => {
	const { q } = req.query

	const filteredProjects = projects.filter((el) => el.title.toLowerCase().includes(q))

	res.status(200).json(filteredProjects)
}

export const getProjectById = (req, res) => {
	const projectId = req.params.id
	const foundProject = projects.find((project) => project.id === projectId)

	res.status(200).json(foundProject)
}

export const getNews = (req, res) => {
	const { q, y } = req.query

	const filteredNews = news.filter((el) => {
		if (y) {
			return String(new Date(el.date).getFullYear()) === y && el.title.toLowerCase().includes(q)
		}
		return el.title.toLowerCase().includes(q)
	})

	res.status(200).json(filteredNews)
}

export const getNewsById = (req, res) => {
	const newsId = req.params.id
	const foundNews = news.find((newsItem) => newsItem.id === newsId)

	res.status(200).json(foundNews)
}

export const deleteNews = (req, res) => {
	const newsId = req.params.id
	let deleteIdx
	news.forEach((el, idx) => {
		if (el.id === newsId) {
			deleteIdx = idx
		}
	})
	news.splice(deleteIdx, 1)

	res.status(200).json(deleteIdx)
}

export const getEvents = (req, res) => {
	const { q, y } = req.query

	const filteredEvents = events.filter((el) => {
		if (y) {
			return String(new Date(el.dates[0]).getFullYear()) === y && el.title.toLowerCase().includes(q)
		}
		return el.title.toLowerCase().includes(q)
	})

	res.status(200).json(filteredEvents)
}

export const getEventById = (req, res) => {
	const eventId = req.params.id
	const foundEvent = events.find((eventItem) => eventItem.id === eventId)

	res.status(200).json(foundEvent)
}

export const getNewsVideos = (req, res) => {
	const { q, y } = req.query

	const filteredVideos = newsVideos.filter((el) => {
		if (y) {
			return String(new Date(el.date).getFullYear()) === y && el.title.toLowerCase().includes(q)
		}
		return el.title.toLowerCase().includes(q)
	})

	res.status(200).json(filteredVideos)
}

export const getNewsVideoById = (req, res) => {
	const newsVideoId = req.params.id
	const foundVideoNews = newsVideos.find((newsVideoItem) => newsVideoItem.id === newsVideoId)

	res.status(200).json(foundVideoNews)
}

export const deleteNewsVideo = (req, res) => {
	const videoId = req.params.id
	let deleteIdx
	newsVideos.forEach((el, idx) => {
		if (el.id === videoId) {
			deleteIdx = idx
		}
	})
	newsVideos.splice(deleteIdx, 1)

	res.status(200).json(deleteIdx)
}

export const getEventRequests = (req, res) => {
	res.status(200).json(eventRequests)
}
