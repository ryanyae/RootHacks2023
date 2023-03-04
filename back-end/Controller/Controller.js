
const {getCurrentWeather} = require("../Weather/WeatherAPI.js")
const {calcTrueK} = require("../Plant-Data/test")


module.exports = {
    // Have API calls from Plant Data and Weather API
    calc: async (req, res) => {

        // const value = searchKtable("pineapple")
        // console.log(value)
        // res.status(200).json({ title: "hello"})

        var weatherData = await getCurrentWeather();
        var trueK = calcTrueK("Zucchini", 10);
        console.log(trueK)
    }
}
