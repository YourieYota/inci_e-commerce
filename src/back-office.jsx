import React from 'react';
import './CSS.css';
import logo from './img/logo_inci.png';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import  {Nav_bar, Nav_bar_with_searchbar}  from './composants';
import { tab_img_back } from './composants';

function Back() {
    return(
      <>
      <Nav_bar_with_searchbar/>
      <div className='container min-h-screen bg-white mx-auto pt-28 p-4'>
        <h1 className='text-center text-blue-700 text-xl sm:text-2xl font-bold mb-6'>Bonjour Monsieur yourie</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {tab_img_back.map((item)=>(
              <div key={item.id} className='grid grid-cols-1 sm:grid-cols-2 border border-green-700 rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden'>
                  <div  className='flex items-center justify-center'>
                    <img src={item.src} alt={item.name} className="w-full h-full object-cover rounded-l-2xl" />
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                  <h2 className='text-xl md:text-2xl font-bold text-red-600 my-2'>{item.name}</h2>
                  <p className='text-base md:text-lg text-blue-600'>Nombre de {item.nom} : {item.nbre}</p>
                </div>

              </div>
                
            )
            )}</div>
          </div>
  

      <footer className='container m-auto bg-green-700 rounded-2xl flex flex-col items-center justify-center text-white text-center p-4 md:p-6 mt-8'>
               <div className='flex flex-col items-center justify-center m-10'>
                  <p>Créée le 30 Juillet 1897 à Grand-Bassam, l'Imprimerie Nationale totalise plus d'un siècle d'activités graphiques au service de la nation. Elle est l'organe chargée à titre exclusif de la production des imprimés administratifs. L'État lui accorde le monopole à travers le décret n°76-493 du 24 juillet 1976.
                  Abidjan-Plateau, Angle Angoulvant et de l'Avenue Marchand - B.P.V 87 ABIDJAN Côte d'Ivoire
                  Tél: (225) 27 20 30 08 06 - (225) 27 20 30 08 07 - Fax : (225) 27 22 97 55 - E-mail : info@imprimerienationale.ci</p>
               </div>
      </footer>
      </>
      





      )
}
export default Back