import express from 'express'

const router = express.Router()

import {
    spotifyLogin,
    spotifyRefresh,
} from '../controller/spotifyController.js'

import authM from '../middleware/authMiddleware.js'

router.route('/login').post(authM, spotifyLogin)
router.route('/refresh').post(authM, spotifyRefresh)

export default router