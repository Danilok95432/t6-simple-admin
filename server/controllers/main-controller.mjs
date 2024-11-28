import { objects } from '../mockData/objects.mjs'
import { news } from '../mockData/news.mjs'
import { events } from '../mockData/events.mjs'
import { newsVideos } from '../mockData/newsVideos.mjs'
import { cultureElements } from '../mockData/cultureElements.mjs'

export const getObjects = (req, res) => {
	const { q } = req.query

	const filteredObjects = objects.filter((el) => el.title.toLowerCase().includes(q))

	res.status(200).json(filteredObjects)
}

export const deleteObject = (req, res) => {
	const objectId = req.params.id
	let deleteIdx
	objects.forEach((el, idx) => {
		if (el.id === objectId) {
			deleteIdx = idx
		}
	})
	objects.splice(deleteIdx, 1)

	res.status(200).json(deleteIdx)
}

export const getObjectById = (req, res) => {
	const objectId = req.params.id
	const foundObject = objects.find((object) => object.id === objectId)

	res.status(200).json(foundObject)
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

export const getCultures = (req, res) => {
	const { q } = req.query

	const filteredCultures = cultureElements.filter((el) => el.title.toLowerCase().includes(q))
	res.status(200).json(filteredCultures)
}

export const getCultureById = (req, res) => {
	const cultureId = req.params.id
	const foundCulture = cultureElements.find((cultureItem) => cultureItem.id === cultureId)

	res.status(200).json(foundCulture)
}

export const deleteCulture = (req, res) => {
	const cultureId = req.params.id
	let deleteIdx
	cultureElements.forEach((el, idx) => {
		if (el.id === cultureId) {
			deleteIdx = idx
		}
	})
	cultureElements.splice(deleteIdx, 1)

	res.status(200).json(deleteIdx)
}

export const getEvents = (req, res) => {
	const { q } = req.query

	const filteredEvents = events.filter((el) => el.title.toLowerCase().includes(q))

	res.status(200).json(filteredEvents)
}

export const deleteEvent = (req, res) => {
	const eventId = req.params.id
	let deleteIdx
	events.forEach((el, idx) => {
		if (el.id === eventId) {
			deleteIdx = idx
		}
	})
	events.splice(deleteIdx, 1)

	res.status(200).json(deleteIdx)
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
