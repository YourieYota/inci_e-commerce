import React, { useState } from "react";
import  {Nav_bar, Nav_bar_with_searchbar, Nav_bar_with_searchbar_vitrine}  from '../composants';
import img_banniere from '../img/banniere_compressee.webp';
import '../CSS.css';
import Carousel from '../carousel';
import { useCommande } from "./hook_personnalise";
import { Link } from "react-router-dom";

export function Accueil_vitr({ active, setActive }){

const [commande_tab, setCommande_tab] = useCommande();

        return(
      <>
      <Nav_bar_with_searchbar_vitrine active={active} setActive={setActive}/>
            <div className='mx-auto bg-white min-h-screen flex relative pt-20'>

                <div className='absolute bg-gray-50 w-[20%] h-[50%] rounded-xl left-5 top-[25%] shadow-xl p-4 pt-10'>
                    <h2 className="text-lg font-bold mb-4 border-b pb-2 text-center">Filtres</h2>
                    <div className="text-left">
                        <h3 className="font-semibold mb-2">Statut</h3>
                        <div className="flex items-center mb-2">
                            <input id="status-all" name="status-filter" type="radio" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="status-all" className="ml-2 text-sm font-medium text-gray-900">Tous</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="status-done" name="status-filter" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                            <label htmlFor="status-done" className="ml-2 text-sm font-medium text-gray-900">Terminé</label>
                        </div>
                        <div className="flex items-center">
                            <input id="status-pending" name="status-filter" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                            <label htmlFor="status-pending" className="ml-2 text-sm font-medium text-gray-900">En cours</label>
                        </div>
                    </div>
                    <div className="text-left mt-4">
                        <h3 className="font-semibold mb-2">Type de produits</h3>
                        <div className="flex items-center mb-2">
                            <input id="product-all" name="product-filter" type="radio" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                            <label htmlFor="product-all" className="ml-2 text-sm font-medium text-gray-900">Tous</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="product-depliant" name="product-filter" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                            <label htmlFor="product-depliant" className="ml-2 text-sm font-medium text-gray-900">Dépliants</label>
                        </div>
                        <div className="flex items-center">
                            <input id="product-card" name="product-filter" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                            <label htmlFor="product-card" className="ml-2 text-sm font-medium text-gray-900">Cartes</label>
                        </div>
                    </div>
                    <div className="text-left mt-4">
                        <h3 className="font-semibold mb-2">Date</h3>
                        <div className="flex items-center mb-2">
                            <input id="date-recent" name="date-sort" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="date-recent" className="ml-2 text-sm font-medium text-gray-900">Plus récent</label>
                        </div>
                        <div className="flex items-center">
                            <input id="date-old" name="date-sort" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="date-old" className="ml-2 text-sm font-medium text-gray-900">Plus ancien</label>
                        </div>
                    </div>
                </div>
                
                <Link to="/commandesPersonnalisee"><div><div className='absolute z-10 w-[60%] bg-gray-50 text-center left-[25%] h-[20%] rounded-xl bg-cover bg-no-repeat bg-center hover:cursor-pointer' style={{ backgroundImage: `url(${img_banniere})` }}>
                </div></div></Link>
                <div className=' flex relative '></div>
                <h1 className=' flex absolute left-1/2 -translate-x-1/2 top-[33%] text-xl font-semibold font-serif'>{"Suggestions pour vous".toUpperCase()}   </h1>
                <Carousel />

                <div className="flex flex-col absolute top-[87%] right-[15%] w-[70%]">
                    <h1 className=' flex  text-xl font-semibold font-serif'>{"Suivi des commandes".toUpperCase()}</h1>
                    <table className='border-1 w-full shadow-2xl border-gray-200'>
                        <thead>
                        <tr className=' border-gray-200'>
                            <th className=' border-gray-200 p-2 w-75 text-left'>
                                    <p>Type de Commandes</p>
                                </th>
                                <th className=' border-gray-200 p-2 w-75 text-left'>
                                    <p>Type de produits</p>
                                </th>
                                <th className=' border-gray-200 p-2 w-75 text-left'>
                                    <p>Date de début de production</p>
                                </th>
                                <th className=' border-gray-200 p-2 w-75 text-left'>
                                    <p>Date de fin de production</p>
                                </th>
                                <th className=' border-gray-200 p-2 w-50 text-left'>
                                    <p>Statut</p>
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            {/*idCom: "CA08102501VI",
            typeProd: "carte de visite",
            catCom: "Commande spéciale",
            qte: "50",
            caract: "nom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date: "20/08/2025",
            statut: "en cours"*/}
                            {commande_tab.map((item, index)=>(
                                <tr key={index}>
                                    <td className='p-2 border-b-1 border-gray-100'>
                                        {item.catCom}
                                    </td>
                                    <td className='p-2 border-b-1 border-gray-100'>
                                        {item.typeProd}
                                    </td>
                                    <td className='p-2 border-b-1 border-gray-100'>
                                        {item.date}
                                    </td>
                                    <td className='p-2 border-b-1 border-gray-100'>
                                        {item.DateFinProd}
                                    </td>
                                    {item.statut === "terminé" ? <td className='p-2 border-b-1 border-gray-100 text-green-500'>
                                        {item.statut}</td> : item.statut === "en cours" ? <td className='p-2 border-b-1 border-gray-100 text-yellow-500'> {item.statut} </td>:  <td className='p-2 border-b-1 border-gray-100 text-red-500'> {item.statut} </td>}
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
                


                
      </>)
    }
function Accueil_vitrine(){
    const [active, setActive] = useState("ACCUEIL");
    return(
        <Accueil_vitr active={active} setActive={setActive}/>
    )
}
export default Accueil_vitrine;
