const Cita = require('../models/Cita');

// Crear nueva cita
exports.crearCita = async (req, res) => {
  try {
    const nuevaCita = new Cita(req.body);
    await nuevaCita.save();
    res.status(201).json(nuevaCita);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las citas
exports.obtenerCitas = async (req, res) => {
  try {
    const citas = await Cita.find().sort({ fecha: 1 });
    res.status(200).json(citas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar estado de cita (aceptar/rechazar)
exports.actualizarEstadoCita = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado, motivoRechazo } = req.body;
    
    const cita = await Cita.findByIdAndUpdate(
      id,
      { estado, motivoRechazo },
      { new: true }
    );
    
    if (!cita) {
      return res.status(404).json({ error: 'Cita no encontrada' });
    }
    
    res.status(200).json(cita);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};