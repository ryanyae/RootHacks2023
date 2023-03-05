const express = require('express');
const app = express();
const cors = require('cors');
const port = 8888;
const fs = require("fs");
const bodyParser = require('body-parser')

app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(express.json());
app.use(cors());

const router = require("./Router/Router");
app.use("/router", router)
app.use(bodyParser.json())


// app.get('/', (req, res) => {
//   res.send(fs.readFileSync("../front-end/public/index.html", "utf8"));
// });

app.get('/plants', (req,res) =>{
  res.send(fs.readFileSync("./Plant-Data/plant.html", "utf-8"));
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});