import express from 'express'
const router = express.Router()

import getEventsBydetails from '../Controller/eventdetails.js'

router.get('/:id', getEventsBydetails)

export default router
