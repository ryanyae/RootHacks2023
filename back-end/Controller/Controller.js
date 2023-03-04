const {getCurrentWeather} = require("../Weather/WeatherAPI.js")
const {search} = require("../Plant-Data/test")

module.exports = {
    // Have API calls from Plant Data and Weather API
    calc: async (req, res) => {

        var weatherData = await getCurrentWeather();
        console.log(weatherData)
    }

}
