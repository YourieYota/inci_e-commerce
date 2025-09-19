import React from "react"
import './CSS.css'
import logo from './img/logo_inci.png'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { Search } from "lucide-react";
import gestion_clients from './img/gestion_clients.webp';
import gestion_commande from './img/gestion_commandes.webp';
import gestion_produits from './img/gestion_produits.webp';
import gestion_Comptes from './img/gestion_Comptes.webp';


 export const tab_img_back =[{
    id : 1,
    src : gestion_clients,
    name : "Gestion des clients",
    nom : "clients",
    nbre : 3}, 

    {
    id : 2,
    src : gestion_commande,
    name : "Gestion des commandes",
    nom : "commandes",
    nbre : 3}, 

    {id : 3,
    src : gestion_produits,
    name : "Gestion des produits",
    nom : "produits",
    nbre : 3},

    {id : 4,
    src : gestion_Comptes,
    name : "Gestion des comptes",
    nom : "comptes",
    nbre : 3}
  ]
export function Nav_bar() {
       return(<>
       <header className=" rounded-2xl container fixed left-1/2 -translate-x-1/2 bg-green-700 top-5 px-5">
            <div className='container mx-auto flex justify-between items-center py-2'>
               <nav>
                 <img src={logo} alt="Logo" className="h-12 w-auto" />
               </nav>
               <nav>
                 <ul className='flex space-x-6'>
                    <li className='text-white hover:text-blue-600 hover:font-serif cursor-pointer font-medium'>ACCUEIL</li>
                   <li className='text-white hover:text-blue-600 hover:font-serif cursor-pointer font-medium'>PRODUITS</li>
                   <li className='text-white hover:text-blue-600 hover:font-serif cursor-pointer font-medium '>A PROPOS</li>
                 </ul>
               </nav>
               <nav>
                 <Link to="/" >
                 <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'>
                   Sign in
                 </button>
                 </Link>
               </nav>
               </div>
    </header></>)
    }

    export function Nav_bar_with_searchbar() {
       return(<>
       <header className=" rounded-2xl container fixed left-1/2 -translate-x-1/2 bg-green-700 top-0 px-5 z-10">
            <div className='container mx-auto flex md:justify-between items-center py-2 '>
              <button className="block sm:hidden p-2">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    className="w-7 h-7 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                  <path strokeLinecap="round"  strokeWidth="2" 
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
               <nav className="flex items-center mx-auto">
                 <img src={logo} alt="Logo" className="h-12 w-auto" />
               </nav>
               <nav className="flex flex-row ">
                 <ul className=' space-x-6 flex-row hidden md:flex'>
                   <li className='text-white hover:text-blue-600 hover:font-serif cursor-pointer font-medium'>ACCUEIL</li>
                   <li className='text-white hover:text-blue-600 hover:font-serif cursor-pointer font-medium'>PRODUITS</li>
                   <li className='text-white hover:text-blue-600 hover:font-serif cursor-pointer font-medium '>A PROPOS</li>
                 </ul>
                 <input type="text" placeholder="Rechercher" className="ml-5 rounded-md border-1 px-4 py-1 text-center my-[-5px] border-white text-white hidden md:flex"/>
                 <Search className="m-2 w-5 h-5 text-white cursor-pointer hidden md:flex" />
               </nav>
               {/*searchbar*/}
               <nav className=" flex items-center ml-auto">
                 <Link to="/" >
                  <FaUser className="text-white cursor-pointer w-6 h-6" />
                 </Link>
               </nav>
               
               </div>
    </header></>)
    }
function Component() {

}

export default Component;