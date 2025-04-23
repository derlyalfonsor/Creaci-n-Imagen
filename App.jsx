import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CitasPage from './pages/CitasPage';
import NuevaCitaPage from './pages/NuevaCitaPage';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Citas</Link>
        <Link to="/nueva-cita">Nueva Cita</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<CitasPage />} />
        <Route path="/nueva-cita" element={<NuevaCitaPage />} />
      </Routes>
    </Router>
  );
};

export default App;