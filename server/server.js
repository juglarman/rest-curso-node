require('./config/config')
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())
app.use(require('./controllers/usuario'))



mongoose.connect(process.env.URL_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    (error, res) => {

        if (error) throw error;

        console.log('base de datos online');


    }
);
app.listen(process.env.PORT, () => {
    console.log("escuchando", process.env.PORT);
});