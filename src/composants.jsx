import React, { useState } from "react";
import './CSS.css'
import { Link } from "react-router-dom";
import logo from './img/logo_inci.png'

import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Search,Menu } from "lucide-react";
import gestion_clients from './img/gestion_clients.webp';
import gestion_commande from './img/gestion_commandes.webp';
import gestion_produits from './img/gestion_produits.webp';
import gestion_Comptes from './img/gestion_Comptes.webp';
import { Alert } from "antd";


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
       <header className=" rounded-2xl min-w-screen px-10 fixed left-1/2 -translate-x-1/2 bg-green-700 top-5 ">
            <div className='min-w-screen px-10 mx-auto flex justify-between items-center py-2'>
               <nav>
                 <img src={logo} alt="Logo" className="h-12 w-auto" />
               </nav>
               <nav>
                 <ul className='flex space-x-6'>
                    <li className='text-white hover:text-gray-300 hover:font-serif cursor-pointer font-medium'>ACCUEIL</li>
                   <li className='text-white hover:text-gray-300 hover:font-serif cursor-pointer font-medium'>PRODUITS</li>
                   <li className='text-white hover:text-gray-300 hover:font-serif cursor-pointer font-medium '>A PROPOS</li>
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
      const [isVisible, setIsVisible] = useState(false)
      const [isActive, setIsActive] = useState(false)
      const handleVisible = (e)=>{
        setIsVisible(!isVisible)
        setIsActive(!isActive)
      }
       return(<>
       <header className={`w-screen sm:w-full px-10 fixed left-0 right-0 ${isActive ? "" : "bg-green-700" } top-0  z-10`}>
            <div className='  min-w-screen sm:pl-10 pr-10 flex md:justify-between items-center justify-between py-2 sm:mx-auto'>
             
             <button className="block sm:hidden p-2">
                <Menu onClick={handleVisible}/>
              </button>
             {isVisible && <div className={`absolute left-0 top-0 flex flex-col justify-start bg-green-700 text-white 
              transition-all duration-500 ease-in-out ${isActive  ? "h-screen w-3/4" : "h-0 w-0 overflow-hidden"}
              ${isVisible ? "translate-x-0" : "-translate-x-full"}`}> 
               <div className="flex flex-col gap-5">
                <button className="block p-2 z-10">
                <Menu onClick={handleVisible}/>
              </button>
              <div className="flex">
                <div className="rounded-full border bg-white p-20 mx-auto">

                </div>

              </div>
                  <div className="w-full mx-auto">
                  <ul className='w-full text-center mx-auto flex-col flex gap-2 justify-center items-center'>
                   <li className='text-white py-2 hover:bg-green-500 hover:text-gray-300 hover:font-serif cursor-pointer w-full
                   font-medium ' onClick={()=>{setIsVisible(false) 
                   setIsActive(false)}}><Link to="/back-office" className="w-full block" >ACCUEIL</Link></li>
                   
                    <li onClick={()=>{setIsVisible(false) 
                   setIsActive(false)}} className='text-white py-2 hover:bg-green-500 hover:text-gray-300 hover:font-serif cursor-pointer font-medium w-full '><Link className="w-full block">{"PorduitS".toUpperCase()}</Link></li>
                   
                   <li onClick={()=>{setIsVisible(false) 
                   setIsActive(false)}} className='text-white py-2 hover:bg-green-500 hover:text-gray-300 hover:font-serif cursor-pointer w-full
                   font-medium '><Link className="w-full block">A PROPOS</Link></li>
                 </ul></div>
               </div>
              </div>}
               <nav className="flex items-center justify-between">
                 <img src={logo} alt="Logo" className="hidden sm:block h-12 w-auto" />
               </nav>
               <nav className="flex flex-row mx-auto ">
                 <ul className=' space-x-6 flex-row hidden md:flex '>
                   <Link to="/back-office"><li className='text-white hover:text-gray-300 hover:font-serif cursor-pointer font-medium'>ACCUEIL</li></Link>
                   <li className='text-white hover:text-gray-300 hover:font-serif cursor-pointer font-medium'>PRODUITS</li>
                   <li className='text-white hover:text-gray-300 hover:font-serif cursor-pointer font-medium '>A PROPOS</li>
                 </ul>

               </nav>
               {/*searchbar*/}
               <nav className=" flex items-center mr-10">
                 <Link to="/Connection" >
                  {!isActive && <FaUser className="text-white cursor-pointer w-6 h-6" />}
                 </Link>
               </nav>
                       </div>

    </header></>)
    
    }
    
    export function Nav_bar_with_searchbar_vitrine({ active, setActive }) {
      const handleActive =(e)=>{
        setActive(e.currentTarget.textContent)
        console.log(active)
      }
       return(<>
       <header className=" rounded-2xl min-w-screen px-10 fixed z-20 left-1/2 -translate-x-1/2 bg-green-700 top-0">
            <div className='min-w-screen px-10 flex md:justify-between items-center justify-between py-2 mx-auto'>
              <button className="block sm:hidden p-2">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    className="w-7 h-7 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" strokeLinecap="round" strokeWidth="2">
                  <path
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
               <nav className="flex items-center justify-between">
                 <img src={logo} alt="Logo" className="h-12 w-auto" />
               </nav>
               <nav className="flex flex-row mx-auto">
                 <ul className=' space-x-6 flex-row hidden md:flex'>
                   <Link to={"/accueil_vitr"}><li onClick= {handleActive} className={ ` hover:text-gray-300 hover:font-serif cursor-pointer font-medium ${active === "ACCUEIL" ? "text-black font-bold underline underline-offset-2 " : "text-white"}`}>ACCUEIL</li></Link>
                   <Link to={"/produits_vitrine"}><li onClick={handleActive} className= {` hover:text-gray-300 hover:font-serif cursor-pointer font-medium ${active === "PRODUITS" ? "text-black font-bold underline underline-offset-2 " : "text-white"}`} >PRODUITS</li></Link>

                   <Link to={"/commande"}><li onClick={handleActive} className= {` hover:text-gray-300 hover:font-serif cursor-pointer font-medium ${active === "MES COMMANDES" ? "text-black underline underline-offset-2 " : "text-white"}`} >MES COMMANDES</li></Link>
                   <Link to={"/commandesPersonnalisee"}><li onClick={handleActive} className= {` hover:text-gray-300 hover:font-serif cursor-pointer font-medium ${active === "COMMANDES PERSONNALISEES" ? "text-black font-bold underline underline-offset-2 " : "text-white"}`} >COMMANDES PERSONNALISEES</li></Link>
                 </ul>
                 {/*searchbar*/}
                 <input type="text" placeholder="Rechercher" className="ml-5 rounded-md border-1 px-4 py-1 text-center my-[-5px] border-white text-white hidden md:flex"/>
                 <Search className="m-1 w-20 h-5 text-white cursor-pointer hidden md:flex" />
               </nav>
               

               <nav className=" flex items-center ml-auto">
                <Link to="/commande">
                <button className="relative mx-6 mt-2 cursor-pointer">
                   <FaShoppingCart className="w-6 h-6 text-white cursor-pointer" />
            {/* Badge pour le nombre d'articles */}
                    <span className="absolute -top-1/3 -right-3 bg-red-600 text-white text-xs rounded-full px-2">
                      3
                    </span>
                  </button></Link>
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