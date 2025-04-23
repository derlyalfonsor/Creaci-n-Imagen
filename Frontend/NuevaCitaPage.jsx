import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NuevaCitaPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    paciente: {
      nombre: '',
      apellido: '',
      edad: '',
      telefono: ''
    },
    estudio: {
      tipo: 'Rayos X',
      area: ''
    },
    fecha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/citas', formData);
      navigate('/');
    } catch (error) {
      console.error('Error al crear cita:', error);
    }
  };

  return (
    <div className="nueva-cita">
      <h1>Nueva Cita de Radiología</h1>
      
      <form onSubmit={handleSubmit}>
        <h2>Datos del Paciente</h2>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            name="paciente.nombre" 
            value={formData.paciente.nombre} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div>
          <label>Apellido:</label>
          <input 
            type="text" 
            name="paciente.apellido" 
            value={formData.paciente.apellido} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div>
          <label>Edad:</label>
          <input 
            type="number" 
            name="paciente.edad" 
            value={formData.paciente.edad} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div>
          <label>Teléfono:</label>
          <input 
            type="tel" 
            name="paciente.telefono" 
            value={formData.paciente.telefono} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <h2>Detalles del Estudio</h2>
        <div>
          <label>Tipo de Estudio:</label>
          <select 
            name="estudio.tipo" 
            value={formData.estudio.tipo} 
            onChange={handleChange}
          >
            <option value="Rayos X">Rayos X</option>
            <option value="Tomografía">Tomografía</option>
            <option value="Resonancia Magnética">Resonancia Magnética</option>
            <option value="Ultrasonido">Ultrasonido</option>
          </select>
        </div>
        
        <div>
          <label>Área del Cuerpo:</label>
          <input 
            type="text" 
            name="estudio.area" 
            value={formData.estudio.area} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div>
          <label>Fecha y Hora:</label>
          <input 
            type="datetime-local" 
            name="fecha" 
            value={formData.fecha} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <button type="submit">Programar Cita</button>
      </form>
    </div>
  );
};

export default NuevaCitaPage;