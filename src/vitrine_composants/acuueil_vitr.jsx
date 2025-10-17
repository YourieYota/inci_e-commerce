import React, { useEffect, useState } from "react";
import  {Nav_bar, Nav_bar_with_searchbar, Nav_bar_with_searchbar_vitrine}  from '../composants';
import img_banniere from '../img/banniere_compressee.webp';
import '../CSS.css';
import Carousel from '../carousel';
import { useCommande } from "./hook_personnalise";
import { Link } from "react-router-dom";



export function Accueil_vitr({ active, setActive }){

    const [choix, setChoix] = useState("statut")
    const [miniChoix, setMiniChoix] = useState("tous")
const [commande_tab, setCommande_tab] = useCommande();
const handleChange = (e) => {
    setChoix(e.target.value)
}
const handleChangeMini = (e) => {
    setMiniChoix(e.target.value)
}
useEffect(()=>{
    console.log(choix)
}, [choix])

useEffect(()=>{
    console.log(miniChoix)
}, [miniChoix])
        return(
      <>
      <Nav_bar_with_searchbar_vitrine active={active} setActive={setActive}/>
            <div className='mx-auto bg-white min-h-screen flex relative pt-20'>

                <div className='absolute bg-gray-50 w-[20%] h-[50%] rounded-xl left-5 top-[25%] shadow-xl p-4 pt-10'>
                    <h2 className="text-lg font-bold mb-4 border-b pb-2 text-center">Filtres</h2>

                    <div className="text-left">
                        <input id="status" name="Filtre" type="radio" checked={choix === "statut"} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" value={"statut"} onChange={handleChange} /><label htmlFor="status" className="ml-2 text-sm font-medium text-gray-900">Statut</label>
                        <div className={`mx-5 my-3 ${choix === "statut" ? "flex flex-col" : "hidden"}`}>
                        <div className="items-center mb-2 flex">
                            <input id="status-all" name="status-filter" type="radio" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" value={"tous"} onClick={handleChangeMini}/>
                            <label htmlFor="status-all" className="ml-2 text-sm font-medium text-gray-900">Tous</label>
                        </div>
                        <div className="items-center mb-2 flex">
                            <input id="status-done" name="status-filter" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" onClick={handleChangeMini} value={"terminé"}/>
                            <label htmlFor="status-done" className="ml-2 text-sm font-medium text-gray-900">Terminé</label>
                        </div>
                        <div className="items-center flex">
                            <input id="status-pending" name="status-filter" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" onClick={handleChangeMini} value={"en cours"}/>
                            <label htmlFor="status-pending" className="ml-2 text-sm font-medium text-gray-900">En cours</label>
                        </div></div>
                    </div>

                    <div className="text-left mt-4">
                        <input id="type_prod" name="Filtre" type="radio" checked ={choix === "type de produit"} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" value={"type de produit"} onChange={handleChange} /><label htmlFor="type_prod" className="ml-2 text-sm font-medium text-gray-900">Type de produit</label>

                        <div className={`mx-5 my-3 ${choix === "type de produit" ? "flex flex-col" : "hidden"}`}>
                        <div className="flex items-center mb-2">
                            <input id="product-all" name="product-filter" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " value={"tous"} onClick={handleChangeMini} />
                            <label htmlFor="product-all" className="ml-2 text-sm font-medium text-gray-900">Tous</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="product-depliant" name="product-filter" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" onClick={handleChangeMini} value={"depliantts"}/>
                            <label htmlFor="product-depliant" className="ml-2 text-sm font-medium text-gray-900">Dépliants</label>
                        </div>
                        <div className="flex items-center">
                            <input id="product-card" name="product-filter" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" onClick={handleChangeMini} value={"cartes"}/>
                            <label htmlFor="product-card" className="ml-2 text-sm font-medium text-gray-900">Cartes</label>
                        </div></div>
                    </div>

                    <div className="text-left mt-4">
                        <input id="date" name="Filtre" type="radio" checked={choix === "date"} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" value={"date"} onChange={handleChange} /><label htmlFor="date" className="ml-2 text-sm font-medium text-gray-900">Date</label>

                        <div className={`mx-5 my-3 ${choix === "date" ? "flex flex-col" : "hidden"}`}>
                        <div className="flex items-center mb-2">
                            <input id="date-recent" name="date-sort" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={handleChangeMini} value={"plus recent"}/>
                            <label htmlFor="date-recent" className="ml-2 text-sm font-medium text-gray-900">Plus récent</label>
                        </div>
                        <div className="flex items-center">
                            <input id="date-old" name="date-sort" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={handleChangeMini} value={"plus ancien"}/>
                            <label htmlFor="date-old" className="ml-2 text-sm font-medium text-gray-900">Plus ancien</label>
                        </div></div>
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
