const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
  paciente: {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    telefono: { type: String, required: true }
  },
  estudio: {
    tipo: { type: String, required: true, enum: ['Rayos X', 'Tomografía', 'Resonancia Magnética', 'Ultrasonido'] },
    area: { type: String, required: true }
  },
  fecha: { type: Date, required: true },
  estado: { type: String, default: 'pendiente', enum: ['pendiente', 'aceptada', 'rechazada'] },
  motivoRechazo: { type: String, default: '' },
  creadoEn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cita', citaSchema);
