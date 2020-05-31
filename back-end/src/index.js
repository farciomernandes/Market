const porta = 8080;
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use(routes)

app.listen(porta, ()=>{
    console.log(`Servidor rodando na porta: ${porta}`)
})