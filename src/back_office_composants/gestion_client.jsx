import React, { use, useState } from "react";
import { Nav_bar_with_searchbar } from "../composants.jsx";

import ActionMenu from "./composants_client.jsx";

const tab_clit= [
    {
        Nom : "Koffi",
        prenom : "Yao Marc Alex",
        entreprise : "N/A",
        type_de_client : "particulier",
        adresse : "bouake...",
        email : "koffiyao@test.ci",
        contact : "0101010101",
    },
        {
        Nom : "Koffi",
        prenom : "Yao Marc Alex",
        entreprise : "ky entertainment",
        type_de_client : "Entreprise",
        adresse : "bouake...",
        email : "koffiyao@test.ci",
        contact : "0102030405",
    },
       {
        Nom : "Koffi",
        prenom : "Yao Marc Alex",
        entreprise : "N/A",
        type_de_client : "particulier",
        adresse : "bouake...",
        email : "koffiyao@test.ci",
        contact : "0101010101",
    },
        {
        Nom : "Koffi",
        prenom : "Yao Marc Alex",
        entreprise : "ky entertainment",
        type_de_client : "Entreprise",
        adresse : "bouake...",
        email : "koffiyao@test.ci",
        contact : "0102030405",
    },
       {
        Nom : "Koffi",
        prenom : "Yao Marc Alex",
        entreprise : "N/A",
        type_de_client : "particulier",
        adresse : "bouake...",
        email : "koffiyao@test.ci",
        contact : "0101010101",
    },
        {
        Nom : "Koffi",
        prenom : "Yao Marc Alex",
        entreprise : "ky entertainment",
        type_de_client : "Entreprise",
        adresse : "bouake...",
        email : "koffiyao@test.ci",
        contact : "0102030405",
    },
       {
        Nom : "Koffi",
        prenom : "Yao Marc Alex",
        entreprise : "N/A",
        type_de_client : "particulier",
        adresse : "bouake...",
        email : "koffiyao@test.ci",
        contact : "0101010101",
    },
        {
        Nom : "Koffi",
        prenom : "Yao Marc Alex",
        entreprise : "ky entertainment",
        type_de_client : "Entreprise",
        adresse : "bouake...",
        email : "koffiyao@test.ci",
        contact : "0102030405",
    }
]

const index_tab = ["Nom", "Prenoms", "Entreprise", "Type de client", "Adresse", "Email", "Contact", "Actions"]

//pagination


function Gest_client(){
    const [currentPage, setCurrentPage] = useState(1)
    const elementParPage = 10
    const indexDernier = currentPage * elementParPage
    const indexPremier = indexDernier - elementParPage
    const elementActuel = tab_clit.slice(indexPremier, indexDernier)
    const nbPage = Math.ceil(tab_clit.length / elementParPage)
    const [isVisibe, setIsVisible] = useState(false)
    
    const handleChangeVisible = (e)=>{
        e.preventDefault()
        setIsVisible(!isVisibe)
    }


    const getPage = ()=>{
        const pages = []

        if (nbPage <=15){
            for(let i=1; i<= nbPage; i++){
                pages.push(i)
            }
        }else{
            pages.push(1)
            if (currentPage > 5){
                pages.push("...")
            }
            const start= Math.max(2, currentPage - 2)
            const end = Math.min(nbPage-1, currentPage + 2)
                for(let i=start; i<=end; i++){
                    pages.push(i)
                }
                if (currentPage < nbPage - 4) pages.push("...")
                pages.push(nbPage)
            }
        return pages
    }
    
    const pages = getPage()

    return(
        <>
       
        <section className="p-10 ">
            <Nav_bar_with_searchbar/>
        </section>
        <section className="flex container mx-auto flex-row justify-between pb-10">
            <div className="">
                <h1 className="font-bold text-3xl pb-2">Gestion des comptes Clients</h1>
                <p>Gérez et suivez tous vos comptes clients en un seul endroit</p>
            </div>
            <div className="">
                <button className="rounded-lg bg-blue-500 border px-4 py-2 text-white">+  Nouveau Client</button>
            </div>
        </section>
        <div className="container mx-auto pb-10">
            <input type="text" className="w-full border rounded-md h-8 px-15 border-gray-400 shadow-xs shadow-gray-700 bg-gray-100" placeholder="Rechercher par nom,email ou entreprise" />
            <div className="container">
                <svg className="absolute left-52 top-39 hover:cursor-pointer hover:scale-130" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="100" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
            </div>
        </div>
        <section className="container mx-auto min-h-[71vh]">
            <div className="border rounded-lg mx-auto shadow-xs border-gray-300 bg-white">
            <table className="w-full border-gray-300">
                <thead>
                    <tr className="border text-left border-gray-200">
                        {index_tab.map((item, index)=>(
                            <th key={index} className="px-5 py-2">{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="border ">
                    {elementActuel.map((item, index)=>(
                        <tr key={index} className="border border-gray-300">
                            {Object.values(item).map((val, idx)=>{
                                return <td key={idx} className="px-5 py-2">{val}</td>
                            })}
                            <td className="text-center relative" onClick={handleChangeVisible}>
                               <ActionMenu />
                            </td>
                        </tr>
                    )
                    )
                    }
                </tbody>
                    
            </table>
            </div>
            
            <div className="flex flex-row justify-between items-center pt-10 pb-10">
            <button disabled={currentPage === 1} className="bg-white border disabled:opacity-50 border-gray-200 shadow-xs rounded-lg px-5 hover:cursor-pointer py-1" onClick={()=> setCurrentPage(currentPage -1 )} >
                    Précédent
            </button>

            <span className="flex gap-5">
                    {/*[...Array(nbPage)].map((_, index)=>(
                        <button className={`hover:cursor-pointer ${currentPage === index + 1 ? "bg-blue-500 px-2 rounded-full text-white " : ""}`} onClick={()=>setCurrentPage(index+1)} key={index}>
                            {index + 1}
                        </button>    
                    ))
                   */
                        pages.map((p, index)=>(
                            p === "..." ? (<span>...</span>) : (<button className={`hover:cursor-pointer ${currentPage === p ? "bg-blue-500 px-2 rounded-full text-white " : ""}`} onClick={()=>setCurrentPage(p)} key={index}>{p}</button>

                        )))
                  }


            </span> 

            <button disabled={currentPage === nbPage} className="bg-white border border-gray-200 shadow-xs rounded-lg px-5 hover:cursor-pointer py-1 disabled:opacity-50" onClick={()=> setCurrentPage(currentPage + 1 )} >
                    Suivant
            </button>
            </div>
            <div className="text-right">
            <p className="">
                page {currentPage} sur {nbPage}
            </p>
            </div>
            
            
        </section>
        </>
        
    )
}
export default Gest_client;