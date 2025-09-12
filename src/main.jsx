import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './ROUTE.JSX';
import './CSS.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
)
