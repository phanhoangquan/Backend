const express = require('express')
const router = express.Router()
const {getHomePage, getAbcPage,} = require('../controllers/homeController')

//Khai bao route
router.get('/', getHomePage)
router.get('/abc', getAbcPage)

module.exports = router