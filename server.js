const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotEnv = require("dotenv").config();

const blodsukker = require('./Routes/Api/Blodsukker.js');

const app = express();


/* Body Parser middleware */
app.use(bodyParser.json());

/* DB connections */

mongoose
    .connect(process.env.DB_CONNECTION, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(()=> {
        console.log("DB tilkoblet");
    })
    .catch(err => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.send("Dette funker");
})

/* Blodsukker routes */

app.use('/api/blodsukker', blodsukker);

const port = 5000 || process.env.PORT;

app.listen(port, () => {
    console.log(`Server startet på ${port}`)
});