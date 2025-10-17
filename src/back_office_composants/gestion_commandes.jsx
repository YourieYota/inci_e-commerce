import React, { useState } from "react";
import { Nav_bar_with_searchbar } from "../composants";
import total_com_img from "../img/icone/icone_total_commande.webp"
import icone_erreur from "../img/icone/icone_erreur.webp"
import icone_termine from "../img/icone/icone_termine.webp"
import icone_attent from "../img/icone/icone_en_attente.webp"
import {useCommande} from "../vitrine_composants/hook_personnalise.jsx"


function Gest_com(){
     const [commande_tab, setCommande_tab] = useCommande()
    const [currentPage, setCurrentPage] = useState(1)
    const elementParPage = 10
    const indexDernier = currentPage * elementParPage
    const indexPremier = indexDernier - elementParPage
    const elementActuel = commande_tab.slice(indexPremier, indexDernier)
    const nbPage = Math.ceil(commande_tab.length / elementParPage)


    const getpage = ()=>{
        const pages =[]
        pages.push(1)
        if(nbPage <=15){
            for(let i = 1; i<= nbPage; i++){
                pages.push(i)
            }
        }else{
            if(currentPage > 5){
                pages.push("...")
            }
            const start = Math.max(2, currentPage - 2)
            const end = Math.min(nbPage - 1, currentPage + 2)
            
        }
    }
   
    const index_tab = ["idCom","entreprise","catCom","typeProd","qte","statut"]
    const titre_tab = ["N° Commande", "Client", "Catégorie de Commande", "Type de Produit",  "Quantité", "Statut","Montant", "Action" ]
    const dashboardTab = [
        {
            titre : "Total Commandes",
            qte : "156",
            icone :total_com_img,
        },
        {
            titre : "En Attente",
            qte : "23",
            icone :icone_erreur,
        },
        {
            titre : "en Cours",
            qte : "8",
            icone : icone_attent,
        },
        {
            titre : "Terminées",
            qte : "118",
            icone :icone_termine,
        }
    ]
    return(

        <>
            <section className="pb-20">
                <Nav_bar_with_searchbar/>
            </section>

            <section className="container mx-auto">
                <div className="flex flex-col gap-1 pb-10">
                    <h1 className="text-3xl font-bold font-serif ">Gestion des commandes</h1>
                <p className="text-gray-500 font-serif">Gérez vos commandes d'impression, générez des factures et envoyez des notifications</p>
                </div>

                <div className="grid grid-cols-4 gap-2 space-x-2 pb-10">
                    {dashboardTab.map((item, index)=>(
                        <div key={index} className="rounded-xl bg-white border border-gray-300 shadow-xl p-10">
                            <div className="flex flex-row justify-between">
                                <div className="felx flex-col gap-2">
                                    <p className=" font-serif text-gray-500 text-lg">
                                        {item.titre}
                                    </p>
                                    <p className="font-bold text-2xl font-serif ">
                                        {item.qte}
                                    </p>
                                </div>
                                <div>
                                    <img src={item.icone} alt="" />
                                </div>
                            </div>
                            
                        </div>
                    )
                    )}
                </div>
            </section>

            <section className="container mx-auto">
                <div className="w-full border border-gray-300 shadow-xl rounded-lg p-4 bg-white">
                    <div className="flex justify-between pb-10">
                        <p className=" font-bold text-2xl font-serif">
                        Commandes récentes
                        </p>
                        
                        <input type="text" className="border border-gray-300 rounded-lg p-2 w-70 font-serif px-10" placeholder="Rechercher..."/>

                        <svg className="absolute right-112 top-88 hover:cursor-pointer hover:scale-130" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="100" viewBox="0 0 50 50">
                            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                        </svg>

                        
                    </div>
                    
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-300">
                                {titre_tab.map((item, index)=>(
                                   <td key={index} className="pb-2">{item}</td>
                                ))
                                    }
                            </tr>
                        </thead>

                        <tbody>
                            {elementActuel.map((item, index)=>(
                                <tr key={index} className="border-b border-gray-300">
                                    {index_tab.map((val, idx)=>(
                                        <td key={idx} className="pb-3">{item[val]}</td>
                                    ))}
                                    <td className="">_</td>
                                    <td>
                                        ⋮
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="text-center pt-3 space-x-3">
                        {[...Array(nbPage)].map((item, index)=>(
                                 <button className={`hover:cursor-pointer ${currentPage === index + 1 ? "bg-blue-500 px-2 rounded-full text-white " : ""}`} onClick={()=>setCurrentPage(index+1)} key={index}>
                            {index + 1}
                        </button>    
                        ))}
                    </div>

                    <div className="flex flex-row justify-between">
                    <button disabled={currentPage === 1} className="disabled:bg-gray-100 p-2 rounded-lg border border-gray-300 hover:cursor-pointer px-5" onClick={()=> setCurrentPage(currentPage - 1)}>
                        Précedent
                    </button>

                    <button disabled={currentPage === nbPage} className="disabled:bg-gray-100 p-2 rounded-lg border border-gray-300 hover:cursor-pointer px-10" onClick={()=> setCurrentPage(currentPage + 1)}>
                        Suivant
                    </button>
                </div>
                </div>

                
            </section>

        </>
    )
}
export default Gest_com;