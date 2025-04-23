import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CitaCard from '../components/CitaCard';

const CitasPage = () => {
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCitas = async () => {
    try {
      const response = await axios.get('/api/citas');
      setCitas(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener citas:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCitas();
  }, []);

  if (loading) return <div>Cargando citas...</div>;

  return (
    <div className="citas-container">
      <h1>Gestión de Citas de Radiología</h1>
      
      <div className="citas-list">
        {citas.length === 0 ? (
          <p>No hay citas programadas</p>
        ) : (
          citas.map(cita => (
            <CitaCard 
              key={cita._id} 
              cita={cita} 
              onEstadoCambiado={fetchCitas}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CitasPage;