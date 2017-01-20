const PORT = process.env.PORT || 3800;
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})