import React from 'react';
import './CSS.css';
import logo from './img/logo_inci.png';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

export default function Back() {
  return (
    <header>
       <div className='container mx-auto flex justify-between items-center p-4'>
               <nav>
                 <img src={logo} alt="Logo" className="h-12 w-auto" />
               </nav>
               <nav>
                 <ul className='flex space-x-6'>
                   <li className='text-gray-600 hover:text-blue-600 cursor-pointer font-medium'>ACCUEIL</li>
                   <li className='text-gray-600 hover:text-blue-600 cursor-pointer font-medium'>PRODUITS</li>
                   <li className='text-gray-600 hover:text-blue-600 cursor-pointer font-medium'>A PROPOS</li>
                 </ul>
               </nav>
               <nav>
                 <Link to="./Connection.jsx" >
                 <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'>
                   Sign in
                 </button>
                 </Link>
               </nav>
               </div>
               <div className='container mx-auto flex justify-between items-center bg-gray-100 min-h-screen shadow-lg'>
                    
               </div>
               <footer className=' mx-auto flex justify-between items-center bg-black min-h-50'>

               </footer>

    </header>)
    ;
}
