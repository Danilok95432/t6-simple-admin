import {
	getObjectById,
	getObjects,
	getProjectById,
	getProjects,
	getRegionByCode,
	getRegionParticipants,
	getRegionEvents,
	getRegionObjects,
	getRegionProjects,
	getRegionPhotos,
	getRegionVideos,
	getRegions,
	getUserById,
	getUsers,
	getUsersEvent,
	getUsersGroup,
	getUsersObject,
	getUsersPhotos,
	getUsersProject,
	getUsersVideos,
	getNews,
	deleteNews,
	getNewsById,
	getEvents,
	getEventById,
	getNewsVideos,
	getNewsVideoById,
	deleteNewsVideo,
	getEventRequests,
} from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/regions', getRegions)
router.get('/regions/:code', getRegionByCode)
router.get('/regions/:code/participants', getRegionParticipants)
router.get('/regions/:code/events', getRegionEvents)
router.get('/regions/:code/objects', getRegionObjects)
router.get('/regions/:code/projects', getRegionProjects)
router.get('/regions/:code/photos', getRegionPhotos)
router.get('/regions/:code/videos', getRegionVideos)
router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.get('/users/:id/group', getUsersGroup)
router.get('/users/:id/event', getUsersEvent)
router.get('/users/:id/project', getUsersProject)
router.get('/users/:id/object', getUsersObject)
router.get('/users/:id/photo', getUsersPhotos)
router.get('/users/:id/video', getUsersVideos)
router.get('/objects', getObjects)
router.get('/objects/:id', getObjectById)
router.get('/projects', getProjects)
router.get('/projects/:id', getProjectById)
router.get('/news', getNews)
router.get('/news/:id', getNewsById)
router.delete('/newsDelete/:id', deleteNews)
router.get('/events', getEvents)
router.get('/events/:id', getEventById)
router.get('/event-requests', getEventRequests)
router.get('/news-videos', getNewsVideos)
router.get('/news-videos/:id', getNewsVideoById)
router.delete('/newsVideoDelete/:id', deleteNewsVideo)
