import React, { useState } from "react";
import  {Nav_bar, Nav_bar_with_searchbar, Nav_bar_with_searchbar_vitrine}  from '../composants';
import img_banniere from '../img/banniere_compressee.webp';
import '../CSS.css';
import Carousel from '../carousel';

export const Tab_com = [
    {
        TypeDeProduits : "dépliants",
        DateDebProd : "12/08/2025",
        DateFinProd : "19/08/2025",
        Statut : "Terminé"
    },
    {
        TypeDeProduits : "carte",
        DateDebProd : "19/09/2025",
        DateFinProd : "27/09/2025",
        Statut : "en cours"
    }
]

export function Accueil_vitr({ active, setActive }){
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
                
                <div className=' absolute w-[60%] bg-gray-50 text-center left-[25%] h-[20%] rounded-xl bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${img_banniere})` }}>
                </div>
                <div className=' flex relative '></div>
                <h1 className=' flex absolute left-[35%] top-[30%] text-xl font-semibold font-serif'>{"Suggestions pour vous".toUpperCase()}   </h1>
                <Carousel />

                <div>
                    <h1 className=' flex absolute top-[67%] left-[35%] text-xl font-semibold font-serif'>{"Suivi des commandes".toUpperCase()}</h1>
                    <table className='border-1 absolute right-0 top-[72%] left-[25%] shadow-2xl border-gray-200'>
                        <caption className='text-left font-semibold'>
                            Commandes
                        </caption>
                        <thead>
                        <tr className='w-[60%]  border-gray-200'>
                                <th className=' border-gray-200 p-2 w-75 text-left'>
                                    <p>Type de produits</p>
                                </th>
                                <th className=' border-gray-200 p-2 w-75 text-left'>
                                    <p>Date de début de production</p>
                                </th>
                                <th className=' border-gray-200 p-2 w-75 text-left'>
                                    <p>Date de fin de production</p>
                                </th>
                                <th className=' border-gray-200 p-2 w-75 text-left'>
                                    <p>Statut</p>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {Tab_com.map((item, index)=>(
                                <tr key={index}>
                                    <td className='p-2 border-b-1 border-gray-100'>
                                        {item.TypeDeProduits}
                                    </td>
                                    <td className='p-2 border-b-1 border-gray-100'>
                                        {item.DateDebProd}
                                    </td>
                                    <td className='p-2 border-b-1 border-gray-100'>
                                        {item.DateFinProd}
                                    </td>
                                    {item.Statut === "Terminé" ? <td className='p-2 border-b-1 border-gray-100 text-green-500'>
                                        {item.Statut}</td> : <td className='p-2 border-b-1 border-gray-100 text-red-500'> {item.Statut} </td>}
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
                


                
      </>)
    }
function Accueil_vitrine(){
    
}
export default Accueil_vitrine;
