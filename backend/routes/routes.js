const Router = require('express').Router()

const ciudadesController = require('../controllers/ciudadesControllers')
const itinerariosController =require('../controllers/itinerariosController')
const {obtenerCiudades, cargarCiudad, eliminarCiudad, actualizarCiudad, obtenerCuidadID} = ciudadesController
const {obtenerItinerarios, cargarItinerario, eliminarItinerario, actualizarItinerario, obtenerItinerarioID} = itinerariosController

//ciudades
Router.route('/ciudades')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/ciudades/:id')
.delete(eliminarCiudad)
.put(actualizarCiudad)
.get(obtenerCuidadID)

//itinerarios

Router.route('/itinerarios')
.get(obtenerItinerarios)
.post(cargarItinerario)

Router.route('/itinerarios/:id')
.delete(eliminarItinerario)
.put(actualizarItinerario)
.get(obtenerItinerarioID)

module.exports = Router