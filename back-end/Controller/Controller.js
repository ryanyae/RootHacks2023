
const { getAverage, getAtmPressure, getCurrentWeather, getForecast } = require("../Weather/WeatherAPI.js")
const { calcTrueK } = require("../Plant-Data/test");
const { json } = require("body-parser");



module.exports = {// Have API calls from Plant Data and Weather API
    calc: async (req, res) => {

        // const value = searchKtable("pineapple")
        var weatherData = await getAverage("Vancouver", 1);
        var atmPressure = await getAtmPressure("Vancouver");
        // console.log(req.body)
        var trueK = calcTrueK(req.body.type, req.body.size);

        var es = (0.6108 * (Math.pow(Math.E, ((17.27 * weatherData.avgtemp_c) / (weatherData.avgtemp_c + 237.3)))))
        var delta = (4098 * es) / (Math.pow((weatherData.avgtemp_c + 237.3), 2))
        var A = (0.0016 * (atmPressure / 10)
            *
            ((delta + 0.078) / (delta + 0.089))
        );
        var evoNum = (0.0588 * (A) * Math.sqrt(weatherData.avgtemp_c) * ((weatherData.avghumidity / 2) + 2.7))
        var finalNum = (trueK.kval * evoNum * 1)
        console.log(finalNum + "L")
        return (res.status(200).json({
            ko: finalNum,
            Eto: evoNum
        }))
    },

    weatherData: async (req, res) => {
        var currentWeather = await getCurrentWeather("Vancouver");
        var forecast = await getAverage("Vancouver", 1);
        return (res.status(200).json({
            temp: currentWeather.data.current.temp_c,
            wind: currentWeather.data.current.wind_kph,
            precip: currentWeather.data.current.precip_mm,
            humid: forecast.avghumidity
        }))
        // return result.data.current.temp_c;
        // res.status(200).json({temp:result.data.current.temp_c, wind:result.data.current.wind_kph, precip:result.data.current.precip_mm})
    },

    getForecast: async (req, res) => {
        var weatherData = await getForecast("Vancouver", 3);

        // console.log(weatherData.forecastday[0])
        // console.log(weatherData.day[1])
        // console.log(weatherData.day[2])

    }
}
