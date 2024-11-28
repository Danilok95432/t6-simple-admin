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
	deleteEvent,
} from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/objects', getObjects)
router.get('/objects/:id', getObjectById)
router.delete('/objectDelete/:id', deleteObject)
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
