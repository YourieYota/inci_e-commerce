import React, { use, useState } from "react";
import { Nav_bar_with_searchbar } from "../composants.jsx";
import { Search } from "lucide-react";
import ActionMenu from "./composants_client.jsx";
import { useClient } from "./hookPersonaliseeClient.jsx";


//pagination

function Gest_client(){
    const [tab_clit, setTab_clit] = useClient()
    const [searchItem, setSearchItem] = useState("")
    const [elsementSearch, setElementSearch] = useState(tab_clit)
    const [error, setError] = useState("")
    const entete_tab = ["id","Nom", "Prenoms", "Entreprise", "Type de client", "Adresse", "Email", "Contact", "Actions"]
    /*
    id: 1,
    Nom: "Koffi",
    prenom: "Yao Marc Alex",
    entreprise: "N/A",
    type_de_client: "particulier",
    adresse: "Bouaké, quartier Air France",
    email: "koffiyao@test.ci",
    contact: "0101010101",
    */ 
    const index_tab = ["id","Nom", "prenom", "entreprise", "type_de_client", "adresse", "email", "contact"]
    const [currentPage, setCurrentPage] = useState(1)
    const elementParPage = 10
    const indexDernier = currentPage * elementParPage
    const indexPremier = indexDernier - elementParPage
    const elementActuel = elsementSearch.slice(indexPremier, indexDernier)
    const nbPage = Math.ceil(elsementSearch.length / elementParPage)
    const [isVisibe, setIsVisible] = useState(false)
    
    const handleChangeVisible = (e)=>{
        e.preventDefault()
        setIsVisible(!isVisibe)
    }

    const handleSearch =(e)=>{
        const valeur = e.target.value?.toString().toLowerCase() || e.target.toString()
        setSearchItem(valeur)
        if (valeur === ""){
            setElementSearch(tab_clit)
            setError("")
        }else{
            const resultat =tab_clit.filter((item)=>
                [item.id, item.Nom ,item.prenom ,item.entreprise , item.type_de_client, item.adresse, item.email, item.contact].some((val)=>
                    val?.toString().toLowerCase().includes(valeur)
                ))
            if (resultat.length >0){
                setElementSearch(resultat)
                setError("")
            }
            else{
                setError("OOPS Aucun résultat trouvé")
            }
        }

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
        <section className="flex container mx-auto flex-row justify-between pb-10 items-center">
            <div className="">
                <h1 className="font-bold text-3xl pb-2">Gestion des comptes Clients</h1>
                <p>Gérez et suivez tous vos comptes clients en un seul endroit</p>
            </div>
            <div className="flex flex-row">
                            
                <button className="border border-gray-300 bg-blue-700 text-white rounded-lg p-2 flex gap-2 hover:cursor-pointer shadow-lg hover:scale-102 hover:bg-blue-600 px-3">
                    <p>+</p>
                    <p>Ajouter un produit </p>
                </button></div>
            
        </section>

        <div className=" relative container mx-auto pb-10">
                <input type="text" className="w-full border rounded-md h-8 px-15 border-gray-400 shadow-xs shadow-gray-700 bg-gray-100" placeholder="Rechercher par nom,email ou entreprise" onChange={handleSearch} value={searchItem}/>
               <Search className="absolute left-3 top-1/4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>

        <section className="container mx-auto min-h-[71vh]">
            <div className="border rounded-lg mx-auto shadow-xs border-gray-300 bg-white">
                {!error ? <table className="w-full border-gray-300">
                <thead>
                    <tr className="border text-left border-gray-200">
                        {entete_tab.map((item, index)=>(
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
            : 
            <div className="container mx-auto text-center text-5xl my-auto min-h-[50vh]  flex items-center justify-center"> 
                                    <p>{error}</p>
                                    </div>    
        }
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