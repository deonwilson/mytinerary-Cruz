const Router = require('express').Router()

const ciudadesController = require('../controllers/ciudadesControllers')

const {obtenerCiudades, cargarCiudad, eliminarCiudad, actualizarCiudad, obtenerCuidadID} = ciudadesController

Router.route('/ciudades')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/ciudades/:id')
.delete(eliminarCiudad)
.put(actualizarCiudad)
.get(obtenerCuidadID)

module.exports = Router
