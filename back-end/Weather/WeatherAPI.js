const axios = require('axios')
const apiKey = "5d382ab21c274e5780a185652230403"

async function getCurrentWeather(city, int) {
    
    // axios({
    //     method:"get",
    //     url:" http://api.weatherapi.com/v1/current.json",
    //     data: {
    //         key:apiKey
    //     }
    // })
    var result = await axios.get('http://api.weatherapi.com/v1/forecast.json', {
        params: {
            key: apiKey,
            q: city,
            days:int
        }
    })
    return (
        // {
        //     temp: result.data.current.temp_c,
        //     humidity: result.data.current.humidity,
        // }
        result.data.forecast.forecastday[0].day
    )
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

module.exports = { getCurrentWeather, getAtmPressure }