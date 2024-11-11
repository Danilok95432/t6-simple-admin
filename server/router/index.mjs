import {
	getObjectById,
	getObjects,
	getProjectById,
	getProjects,
	getNews,
	deleteNews,
	getNewsById,
	getEvents,
	getEventById,
	getNewsVideos,
	getNewsVideoById,
	deleteNewsVideo,
	getEventRequests,
	getCultures,
	getCultureById,
	deleteCulture,
} from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/objects', getObjects)
router.get('/objects/:id', getObjectById)
router.get('/projects', getProjects)
router.get('/projects/:id', getProjectById)
router.get('/news', getNews)
router.get('/news/:id', getNewsById)
router.delete('/newsDelete/:id', deleteNews)
router.get('/cultures', getCultures)
router.get('/cultures/:id', getCultureById)
router.delete('/cultureDelete/:id', deleteCulture)
router.get('/events', getEvents)
router.get('/events/:id', getEventById)
router.get('/event-requests', getEventRequests)
router.get('/news-videos', getNewsVideos)
router.get('/news-videos/:id', getNewsVideoById)
router.delete('/newsVideoDelete/:id', deleteNewsVideo)
