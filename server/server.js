require('./config/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

app.get('/usuarios', function(req, res) {
    res.json('get usuario')
})
app.post('/usuarios', function(req, res) {
    let persona = req.body;
    if (persona.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "el nombre s necesario"
        })
    } else {
        res.json({ persona });
    }

})
app.put('/usuarios/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
})
app.delete('/usuarios', function(req, res) {
    res.json('delete usuario')
})
app.listen(process.env.PORT, () => {
    console.log("escuchando", process.env.PORT);
})