import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './Connection.jsx';
import Back from './back-office.jsx';
import Recup_password from './recup_password.jsx';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/back-office" element={<Back />} />
        <Route path="/recup_password" element={<Recup_password />} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;
