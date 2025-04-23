import React from 'react';
import { format } from 'date-fns';
import axios from 'axios';

const CitaCard = ({ cita, onEstadoCambiado }) => {
  const handleAceptar = async () => {
    try {
      await axios.put(`/api/citas/${cita._id}/estado`, { estado: 'aceptada' });
      onEstadoCambiado();
    } catch (error) {
      console.error('Error al aceptar cita:', error);
    }
  };

  const handleRechazar = async () => {
    const motivo = prompt('Ingrese el motivo de rechazo:');
    if (motivo) {
      try {
        await axios.put(`/api/citas/${cita._id}/estado`, { 
          estado: 'rechazada',
          motivoRechazo: motivo
        });
        onEstadoCambiado();
      } catch (error) {
        console.error('Error al rechazar cita:', error);
      }
    }
  };

  return (
    <div className={`cita-card ${cita.estado}`}>
      <h3>{cita.paciente.nombre} {cita.paciente.apellido}</h3>
      <p>Edad: {cita.paciente.edad}</p>
      <p>Teléfono: {cita.paciente.telefono}</p>
      <p>Estudio: {cita.estudio.tipo} - {cita.estudio.area}</p>
      <p>Fecha: {format(new Date(cita.fecha), 'dd/MM/yyyy HH:mm')}</p>
      <p>Estado: {cita.estado}</p>
      
      {cita.estado === 'pendiente' && (
        <div className="acciones">
          <button onClick={handleAceptar}>Aceptar</button>
          <button onClick={handleRechazar}>Rechazar</button>
        </div>
      )}
      
      {cita.estado === 'rechazada' && cita.motivoRechazo && (
        <p>Motivo de rechazo: {cita.motivoRechazo}</p>
      )}
    </div>
  );
};

export default CitaCard;