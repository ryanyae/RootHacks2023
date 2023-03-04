const WeatherAPI = require("../Weather/WeatherAPI")
const {search} = require("../Plant-Data/test")

module.exports = {
    // Have API calls from Plant Data and Weather API
    calc: async (req, res) => {
        const value = search("Broccoli")
        console.log(value)
        res.status(200).json({ title: "hello"})
    }

}
