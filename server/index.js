const express = require('express')
var cors = require('cors')
const utils = require('./utils');
const app = express()
const port = 3000;

app.use(cors({origin: 'http://localhost:9000'}));


app.get('/json', (req, res) => {
  res.send(utils.readJsonFileSync(__dirname + '/' + "data.json"))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})