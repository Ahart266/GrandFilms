const express = require('express')
const router = express.Router()
const Video = require('../models/video')

// get one video
router.checkout('/:id', async (req, res) => {
    let video 
    try {
        video = await Video.find(req.params.id)
        if (video == null) { 
            return res.status(404).json({ messge: 'cannot find video'})
        }
     } catch (err) {
        return res.status().json( {message: err.message})
     }
})

module.exports = router