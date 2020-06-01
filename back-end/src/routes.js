const express = require('express');
const EmpresasController = require('./controllers/EmpresaController');
const ProductsController = require('./controllers/ProductController');
const SessionController = require("./controllers/SessionController");

const routes = express.Router()

routes.post('/session/:email/:senha', SessionController.login)

routes.post('/empresa', EmpresasController.create);
routes.get('/empresa', EmpresasController.index);
routes.delete('/empresa', EmpresasController.delete)

routes.get('/product/:email', ProductsController.index);
routes.post('/product', ProductsController.create);
routes.delete('/product/:empresa_email/:id', ProductsController.delete);


module.exports = routes;