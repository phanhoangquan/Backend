require('dotenv').config();
const connection = require('../config/database');

const getHomePage = (req, res) => {
   res.render('home.ejs');
};

const getAbcPage = (req, res) => {
   res.render('sample.ejs');
};

const createUser = (req, res) => {
   let email = req.body.email;
   let name = req.body.name;
   let city = req.body.city;

   connection.query(
      `INSERT INTO User (email,name,city)
         VALUES (?, ?, ?)`,
      [email, name, city],
      (err, results) => {
         console.log(results);
         res.send('User created successfully!');
      },
   );
};

module.exports = {
   getHomePage,
   getAbcPage,
   createUser,
};
