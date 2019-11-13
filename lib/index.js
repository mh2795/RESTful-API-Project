const express = require('express')
const app = express()
const parser = require('body-parser');

app.use(parser.json());

app.use(require('./routes/index'))

app.listen(8000, () => {console.log('listening on port 8000')})