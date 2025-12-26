require('dotenv').config();
const connection = require('../config/database');

const getHomePage = (req, res) => {
   res.render('home.ejs');
};

const getAbcPage = (req, res) => {
   res.render('sample.ejs');
};

const createUser = (req, res) => {
   console.log('Request Body:', req.body);
   res.send('Create new user');
};

module.exports = {
   getHomePage,
   getAbcPage,
   createUser,
};
