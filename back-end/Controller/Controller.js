const WeatherAPI = require("../Weather/WeatherAPI")

module.exports = {
    // Have API calls from Plant Data and Weather API
    calc: async (req, res) => {

        res.status(200).json({ title: 'Login Failed', msg: 'Invalid password'})
    }
}
