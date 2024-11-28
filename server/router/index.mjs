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
	getPromoBlocks,
	deleteObject,
	getNewsByObjectId,
	deleteObjectNews,
} from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/objects', getObjects)
router.get('/objects/:id', getObjectById)
router.get('/objects/:id/news', getNewsByObjectId)
router.delete('/objectDelete/:id', deleteObject)
router.delete('/object/:objectId/newsDelete/:newsId', deleteObjectNews)
router.get('/projects', getProjects)
router.get('/projects/:id', getProjectById)
router.get('/news', getNews)
router.get('/news/:id', getNewsById)
router.delete('/newsDelete/:id', deleteNews)
router.get('/cultures', getCultures)
router.get('/promo-blocks', getPromoBlocks)
router.get('/cultures/:id', getCultureById)
router.delete('/cultureDelete/:id', deleteCulture)
router.get('/events', getEvents)
router.get('/events/:id', getEventById)
router.get('/event-requests', getEventRequests)
router.get('/news-videos', getNewsVideos)
router.get('/news-videos/:id', getNewsVideoById)
router.delete('/newsVideoDelete/:id', deleteNewsVideo)
