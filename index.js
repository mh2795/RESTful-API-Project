const express = require('express')
var cors = require('cors')
const app = express()
const parser = require('body-parser');

app.use(parser.json());

app.use(cors())

app.use(require('./routes/index'))

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});