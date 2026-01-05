require('dotenv').config();
const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDservices');

const getHomePage = async (req, res) => {
   let results = await getAllUsers();
   console.log(results);
   res.render('home.ejs', { ListUsers: results });
};

const getAbcPage = (req, res) => {
   res.render('sample.ejs');
};

const createPage = (req, res) => {
   res.render('create.ejs');
};

const updatePage = (req, res) => {
   const UserId = req.params.id;
   console.log('UserId:', UserId);
   res.render('update.ejs');
};

const createUser = async (req, res) => {
   let email = req.body.email;
   let name = req.body.name;
   let city = req.body.city;

   let [results, fields] = await connection.query(
      `INSERT INTO User (email,name,city)
         VALUES (?, ?, ?)`,
      [email, name, city],
   );
   res.send('User created successfully!');
};

module.exports = {
   getHomePage,
   getAbcPage,
   createUser,
   createPage,
   updatePage,
};
