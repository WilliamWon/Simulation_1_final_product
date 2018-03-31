require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;
const con = require('./controller');
const massive = require("massive");

app.use(bodyParser());
massive(process.env.CONNECTION_STRING).then(dbInstance =>
    app.set('db',dbInstance)).catch(console.log);

app.get('/api/inventory', con.get)
app.post('api/inventory', con.create)

app.listen(port, () => {
    console.log(`I'm listening on port: ${port}`)
})