const express = require('express');
const router = express.Router();
const { getHomePage, getAbcPage, createUser } = require('../controllers/homeController');

//Khai bao route
router.get('/', getHomePage);
router.get('/abc', getAbcPage);
router.post('/create-user', createUser);

module.exports = router;
