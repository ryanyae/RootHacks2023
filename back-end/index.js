const express = require('express');
const app = express();
const port = 8888;
const fs = require("fs");
app.use(express.json());

app.get('/', (req, res) => {
  res.send(fs.readFileSync("../front-end/public/index.html", "utf8"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});