const PORT = process.env.PORT || 3800;
const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => {
  const javascriptUrl = './bundle.js';

  res.render('index.html.hbs', {
    javascriptUrl,
  })
})

// Server Config
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})