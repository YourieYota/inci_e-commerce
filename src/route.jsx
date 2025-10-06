import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './Connection.jsx';
import Back from './back-office.jsx';
import Vitrine from './vitrine.jsx';
import Recup_password from './recup_password.jsx';
import Carousel from './carousel.jsx';
import Accueil_vitrine from "./vitrine_composants/acuueil_vitr.jsx"
import Commandes_user from "./vitrine_composants/commande.jsx"
import CommandesPersonnalisees from "./vitrine_composants/commandesPersonnalisee.jsx"
import Produit_vitrine from "./vitrine_composants/produits_vitrine.jsx"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<App />} />*/}
        <Route path="/" element={<Vitrine/>} />
        <Route path="/back-office" element={<Back />} />
        <Route path="/recup_password" element={<Recup_password />} />
        <Route path="/vitrine" element={<Vitrine/>} />
        <Route path="/carousel" element={<Carousel/>} />
        <Route path='/accueil_vitr' element={<Accueil_vitrine/>}/>
        <Route path="commande" element={<Commandes_user/>}/>
        <Route path="commandesPersonnalisee" element={<CommandesPersonnalisees/>} />
        <Route path='produits_vitrine' element={<Produit_vitrine/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;
