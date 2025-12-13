require('dotenv').config();
const connection = require('../config/database');


const getHomePage = (req, res) => {

    let users = []

    connection.query(
        'SELECT * FROM `User` u',
        function(err, results, fields) {
            users = results
            console.log(">>> check users: ", users)
            res.send(JSON.stringify(users))
        }
    )
}

const getAbcPage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getAbcPage
}