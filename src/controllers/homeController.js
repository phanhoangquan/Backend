require('dotenv').config();
const connection = require('../config/database');
const { getAllUsers, createNewUser, getUserById } = require('../services/CRUDservices');

const getHomePage = async (req, res) => {
   let results = await getAllUsers();
   res.render('home.ejs', { ListUsers: results });
};

const getAbcPage = (req, res) => {
   res.render('sample.ejs');
};

const createPage = (req, res) => {
   res.render('create.ejs');
};

const updatePage = async (req, res) => {
   let result = await getUserById(req.params.id);
   result = result && result.length > 0 ? result : {};
   res.render('update.ejs', { User: result });
};

const createUser = async (req, res) => {
   let email = req.body.email;
   let name = req.body.name;
   let city = req.body.city;
   await createNewUser(email, name, city);
   res.send('User created successfully!');
};

module.exports = {
   getHomePage,
   getAbcPage,
   createUser,
   createPage,
   updatePage,
};
