const express = require('express');
const router = express.Router();
const { getHomePage, getAbcPage, createUser, createPage, updatePage } = require('../controllers/homeController');

//Khai bao route
router.get('/', getHomePage);
router.get('/abc', getAbcPage);
router.get('/create', createPage);
router.get('/update/:id', updatePage);
router.post('/create-user', createUser);

module.exports = router;
