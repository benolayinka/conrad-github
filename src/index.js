const express =  require('express')
const cors = require('cors')
const https = require('https')
const app = express()
const bookmark = require('./routes/bookmark')
const search = require('./routes/search')

app.use(cors())

app.use('/bookmark', bookmark)
app.use('/search', search)

app.get('/', (req, res) => {
  	res.send(404);
});

const port = process.env.PORT || 3000
app.listen(port, () =>
  console.log('Listening on port ' + port),
);

module.exports = app