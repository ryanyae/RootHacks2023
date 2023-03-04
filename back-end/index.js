const express = require('express');
const app = express();
const cors = require('cors');
const port = 8888;
const fs = require("fs");
app.use(express.json());

app.use("/css", express.static("../front-end/public/css"));

app.use(cors({origin: 'http://localhost:3000', credentials: true}));

app.get('/', (req, res) => {
  res.send(fs.readFileSync("../front-end/public/index.html", "utf8"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});