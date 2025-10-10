import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './route.jsx';
import { CommandeProvider } from './vitrine_composants/hook_personnalise.jsx';
import './CSS.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommandeProvider>
      <AppRouter />
    </CommandeProvider>
  </StrictMode>
)
