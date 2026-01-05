require('dotenv').config();
const connection = require('../config/database');
const { getAllUsers, createNewUser, getUserById, updateForUser } = require('../services/CRUDservices');

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

const updateUser = async (req, res) => {
   let email = req.body.email;
   let name = req.body.name;
   let city = req.body.city;
   let userId = req.body.userId;
   console.log('>>>check data from client: ', req.body);
   await updateForUser(email, name, city, userId);
   res.redirect('/');
};

const createUser = async (req, res) => {
   let email = req.body.email;
   let name = req.body.name;
   let city = req.body.city;
   await createNewUser(email, name, city);
   res.send('User created successfully!');
};

const deleteUser = async (req, res) => {
   let result = await getUserById(req.params.id);
   res.render('delete.ejs', { User: result });
};

const handleDeleteUser = async (req, res) => {};

module.exports = {
   getHomePage,
   getAbcPage,
   createUser,
   createPage,
   updatePage,
   updateUser,
   deleteUser,
};
