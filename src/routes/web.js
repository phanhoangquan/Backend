const express = require('express');
const router = express.Router();
const {
   getHomePage,
   getAbcPage,
   createUser,
   createPage,
   updatePage,
   updateUser,
} = require('../controllers/homeController');

//Khai bao route
router.get('/', getHomePage);
router.get('/abc', getAbcPage);
router.get('/create', createPage);
router.get('/update/:id', updatePage);
router.post('/create-user', createUser);
router.post('/update-user', updateUser);

module.exports = router;
