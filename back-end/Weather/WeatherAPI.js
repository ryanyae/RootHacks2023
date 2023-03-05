const axios = require('axios')
const apiKey = "5d382ab21c274e5780a185652230403"

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
    var result = await axios.get('http://api.weatherapi.com/v1/current.json', {
        params: {
            key: apiKey,
            q: city,
        }
    })

    return result;
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

module.exports = { getAverage, getAtmPressure, getCurrentWeather }