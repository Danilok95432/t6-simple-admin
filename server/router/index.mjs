import {
	getObjectById,
	getObjects,
	getNews,
	deleteNews,
	getNewsById,
	getEvents,
	getNewsVideos,
	getNewsVideoById,
	deleteNewsVideo,
	getCultures,
	getCultureById,
	deleteCulture,
	deleteObject,
	getNewsByObjectId,
	deleteObjectNews,
	deleteEvent,
	getEventsByObjectId,
	deleteObjectEvents,
} from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/objects', getObjects)
router.get('/objects/:id', getObjectById)
router.get('/objects/:id/news', getNewsByObjectId)
router.get('/objects/:id/events', getEventsByObjectId)
router.delete('/objectDelete/:id', deleteObject)
router.delete('/object/:objectId/newsDelete/:newsId', deleteObjectNews)
router.delete('/object/:objectId/eventDelete/:eventId', deleteObjectEvents)
router.get('/news', getNews)
router.get('/news/:id', getNewsById)
router.delete('/newsDelete/:id', deleteNews)
router.get('/cultures', getCultures)
router.get('/cultures/:id', getCultureById)
router.delete('/cultureDelete/:id', deleteCulture)
router.get('/events', getEvents)
router.delete('/eventDelete/:id', deleteEvent)
router.get('/news-videos', getNewsVideos)
router.get('/news-videos/:id', getNewsVideoById)
router.delete('/newsVideoDelete/:id', deleteNewsVideo)
