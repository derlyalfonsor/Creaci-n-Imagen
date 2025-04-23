const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citasController');

// Rutas para citas
router.post('/', citasController.crearCita);
router.get('/', citasController.obtenerCitas);
router.put('/:id/estado', citasController.actualizarEstadoCita);

module.exports = router;