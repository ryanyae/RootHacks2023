const axios = require('axios')
const {apiKey} = require("../config/env.json")

async function getAverage(city, int) {

    var result = await axios.get('http://api.weatherapi.com/v1/forecast.json', {
        params: {
            key: apiKey,
            q: city,
            days:int
        }
    })
    return (
        result.data.forecast.forecastday[0].day
    )
}

async function getCurrentWeather(city) {
    var result = await axios.get('http://api.weatherapi.com/v1/forecast.json', {
        params: {
            key: apiKey,
            q: city,
            days: "2"
        }
    })

    return result;
}

async function getForecast(city, int) {
    // var result = await axios.get('http://api.weatherapi.com/v1/forecast.json', {
    //     params: {
    //         key: apiKey,
    //         q: city,
    //         day: int
    //     }
    // })

    // return result.data.forecast;
}

async function getAtmPressure(city) {
    var result = await axios.get('http://api.weatherapi.com/v1/current.json', {
        params: {
            key: apiKey,
            q: city,
        }
    })
    return (
        result.data.current.pressure_mb
    )
}

module.exports = { getAverage, getAtmPressure, getCurrentWeather, getForecast }