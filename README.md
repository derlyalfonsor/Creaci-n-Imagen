# Sistema de Gestión de Citas de Radiología

Aplicación para gestionar citas de radiología con capacidad de aceptar o rechazar citas.

## Características

- Creación de nuevas citas
- Visualización de todas las citas
- Aceptar o rechazar citas pendientes
- Especificar motivo de rechazo

## Tecnologías

- **Frontend**: React, Vite
- **Backend**: Node.js, Express, MongoDB
- **Despliegue**: Render

## Instalación

### Backend
1. Clonar el repositorio
2. `cd backend`
3. `npm install`
4. Crear archivo `.env` con las variables de entorno
5. `npm start`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`

## Despliegue en Render

1. Crear una nueva instancia de Web Service en Render para el backend
2. Configurar la base de datos MongoDB (puede ser MongoDB Atlas)
3. Crear una nueva instancia de Static Site en Render para el frontend
4. Configurar las variables de entorno necesarias