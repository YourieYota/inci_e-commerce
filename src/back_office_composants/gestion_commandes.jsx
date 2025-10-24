import React, { useEffect, useState } from "react";
import { Nav_bar_with_searchbar } from "../composants";
import total_com_img from "../img/icone/icone_total_commande.webp"
import icone_erreur from "../img/icone/icone_erreur.webp"
import icone_termine from "../img/icone/icone_termine.webp"
import icone_attent from "../img/icone/icone_en_attente.webp"
import {useCommande} from "../vitrine_composants/hook_personnalise.jsx"
import {CompCom, AfficheDetail} from "./composants_commandes.jsx"
import { Search } from "lucide-react";
function Gest_com(){
    const [commande_tab, setCommande_tab] = useCommande()
    const [elementTrouve, setElementTrouve] = useState(commande_tab)
    const [currentPage, setCurrentPage] = useState(1)
    const elementParPage = 10
    const indexDernier = currentPage * elementParPage
    const indexPremier = indexDernier - elementParPage
    const elementActuel = elementTrouve.slice(indexPremier, indexDernier)
    const nbPage = Math.ceil(elementTrouve.length / elementParPage)

    
    const [SearchItem, setSearchItem] = useState("")
    const [error, setError]=useState("")

  
    const handleSearch = (e)=>{
        const valeur = e.target.value
        setSearchItem(valeur)
        if(valeur === ""){
            setElementTrouve(commande_tab)
            setError("")
        }else{
            const comSearch = commande_tab.filter((item)=>
                [item.idCom, item.entreprise ,item.catCom ,item.typeProd ,item.qte ,item.statut]
            .some((val)=>(val?.toString().toLowerCase().includes(valeur.toLowerCase())
            )
                
            ))
            
            console.log(comSearch)
            if(comSearch.length >0 ){
                setElementTrouve(comSearch)
                setError("")
            }else{
                setError("Aucun résultat trouvé")
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
   
    const [open, setOpen] = useState(false)
    const [commandeSelect, setCommandeSelect] = useState(null)

    const handleVoirDetails = (commande) => {
    setCommandeSelect(commande)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

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

        <section className={``}>
            <section className="pb-20">
                <Nav_bar_with_searchbar/>
            </section>

            <section className="container mx-auto">
                <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1 pb-10">
                    <h1 className="text-3xl font-bold font-serif ">Gestion des commandes</h1>
                <p className="text-gray-500 font-serif">Gérez vos commandes d'impression, générez des factures et envoyez des notifications</p>
                </div>

                        <div className="flex flex-row">          
                            <button className="border border-gray-300 bg-blue-700 text-white rounded-lg p-2 flex gap-2 hover:cursor-pointer shadow-lg hover:scale-102 hover:bg-blue-600 px-3">
                                <p>+</p>
                                <p>Ajouter une commande </p>
                            </button>
                        </div>
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

            <section className={`container mx-auto ${open ? "opacity-10" : "opacity-100"}`}>
                <div className="w-full border border-gray-300 shadow-xl rounded-lg p-4 bg-white">
                    <div className="flex justify-between pb-10">
                        <p className=" font-bold text-2xl font-serif">
                        Commandes récentes
                        </p>
                        
                        <div className="relative">
                            <input type="text" className="border border-gray-300 rounded-lg p-2 w-70 font-serif px-10" placeholder="Rechercher..." onChange={handleSearch} value={SearchItem}/>
                            <Search className="absolute top-1/2 -translate-1/2 right-60 h-4 w-4 text-muted-foreground" />
                        </div>
                        

                        
                        
                    </div>
                    
                    {error ? <div className="container mx-auto text-center text-5xl my-auto min-h-[50vh]  flex items-center justify-center"> 
                        <p>{error}</p>
                    </div>
                    
                    :
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
                                        <CompCom onVoirDetailsClick={() => handleVoirDetails(item)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table> 
                    
                    }

                    <div className="flex flex-row justify-between pt-5 items-center">
                    
                    <button disabled={currentPage === 1} className="disabled:bg-gray-100 p-2 rounded-lg border border-gray-300 hover:cursor-pointer px-5" onClick={()=> setCurrentPage(currentPage - 1)}>
                        Précedent
                    </button>

                    <div className=" space-x-3">
                      {  /*{[...Array(nbPage)].map((item, index)=>(
                                 <button className={`hover:cursor-pointer ${currentPage === index + 1 ? "bg-blue-500 px-2 rounded-full text-white " : ""}`} onClick={()=>setCurrentPage(index+1)} key={index}>
                            {index + 1}
                        </button>    
                        ))}*/
                        pages.map((p, index)=>(
                            p === "..." ? (<span>...</span>) : (<button className={`hover:cursor-pointer ${currentPage === p ? "bg-blue-500 px-2 rounded-full text-white " : ""}`} onClick={()=>setCurrentPage(p)} key={index}>{p}</button>

                        )))
                        }
                    </div>

                    <button disabled={currentPage === nbPage} className="disabled:bg-gray-100 p-2 rounded-lg border border-gray-300 hover:cursor-pointer px-10" onClick={()=> setCurrentPage(currentPage + 1)}>
                        Suivant
                    </button>
                </div>
                </div>
            </section>

            <AfficheDetail open={open} onClose={handleClose} commande={commandeSelect} />

        </section>
    )
}
export default Gest_com;