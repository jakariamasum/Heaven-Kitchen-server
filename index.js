const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
app.use(cors());
const chefs = require('./data/chefs.json')
app.get('/', (req, res) => { res.send("Hello from heavens kitchen!") })

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})