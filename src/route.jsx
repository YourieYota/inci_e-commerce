import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './Connection.jsx';
import Back from './back-office.jsx';
import Vitrine from './vitrine.jsx';
import Recup_password from './recup_password.jsx';
import Carousel from './carousel.jsx';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/back-office" element={<Back />} />
        <Route path="/recup_password" element={<Recup_password />} />
        <Route path="/vitrine" element={<Vitrine/>} />
        <Route path="/carousel" element={<Carousel/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;
