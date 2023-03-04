const axios = require('axios')

async function getCurrentWeather() {



    const apiKey = "5d382ab21c274e5780a185652230403"

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
            q: "Vancouver",
            days:1
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

module.exports = { getCurrentWeather }