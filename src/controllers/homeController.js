require('dotenv').config();
const connection = require('../config/database');


const getHomePage = (req, res) => {
    return res.render('home.ejs')
}

const getAbcPage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getAbcPage
}