import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './route.jsx';
import { CommandeProvider } from './vitrine_composants/hook_personnalise.jsx';
import './CSS.css'
import { ProduitProvider } from './back_office_composants/hookProduitPersonnalise.jsx';
import { CompteProvider } from './back_office_composants/hookPersonnaliseCompte.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommandeProvider>
      <CompteProvider>
      <ProduitProvider>
      <AppRouter />
      </ProduitProvider>
      </CompteProvider>
    </CommandeProvider>
  </StrictMode>
)
