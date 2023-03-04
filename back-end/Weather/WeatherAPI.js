const axios = require('axios')

const getCurrentWeather = () => {

    const apiKey = 

    axios( {
        method:"get",
        url:" http://api.weatherapi.com/v1",
        data: {
            key:"5d382ab21c274e5780a185652230403"
        }
    })

    return("hello");
}

module.export = {getCurrentWeather}