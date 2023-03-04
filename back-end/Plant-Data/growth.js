const list = `[
    {
     "Crop": "a. Small Vegetables"
    },
    {
     "Crop": "Broccoli",
     "Init. (Lini)": 35,
     "Dev. (Ldev)": 45,
     "Mid (Lmid)": 40,
     "Late (Llate)": 15,
     "Total": 135,
     "Plant Date": "Sept",
     "Region": "Calif. Desert, USA"
    },
    {
     "Crop": "Cabbage",
     "Init. (Lini)": 40,
     "Dev. (Ldev)": 60,
     "Mid (Lmid)": 50,
     "Late (Llate)": 15,
     "Total": 165,
     "Plant Date": "Sept",
     "Region": "Calif. Desert, USA"
    },
    {
     "Crop": "Carrots",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": "50\/30",
     "Late (Llate)": 20,
     "Total": 100,
     "Plant Date": "Oct\/Jan",
     "Region": "Arid climate"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 60,
     "Late (Llate)": 20,
     "Total": 150,
     "Plant Date": "Feb\/Mar",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 50,
     "Mid (Lmid)": 90,
     "Late (Llate)": 30,
     "Total": 200,
     "Plant Date": "Oct",
     "Region": "Calif. Desert, USA"
    },
    {
     "Crop": "Cauliflower",
     "Init. (Lini)": 35,
     "Dev. (Ldev)": 50,
     "Mid (Lmid)": 40,
     "Late (Llate)": 15,
     "Total": 140,
     "Plant Date": "Sept",
     "Region": "Calif. Desert, USA"
    },
    {
     "Crop": "Celery",
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 95,
     "Late (Llate)": 20,
     "Total": 180,
     "Plant Date": "Oct",
     "Region": "(Semi) Arid"
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 45,
     "Late (Llate)": 15,
     "Total": 125,
     "Plant Date": "April",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 55,
     "Mid (Lmid)": 105,
     "Late (Llate)": 20,
     "Total": 210,
     "Plant Date": "Jan",
     "Region": "(Semi) Arid"
    },
    {
     "Crop": "Crucifers1",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 20,
     "Late (Llate)": 10,
     "Total": 80,
     "Plant Date": "April",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 25,
     "Late (Llate)": 10,
     "Total": 95,
     "Plant Date": "February",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 90,
     "Late (Llate)": 40,
     "Total": 195,
     "Plant Date": "Oct\/Nov",
     "Region": "Mediterranean"
    },
    {
     "Crop": "Lettuce",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 15,
     "Late (Llate)": 10,
     "Total": 75,
     "Plant Date": "April",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 25,
     "Late (Llate)": 10,
     "Total": 105,
     "Plant Date": "Nov\/Jan",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 30,
     "Late (Llate)": 10,
     "Total": 100,
     "Plant Date": "Oct\/Nov",
     "Region": "Arid Region"
    },
    {
     "Init. (Lini)": 35,
     "Dev. (Ldev)": 50,
     "Mid (Lmid)": 45,
     "Late (Llate)": 10,
     "Total": 140,
     "Plant Date": "Feb",
     "Region": "Mediterranean"
    },
    {
     "Crop": "Onion (dry)",
     "Init. (Lini)": 15,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 70,
     "Late (Llate)": 40,
     "Total": 150,
     "Plant Date": "April",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 110,
     "Late (Llate)": 45,
     "Total": 210,
     "Plant Date": "Oct; Jan.",
     "Region": "Arid Region; Calif."
    },
    {
     "Crop": "Onion (green)",
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 10,
     "Late (Llate)": 5,
     "Total": 70,
     "Plant Date": "April\/May",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 45,
     "Mid (Lmid)": 20,
     "Late (Llate)": 10,
     "Total": 95,
     "Plant Date": "October",
     "Region": "Arid Region"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 55,
     "Mid (Lmid)": 55,
     "Late (Llate)": 40,
     "Total": 180,
     "Plant Date": "March",
     "Region": "Calif., USA"
    },
    {
     "Crop": "Onion (seed)",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 45,
     "Mid (Lmid)": 165,
     "Late (Llate)": 45,
     "Total": 275,
     "Plant Date": "Sept",
     "Region": "Calif. Desert, USA"
    },
    {
     "Crop": "Spinach",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 20,
     "Mid (Lmid)": "15\/25",
     "Late (Llate)": 5,
     "Total": "60\/70",
     "Plant Date": "Apr; Sep\/Oct",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 40,
     "Late (Llate)": 10,
     "Total": 100,
     "Plant Date": "November",
     "Region": "Arid Region"
    },
    {
     "Crop": "Radish",
     "Init. (Lini)": 5,
     "Dev. (Ldev)": 10,
     "Mid (Lmid)": 15,
     "Late (Llate)": 5,
     "Total": 35,
     "Plant Date": "Mar\/Apr",
     "Region": "Medit.; Europe"
    },
    {
     "Init. (Lini)": 10,
     "Dev. (Ldev)": 10,
     "Mid (Lmid)": 15,
     "Late (Llate)": 5,
     "Total": 40,
     "Plant Date": "Winter",
     "Region": "Arid Region"
    },
    {
     "Crop": "b. Vegetables - Solanum Family&nbsp;(Solanaceae)"
    },
    {
     "Crop": "Egg plant",
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 40,
     "Late (Llate)": 20,
     "Total": "130\\1",
     "Plant Date": "October",
     "Region": "Arid Region"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 45,
     "Mid (Lmid)": 40,
     "Late (Llate)": 25,
     "Total": 40,
     "Plant Date": "May\/June",
     "Region": "Mediterranean"
    },
    {
     "Crop": "Sweet peppers (bell)",
     "Init. (Lini)": "25\/30",
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 40,
     "Late (Llate)": 20,
     "Total": 125,
     "Plant Date": "April\/June",
     "Region": "Europe and Medit."
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 110,
     "Late (Llate)": 30,
     "Total": 210,
     "Plant Date": "October",
     "Region": "Arid Region"
    },
    {
     "Crop": "Tomato",
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 40,
     "Late (Llate)": 25,
     "Total": 135,
     "Plant Date": "January",
     "Region": "Arid Region"
    },
    {
     "Init. (Lini)": 35,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 50,
     "Late (Llate)": 30,
     "Total": 155,
     "Plant Date": "Apr\/May",
     "Region": "Calif., USA"
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 60,
     "Late (Llate)": 30,
     "Total": 155,
     "Plant Date": "Jan",
     "Region": "Calif. Desert, USA"
    },
    {
     "Init. (Lini)": 35,
     "Dev. (Ldev)": 45,
     "Mid (Lmid)": 70,
     "Late (Llate)": 30,
     "Total": 180,
     "Plant Date": "Oct\/Nov",
     "Region": "Arid Region"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 45,
     "Late (Llate)": 30,
     "Total": 145,
     "Plant Date": "April\/May",
     "Region": "Mediterranean"
    },
    {
     "Crop": "c. Vegetables - Cucumber Family&nbsp;(Cucurbitaceae)"
    },
    {
     "Crop": "Cantaloupe",
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 45,
     "Mid (Lmid)": 35,
     "Late (Llate)": 10,
     "Total": 120,
     "Plant Date": "Jan",
     "Region": "Calif., USA"
    },
    {
     "Init. (Lini)": 10,
     "Dev. (Ldev)": 60,
     "Mid (Lmid)": 25,
     "Late (Llate)": 25,
     "Total": 120,
     "Plant Date": "Aug",
     "Region": "Calif., USA"
    },
    {
     "Crop": "Cucumber",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 40,
     "Late (Llate)": 15,
     "Total": 105,
     "Plant Date": "June\/Aug",
     "Region": "Arid Region"
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 50,
     "Late (Llate)": 20,
     "Total": 130,
     "Plant Date": "Nov; Feb",
     "Region": "Arid Region"
    },
    {
     "Crop": "Pumpkin, Winter squash",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 30,
     "Late (Llate)": 20,
     "Total": 100,
     "Plant Date": "Mar, Aug",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 35,
     "Late (Llate)": 25,
     "Total": 120,
     "Plant Date": "June",
     "Region": "Europe"
    },
    {
     "Crop": "Squash, Zucchini",
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 25,
     "Late (Llate)": 15,
     "Total": 100,
     "Plant Date": "Apr; Dec.",
     "Region": "Medit.; Arid Reg."
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 25,
     "Late (Llate)": 15,
     "Total": 90,
     "Plant Date": "May\/June",
     "Region": "Medit.; Europe"
    },
    {
     "Crop": "Sweet melons",
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 40,
     "Late (Llate)": 20,
     "Total": 120,
     "Plant Date": "May",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 50,
     "Late (Llate)": 30,
     "Total": 140,
     "Plant Date": "March",
     "Region": "Calif., USA"
    },
    {
     "Init. (Lini)": 15,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 65,
     "Late (Llate)": 15,
     "Total": 135,
     "Plant Date": "Aug",
     "Region": "Calif. Desert, USA"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 45,
     "Mid (Lmid)": 65,
     "Late (Llate)": 20,
     "Total": 160,
     "Plant Date": "Dec\/Jan",
     "Region": "Arid Region"
    },
    {
     "Crop": "Water melons",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 30,
     "Late (Llate)": 30,
     "Total": 110,
     "Plant Date": "April",
     "Region": "Italy"
    },
    {
     "Init. (Lini)": 10,
     "Dev. (Ldev)": 20,
     "Mid (Lmid)": 20,
     "Late (Llate)": 30,
     "Total": 80,
     "Plant Date": "Mat\/Aug",
     "Region": "Near East (desert)"
    },
    {
     "Crop": "d. Roots and Tubers"
    },
    {
     "Crop": "Beets, table",
     "Init. (Lini)": 15,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 20,
     "Late (Llate)": 10,
     "Total": 70,
     "Plant Date": "Apr\/May",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 25,
     "Late (Llate)": 10,
     "Total": 90,
     "Plant Date": "Feb\/Mar",
     "Region": "Mediterranean &amp; Arid"
    },
    {
     "Crop": "Cassava: year 1",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 90,
     "Late (Llate)": 60,
     "Total": 210,
     "Plant Date": "Rainy",
     "Region": "Tropical regions"
    },
    {
     "Crop": "year 2",
     "Init. (Lini)": 150,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 110,
     "Late (Llate)": 60,
     "Total": 360,
     "Plant Date": "season"
    },
    {
     "Crop": "Potato",
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": "30\/45",
     "Late (Llate)": 30,
     "Total": "115\/130",
     "Plant Date": "Jan\/Nov",
     "Region": "(Semi) Arid Climate"
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 45,
     "Late (Llate)": 30,
     "Total": 130,
     "Plant Date": "May",
     "Region": "Continental Climate"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 50,
     "Late (Llate)": 30,
     "Total": 145,
     "Plant Date": "April",
     "Region": "Europe"
    },
    {
     "Init. (Lini)": 45,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 70,
     "Late (Llate)": 20,
     "Total": 165,
     "Plant Date": "Apr\/May",
     "Region": "Idaho, USA"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 50,
     "Late (Llate)": 25,
     "Total": 140,
     "Plant Date": "Dec",
     "Region": "Calif. Desert, USA"
    },
    {
     "Crop": "Sweet potato",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 60,
     "Late (Llate)": 40,
     "Total": 150,
     "Plant Date": "April",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 15,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 50,
     "Late (Llate)": 30,
     "Total": 125,
     "Plant Date": "Rainy seas.",
     "Region": "Tropical regions"
    },
    {
     "Crop": "Sugarbeet",
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 45,
     "Mid (Lmid)": 90,
     "Late (Llate)": 15,
     "Total": 180,
     "Plant Date": "March",
     "Region": "Calif., USA"
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 90,
     "Late (Llate)": 10,
     "Total": 155,
     "Plant Date": "June",
     "Region": "Calif., USA"
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 65,
     "Mid (Lmid)": 100,
     "Late (Llate)": 65,
     "Total": 255,
     "Plant Date": "Sept",
     "Region": "Calif. Desert, USA"
    },
    {
     "Init. (Lini)": 50,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 50,
     "Late (Llate)": 40,
     "Total": 180,
     "Plant Date": "April",
     "Region": "Idaho, USA"
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 50,
     "Late (Llate)": 50,
     "Total": 160,
     "Plant Date": "May",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 45,
     "Dev. (Ldev)": 75,
     "Mid (Lmid)": 80,
     "Late (Llate)": 30,
     "Total": 230,
     "Plant Date": "November",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 35,
     "Dev. (Ldev)": 60,
     "Mid (Lmid)": 70,
     "Late (Llate)": 40,
     "Total": 205,
     "Plant Date": "November",
     "Region": "Arid Regions"
    },
    {
     "Crop": "e. Legumes&nbsp;(Leguminosae)"
    },
    {
     "Crop": "Beans (green)",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 30,
     "Late (Llate)": 10,
     "Total": 90,
     "Plant Date": "Feb\/Mar",
     "Region": "Calif., Mediterranean"
    },
    {
     "Init. (Lini)": 15,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 25,
     "Late (Llate)": 10,
     "Total": 75,
     "Plant Date": "Aug\/Sep",
     "Region": "Calif., Egypt, Lebanon"
    },
    {
     "Crop": "Beans (dry)",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 40,
     "Late (Llate)": 20,
     "Total": 110,
     "Plant Date": "May\/June",
     "Region": "Continental Climates"
    },
    {
     "Init. (Lini)": 15,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 35,
     "Late (Llate)": 20,
     "Total": 95,
     "Plant Date": "June",
     "Region": "Pakistan, Calif."
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 30,
     "Late (Llate)": 20,
     "Total": 100,
     "Plant Date": "June",
     "Region": "Idaho, USA"
    },
    {
     "Crop": "Faba bean, broad bean",
     "Init. (Lini)": 15,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 35,
     "Late (Llate)": 15,
     "Total": 90,
     "Plant Date": "May",
     "Region": "Europe"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 35,
     "Late (Llate)": 15,
     "Total": 100,
     "Plant Date": "Mar\/Apr",
     "Region": "Mediterranean"
    },
    {
     "Column2": "- dry",
     "Init. (Lini)": 90,
     "Dev. (Ldev)": 45,
     "Mid (Lmid)": 40,
     "Late (Llate)": 60,
     "Total": 235,
     "Plant Date": "Nov",
     "Region": "Europe"
    },
    {
     "Column2": "- green",
     "Init. (Lini)": 90,
     "Dev. (Ldev)": 45,
     "Mid (Lmid)": 40,
     "Late (Llate)": 0,
     "Total": 175,
     "Plant Date": "Nov",
     "Region": "Europe"
    },
    {
     "Crop": "Green gram, cowpeas",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 30,
     "Late (Llate)": 20,
     "Total": 110,
     "Plant Date": "March",
     "Region": "Mediterranean"
    },
    {
     "Crop": "Groundnut",
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 45,
     "Late (Llate)": 25,
     "Total": 130,
     "Plant Date": "Dry",
     "Region": "West Africa"
    },
    {
     "Init. (Lini)": 35,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 35,
     "Late (Llate)": 35,
     "Total": 140,
     "Plant Date": "season",
     "Region": "High Latitudes"
    },
    {
     "Init. (Lini)": 35,
     "Dev. (Ldev)": 45,
     "Mid (Lmid)": 35,
     "Late (Llate)": 25,
     "Total": 140,
     "Plant Date": "May May\/June",
     "Region": "Mediterranean"
    },
    {
     "Crop": "Lentil",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 60,
     "Late (Llate)": 40,
     "Total": 150,
     "Plant Date": "April",
     "Region": "Europe"
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 70,
     "Late (Llate)": 40,
     "Total": 170,
     "Plant Date": "Oct\/Nov",
     "Region": "Arid Region"
    },
    {
     "Crop": "Peas",
     "Init. (Lini)": 15,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 35,
     "Late (Llate)": 15,
     "Total": 90,
     "Plant Date": "May",
     "Region": "Europe"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 35,
     "Late (Llate)": 15,
     "Total": 100,
     "Plant Date": "Mar\/Apr",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 35,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 30,
     "Late (Llate)": 20,
     "Total": 110,
     "Plant Date": "April",
     "Region": "Idaho, USA"
    },
    {
     "Crop": "Soybeans",
     "Init. (Lini)": 15,
     "Dev. (Ldev)": 15,
     "Mid (Lmid)": 40,
     "Late (Llate)": 15,
     "Total": 85,
     "Plant Date": "Dec",
     "Region": "Tropics"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": "30\/35",
     "Mid (Lmid)": 60,
     "Late (Llate)": 25,
     "Total": 140,
     "Plant Date": "May",
     "Region": "Central USA"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 75,
     "Late (Llate)": 30,
     "Total": 150,
     "Plant Date": "June",
     "Region": "Japan"
    },
    {
     "Crop": "f. Perennial Vegetables (with winter dormancy and initially bare or mulched soil)"
    },
    {
     "Crop": "Artichoke",
     "Init. (Lini)": 40,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 250,
     "Late (Llate)": 30,
     "Total": 360,
     "Plant Date": "Apr (1st&nbsp;yr)",
     "Region": "California"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 250,
     "Late (Llate)": 30,
     "Total": 325,
     "Plant Date": "May (2nd&nbsp;yr)",
     "Region": "(cut in May)"
    },
    {
     "Crop": "Asparagus",
     "Init. (Lini)": 50,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 100,
     "Late (Llate)": 50,
     "Total": 230,
     "Plant Date": "Feb",
     "Region": "Warm Winter"
    },
    {
     "Init. (Lini)": 90,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 200,
     "Late (Llate)": 45,
     "Total": 365,
     "Plant Date": "Feb",
     "Region": "Mediterranean"
    },
    {
     "Crop": "g. Fibre Crops"
    },
    {
     "Crop": "Cotton",
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 50,
     "Mid (Lmid)": 60,
     "Late (Llate)": 55,
     "Total": 195,
     "Plant Date": "Mar-May",
     "Region": "Egypt; Pakistan; Calif."
    },
    {
     "Init. (Lini)": 45,
     "Dev. (Ldev)": 90,
     "Mid (Lmid)": 45,
     "Late (Llate)": 45,
     "Total": 225,
     "Plant Date": "Mar",
     "Region": "Calif. Desert, USA"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 50,
     "Mid (Lmid)": 60,
     "Late (Llate)": 55,
     "Total": 195,
     "Plant Date": "Sept",
     "Region": "Yemen"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 50,
     "Mid (Lmid)": 55,
     "Late (Llate)": 45,
     "Total": 180,
     "Plant Date": "April",
     "Region": "Texas"
    },
    {
     "Crop": "Flax",
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 50,
     "Late (Llate)": 40,
     "Total": 150,
     "Plant Date": "April",
     "Region": "Europe"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 100,
     "Late (Llate)": 50,
     "Total": 220,
     "Plant Date": "October",
     "Region": "Arizona"
    },
    {
     "Crop": "h. Oil Crops"
    },
    {
     "Crop": "Castor beans",
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 65,
     "Late (Llate)": 50,
     "Total": 180,
     "Plant Date": "March",
     "Region": "(Semi) Arid Climates"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 50,
     "Late (Llate)": 25,
     "Total": 135,
     "Plant Date": "Nov.",
     "Region": "Indonesia"
    },
    {
     "Crop": "Safflower",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 45,
     "Late (Llate)": 25,
     "Total": 125,
     "Plant Date": "April",
     "Region": "California, USA"
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 55,
     "Late (Llate)": 30,
     "Total": 145,
     "Plant Date": "Mar",
     "Region": "High Latitudes"
    },
    {
     "Init. (Lini)": 35,
     "Dev. (Ldev)": 55,
     "Mid (Lmid)": 60,
     "Late (Llate)": 40,
     "Total": 190,
     "Plant Date": "Oct\/Nov",
     "Region": "Arid Region"
    },
    {
     "Crop": "Sesame",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 40,
     "Late (Llate)": 20,
     "Total": 100,
     "Plant Date": "June",
     "Region": "China"
    },
    {
     "Crop": "Sunflower",
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 45,
     "Late (Llate)": 25,
     "Total": 130,
     "Plant Date": "April\/May",
     "Region": "Medit.; California"
    },
    {
     "Crop": "i. Cereals"
    },
    {
     "Crop": "Barley\/Oats\/Wheat",
     "Init. (Lini)": 15,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 50,
     "Late (Llate)": 30,
     "Total": 120,
     "Plant Date": "November",
     "Region": "Central India"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 60,
     "Late (Llate)": 30,
     "Total": 135,
     "Plant Date": "March\/Apr",
     "Region": "35-45 °L"
    },
    {
     "Init. (Lini)": 15,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 65,
     "Late (Llate)": 40,
     "Total": 150,
     "Plant Date": "July",
     "Region": "East Africa"
    },
    {
     "Init. (Lini)": 40,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 40,
     "Late (Llate)": 20,
     "Total": 130,
     "Plant Date": "Apr"
    },
    {
     "Init. (Lini)": 40,
     "Dev. (Ldev)": 60,
     "Mid (Lmid)": 60,
     "Late (Llate)": 40,
     "Total": 200,
     "Plant Date": "Nov"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 50,
     "Mid (Lmid)": 60,
     "Late (Llate)": 30,
     "Total": 160,
     "Plant Date": "Dec",
     "Region": "Calif. Desert, USA"
    },
    {
     "Crop": "Winter Wheat",
     "Init. (Lini)": 202,
     "Dev. (Ldev)": 602,
     "Mid (Lmid)": 70,
     "Late (Llate)": 30,
     "Total": 180,
     "Plant Date": "December",
     "Region": "Calif., USA"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 140,
     "Mid (Lmid)": 40,
     "Late (Llate)": 30,
     "Total": 240,
     "Plant Date": "November",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 160,
     "Dev. (Ldev)": 75,
     "Mid (Lmid)": 75,
     "Late (Llate)": 25,
     "Total": 335,
     "Plant Date": "October",
     "Region": "Idaho, USA"
    },
    {
     "Crop": "Grains (small)",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 60,
     "Late (Llate)": 40,
     "Total": 150,
     "Plant Date": "April",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 65,
     "Late (Llate)": 40,
     "Total": 165,
     "Plant Date": "Oct\/Nov",
     "Region": "Pakistan; Arid Reg."
    },
    {
     "Crop": "Maize (grain)",
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 50,
     "Mid (Lmid)": 60,
     "Late (Llate)": 40,
     "Total": 180,
     "Plant Date": "April",
     "Region": "East Africa (alt.)"
    },
    {
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 45,
     "Late (Llate)": 30,
     "Total": 140,
     "Plant Date": "Dec\/Jan",
     "Region": "Arid Climate"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 40,
     "Late (Llate)": 30,
     "Total": 125,
     "Plant Date": "June",
     "Region": "Nigeria (humid)"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 40,
     "Late (Llate)": 30,
     "Total": 125,
     "Plant Date": "October",
     "Region": "India (dry, cool)"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 50,
     "Late (Llate)": 30,
     "Total": 150,
     "Plant Date": "April",
     "Region": "Spain (spr, sum.); Calif."
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 50,
     "Late (Llate)": 50,
     "Total": 170,
     "Plant Date": "April",
     "Region": "Idaho, USA"
    },
    {
     "Crop": "Maize (sweet)",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 20,
     "Mid (Lmid)": 30,
     "Late (Llate)": 10,
     "Total": 80,
     "Plant Date": "March",
     "Region": "Philippines"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 25,
     "Late (Llate)": 10,
     "Total": 80,
     "Plant Date": "May\/June",
     "Region": "Mediterranean"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": "50\/30",
     "Late (Llate)": 10,
     "Total": 90,
     "Plant Date": "Oct\/Dec",
     "Region": "Arid Climate"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 30,
     "Late (Llate)": 103,
     "Total": 110,
     "Plant Date": "April",
     "Region": "Idaho, USA"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 70,
     "Late (Llate)": 10,
     "Total": 140,
     "Plant Date": "Jan",
     "Region": "Calif. Desert, USA"
    },
    {
     "Crop": "Millet",
     "Init. (Lini)": 15,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 40,
     "Late (Llate)": 25,
     "Total": 105,
     "Plant Date": "June",
     "Region": "Pakistan"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 55,
     "Late (Llate)": 35,
     "Total": 140,
     "Plant Date": "April",
     "Region": "Central USA"
    },
    {
     "Crop": "Sorghum",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 40,
     "Late (Llate)": 30,
     "Total": 130,
     "Plant Date": "May\/June",
     "Region": "USA, Pakis., Med."
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 35,
     "Mid (Lmid)": 45,
     "Late (Llate)": 30,
     "Total": 140,
     "Plant Date": "Mar\/April",
     "Region": "Arid Region"
    },
    {
     "Crop": "Rice",
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 60,
     "Late (Llate)": 30,
     "Total": 150,
     "Plant Date": "Dec; May",
     "Region": "Tropics; Mediterranean"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 80,
     "Late (Llate)": 40,
     "Total": 180,
     "Plant Date": "May",
     "Region": "Tropics"
    },
    {
     "Crop": "j. Forages"
    },
    {
     "Crop": "Alfalfa, total season&nbsp;4",
     "Init. (Lini)": 10,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": "var.",
     "Late (Llate)": "var.",
     "Total": "var.",
     "Region": "last -4°C in spring until first -4°C in fall"
    },
    {
     "Crop": "Alfalfa&nbsp;4&nbsp;1st&nbsp;cutting cycle",
     "Init. (Lini)": 10,
     "Dev. (Ldev)": 20,
     "Mid (Lmid)": 20,
     "Late (Llate)": 10,
     "Total": 60,
     "Plant Date": "Jan Apr (last - 4°C)",
     "Region": "Calif., USA."
    },
    {
     "Init. (Lini)": 10,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 25,
     "Late (Llate)": 10,
     "Total": 75,
     "Region": "Idaho, USA."
    },
    {
     "Crop": "Alfalfa&nbsp;4, other cutting cycles",
     "Init. (Lini)": 5,
     "Dev. (Ldev)": 10,
     "Mid (Lmid)": 10,
     "Late (Llate)": 5,
     "Total": 30,
     "Plant Date": "Mar",
     "Region": "Calif., USA."
    },
    {
     "Init. (Lini)": 5,
     "Dev. (Ldev)": 20,
     "Mid (Lmid)": 10,
     "Late (Llate)": 10,
     "Total": 45,
     "Plant Date": "Jun",
     "Region": "Idaho, USA."
    },
    {
     "Crop": "Bermuda for seed",
     "Init. (Lini)": 10,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 35,
     "Late (Llate)": 35,
     "Total": 105,
     "Plant Date": "March",
     "Region": "Calif. Desert, USA"
    },
    {
     "Crop": "Bermuda for hay (several cuttings)",
     "Init. (Lini)": 10,
     "Dev. (Ldev)": 15,
     "Mid (Lmid)": 75,
     "Late (Llate)": 35,
     "Total": 135,
     "Plant Date": "---",
     "Region": "Calif. Desert, USA"
    },
    {
     "Crop": "Grass Pasture&nbsp;4",
     "Init. (Lini)": 10,
     "Dev. (Ldev)": 20,
     "Mid (Lmid)": "--",
     "Late (Llate)": "--",
     "Total": "--",
     "Region": "7 days before last -4°C in spring until 7 days after first -4°C in fall"
    },
    {
     "Crop": "Sudan, 1st&nbsp;cutting cycle",
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 25,
     "Mid (Lmid)": 15,
     "Late (Llate)": 10,
     "Total": 75,
     "Plant Date": "Apr",
     "Region": "Calif. Desert, USA"
    },
    {
     "Crop": "Sudan, other cutting cycles",
     "Init. (Lini)": 3,
     "Dev. (Ldev)": 15,
     "Mid (Lmid)": 12,
     "Late (Llate)": 7,
     "Total": 37,
     "Plant Date": "June",
     "Region": "Calif. Desert, USA"
    },
    {
     "Crop": "k. Sugar Cane"
    },
    {
     "Crop": "Sugarcane, virgin",
     "Init. (Lini)": 35,
     "Dev. (Ldev)": 60,
     "Mid (Lmid)": 190,
     "Late (Llate)": 120,
     "Total": 405,
     "Region": "Low Latitudes"
    },
    {
     "Init. (Lini)": 50,
     "Dev. (Ldev)": 70,
     "Mid (Lmid)": 220,
     "Late (Llate)": 140,
     "Total": 480,
     "Region": "Tropics"
    },
    {
     "Init. (Lini)": 75,
     "Dev. (Ldev)": 105,
     "Mid (Lmid)": 330,
     "Late (Llate)": 210,
     "Total": 720,
     "Region": "Hawaii, USA"
    },
    {
     "Crop": "Sugarcane, ratoon",
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 70,
     "Mid (Lmid)": 135,
     "Late (Llate)": 50,
     "Total": 280,
     "Region": "Low Latitudes"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 50,
     "Mid (Lmid)": 180,
     "Late (Llate)": 60,
     "Total": 320,
     "Region": "Tropics"
    },
    {
     "Init. (Lini)": 35,
     "Dev. (Ldev)": 105,
     "Mid (Lmid)": 210,
     "Late (Llate)": 70,
     "Total": 420,
     "Region": "Hawaii, USA"
    },
    {
     "Crop": "l. Tropical Fruits and Trees"
    },
    {
     "Crop": "Banana, 1st&nbsp;yr",
     "Init. (Lini)": 120,
     "Dev. (Ldev)": 90,
     "Mid (Lmid)": 120,
     "Late (Llate)": 60,
     "Total": 390,
     "Plant Date": "Mar",
     "Region": "Mediterranean"
    },
    {
     "Crop": "Banana, 2nd&nbsp;yr",
     "Init. (Lini)": 120,
     "Dev. (Ldev)": 60,
     "Mid (Lmid)": 180,
     "Late (Llate)": 5,
     "Total": 365,
     "Plant Date": "Feb",
     "Region": "Mediterranean"
    },
    {
     "Crop": "Pineapple",
     "Init. (Lini)": 60,
     "Dev. (Ldev)": 120,
     "Mid (Lmid)": 600,
     "Late (Llate)": 10,
     "Total": 790,
     "Region": "Hawaii, USA"
    },
    {
     "Crop": "m. Grapes and Berries"
    },
    {
     "Crop": "Grapes",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 120,
     "Late (Llate)": 60,
     "Total": 240,
     "Plant Date": "April",
     "Region": "Low Latitudes"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 50,
     "Mid (Lmid)": 75,
     "Late (Llate)": 60,
     "Total": 205,
     "Plant Date": "Mar",
     "Region": "Calif., USA"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 50,
     "Mid (Lmid)": 90,
     "Late (Llate)": 20,
     "Total": 180,
     "Plant Date": "May",
     "Region": "High Latitudes"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 60,
     "Mid (Lmid)": 40,
     "Late (Llate)": 80,
     "Total": 210,
     "Plant Date": "April",
     "Region": "Mid Latitudes (wine)"
    },
    {
     "Crop": "Hops",
     "Init. (Lini)": 25,
     "Dev. (Ldev)": 40,
     "Mid (Lmid)": 80,
     "Late (Llate)": 10,
     "Total": 155,
     "Plant Date": "April",
     "Region": "Idaho, USA"
    },
    {
     "Crop": "n. Fruit Trees"
    },
    {
     "Crop": "Citrus",
     "Init. (Lini)": 60,
     "Dev. (Ldev)": 90,
     "Mid (Lmid)": 120,
     "Late (Llate)": 95,
     "Total": 365,
     "Plant Date": "Jan",
     "Region": "Mediterranean"
    },
    {
     "Crop": "Deciduous Orchard",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 70,
     "Mid (Lmid)": 90,
     "Late (Llate)": 30,
     "Total": 210,
     "Plant Date": "March",
     "Region": "High Latitudes"
    },
    {
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 70,
     "Mid (Lmid)": 120,
     "Late (Llate)": 60,
     "Total": 270,
     "Plant Date": "March",
     "Region": "Low Latitudes"
    },
    {
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 50,
     "Mid (Lmid)": 130,
     "Late (Llate)": 30,
     "Total": 240,
     "Plant Date": "March",
     "Region": "Calif., USA"
    },
    {
     "Crop": "Olives",
     "Init. (Lini)": 30,
     "Dev. (Ldev)": 90,
     "Mid (Lmid)": 60,
     "Late (Llate)": 90,
     "Total": 2705,
     "Plant Date": "March",
     "Region": "Mediterranean"
    },
    {
     "Crop": "Pistachios",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 60,
     "Mid (Lmid)": 30,
     "Late (Llate)": 40,
     "Total": 150,
     "Plant Date": "Feb",
     "Region": "Mediterranean"
    },
    {
     "Crop": "Walnuts",
     "Init. (Lini)": 20,
     "Dev. (Ldev)": 10,
     "Mid (Lmid)": 130,
     "Late (Llate)": 30,
     "Total": 190,
     "Plant Date": "April",
     "Region": "Utah, USA"
    },
    {
     "Crop": "o. Wetlands - Temperate Climate"
    },
    {
     "Crop": "Wetlands (Cattails, Bulrush)",
     "Init. (Lini)": 10,
     "Dev. (Ldev)": 30,
     "Mid (Lmid)": 80,
     "Late (Llate)": 20,
     "Total": 140,
     "Plant Date": "May",
     "Region": "Utah, USA; killing frost"
    },
    {
     "Init. (Lini)": 180,
     "Dev. (Ldev)": 60,
     "Mid (Lmid)": 90,
     "Late (Llate)": 35,
     "Total": 365,
     "Plant Date": "November",
     "Region": "Florida, USA"
    },
    {
     "Crop": "Wetlands (short veg.)",
     "Init. (Lini)": 180,
     "Dev. (Ldev)": 60,
     "Mid (Lmid)": 90,
     "Late (Llate)": 35,
     "Total": 365,
     "Plant Date": "November",
     "Region": "frost-free climate"
    }
   ]`

   module.export = list