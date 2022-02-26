const Router = require('express').Router()

const ciudadesController = require('../controllers/ciudadesControllers')

const {obtenerCiudades} = ciudadesController

Router.route('/ciudades')
.get(obtenerCiudades)

module.exports = Router
