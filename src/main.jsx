import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './route.jsx';
import './CSS.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
)
