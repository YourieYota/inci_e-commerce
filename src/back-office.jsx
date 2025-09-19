import React from 'react';
import './CSS.css';
import logo from './img/logo_inci.png';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import  {Nav_bar, Nav_bar_with_searchbar}  from './composants';
import { tab_img_back } from './composants';

function Back() {
    return(
      <>
      <Nav_bar_with_searchbar />
      <div className='container min-h-screen bg-white mx-auto mt-25'>
        <span className='flex align-middle justify-center text-blue-700 text-2xl'> <h1>Bonjour Monsieur yourie</h1></span>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4 justify-center'>
            {tab_img_back.map((item)=>(
              <div key={item.id} className='grid grid-cols-2 grid-rows-1 border-1 rounded-2xl border-green-700  cursor-pointer hover:scale-104'>
                  <div  className='flex'>
                    <img src={item.src} alt="test" className="rounded-2xl" />
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                  <h1 className='text-3xl text-red-600 my-2'>{item.name}</h1>
                  <p className='text-xl text-blue-600'>Nombre de {item.nom} : {item.nbre}</p>
                </div>

              </div>
                
            )
            )}</div>
          </div>
  

      <footer className='container m-auto bg-green-700 h-90 md:h-70 rounded-2xl flex flex-col items-center justify-center text-xl text-white text-center '>
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