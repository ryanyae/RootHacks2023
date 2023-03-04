
const {getCurrentWeather} = require("../Weather/WeatherAPI.js")
const {search} = require("../Plant-Data/test")


module.exports = {
    // Have API calls from Plant Data and Weather API
    calc: async (req, res) => {

        // const value = searchKtable("pineapple")
        // console.log(value)
        // res.status(200).json({ title: "hello"})


        var weatherData = await getCurrentWeather();
        console.log(weatherData)

    }

}
