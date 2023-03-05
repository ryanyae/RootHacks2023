
const { getAverage, getAtmPressure, getCurrentWeather } = require("../Weather/WeatherAPI.js")
const { calcTrueK } = require("../Plant-Data/test");
const { json } = require("body-parser");



module.exports = {// Have API calls from Plant Data and Weather API
    calc: async (req, res) => {

        // const value = searchKtable("pineapple")
        // console.log(value)
        // res.status(200).json({ title: "hello"})
        var weatherData = await getAverage("Vancouver", 1);
        var atmPressure = await getAtmPressure("Vancouver");
        var trueK = calcTrueK("Zucchini", 10);

        var es = (0.6108 * (Math.pow(Math.E, ((17.27 * weatherData.avgtemp_c) / (weatherData.avgtemp_c + 237.3)))))
        var delta = (4098 * es) / (Math.pow((weatherData.avgtemp_c + 237.3), 2))
        var A = (0.0016 * (atmPressure / 10)
            *
            ((delta + 0.078) / (delta + 0.089))
        );
        var evoNum = (0.0588 * (A) * Math.sqrt(weatherData.avgtemp_c) * ((weatherData.avghumidity / 2) + 2.7))
        var finalNum = (trueK.kval * evoNum * 1)
        // console.log(finalNum)
        return (finalNum)
    },

    weatherData: async (req, res) => {
        var result = await getCurrentWeather("Vancouver");
        // console.log(result.data.current.temp_c)
        // return result.data.current.temp_c;
        res.status(200).json({temp:result.data.current.temp_c})
    }
}
