import express from 'express'
const router = express.Router()
import getEventsByPlaceName from '../Controller/eventplace.js'

router.get('/:id', getEventsByPlaceName)

export default router
