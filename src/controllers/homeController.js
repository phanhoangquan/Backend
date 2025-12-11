
const getHomePage = (req, res) => {
    res.send('Hello World! HOMEPAGE')
}

const getAbcPage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getAbcPage
}