import React, {useEffect, useRef, useState } from "react";
import { Nav_bar_with_searchbar } from "../composants";
import total_com_img from "../img/icone/icone_total_commande.webp"
import icone_erreur from "../img/icone/icone_erreur.webp"
import icone_termine from "../img/icone/icone_termine.webp"
import icone_attent from "../img/icone/icone_en_attente.webp"
import { useProduit } from "./hookProduitPersonnalise.jsx"
import crayon from "./img/icone/icone_crayon.webp"
import oeil from "./img/icone/icone_oeil.webp"
import del_img from "./img/icone/icone_poubelle.webp"
import { Search, Plus, ArrowLeft } from "lucide-react"
import { DelProduct } from "./composants_produits.jsx"
import { useNavigate } from "react-router-dom";
import {AfficherProduitChoisi} from "./Gestion_produits_composants/afficher_prod_choisi.jsx"


function Gest_prod(){
    const [prod_tab, setProd_tab] = useProduit()

   const qteCat = () => {
  return prod_tab.reduce((acc, val) => {
    if (!acc.includes(val.cat)) {
      acc.push(val.cat);
    }
    return acc
  }, [])
}

    const prixMoy = () => {
   const total = prod_tab.reduce((acc, val) => acc + parseInt(val.prix), 0);
  return Math.ceil(total / prod_tab.length)
  };

  const nbPop =()=>{
        return(prod_tab.reduce((acc, val)=>{
            if(val.pop === "oui"){
                return acc+1
            }
            return acc
        }, 0))
    
  }


    const nomPage = "gestion des produits"
    const naviguate = useNavigate()
    const icone_tab = [oeil, crayon, del_img]
    const index_tab = ["src","nom","cat","prix","pop", ""]
    const titre_tab = ["image", "Nom", "Catégorie", "Prix de départ",  "Populaire", "Action" ]
    const dashboardTab = [
            {
                titre : "Total Produits",
                qte : prod_tab.length,
                infos : "Produits actifs",
                icone :total_com_img,
            },
            {
                titre : "Catégorie",
                qte : qteCat().length,
                infos : "Catégorie utilisées",
                icone :icone_erreur,
            },
            {
                titre : "Prix de base moyen",
                qte : prixMoy() + " FCFA",
                infos : "Prix de départ moyen",
                icone : icone_attent,
            },
            {
                titre : "Produits populaires",
                qte : nbPop(),
                infos : "mis en avant",
                icone :icone_termine,
            }
        ]

        const [searchItem, setSearchItem] = useState("")
        const [elementSearch, setElementSearch]= useState(prod_tab)
        const [error, setError] = useState("")
        const [currentPage, setCurrentPage] = useState(1)
        const elementParPage = 10
        const indexDernier = currentPage * elementParPage
        const indexPremier = indexDernier - elementParPage
        const elementActuel = elementSearch.slice(indexPremier, indexDernier)
        const nbPage = Math.ceil(elementSearch.length / elementParPage)
        const [prodToDel, setProdToDel] = useState(null)
        const [prodToVisible, setProdToVisible]= useState(null)
        const handlModalProdToVisible = (prod)=>{
        setProdToVisible(prod)
        setModalProdToVisible((prev)=> !prev)
      }
        const [modalDel, setModalDel] = useState(false)
        const [modalProdToVisible, setModalProdToVisible] =  useState(false)
        const handleDel = (product)=>{
            setProdToDel(product)
            setModalDel(!modalDel)
        }

        const del = (id)=>{
            DelProduct(prod_tab, setProd_tab, id)
            setModalDel(false)
        }
        useEffect(()=>{
            setElementSearch(prod_tab)
        },[prod_tab])

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

        const handleSearch = (e)=>{
            const valeur = e.target.value?.toString().toLowerCase()
            setSearchItem(valeur)
            if (valeur === ""){
                setElementSearch(prod_tab)
                setError("")
            }
            else{
                const resultat = prod_tab.filter((item)=>
                [item.nom, item.prix, item.pop].some((val)=> val?.toString().toLowerCase().includes(valeur))
            )
                if(resultat.length > 0){
                    setElementSearch(resultat)
                    setError("")
                }
                else{
                    setError("Aucun résultat trouvé")
                }
            }
        }

    return(
        <>
            <section className="pb-20">
                <Nav_bar_with_searchbar/>
            </section>
            <section className="container mx-auto">
                            <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col gap-1 pb-10">
                                <h1 className="text-3xl font-bold font-serif text-blue-700">Gestion des produits</h1>
                            <p className="text-gray-500 font-serif">Gérez vos différents, Ajoutez de nouveaux produits</p>
                            </div>
                            <div className="flex flex-row">
                            
                            <button className="border border-gray-300 bg-blue-700 text-white rounded-lg p-2 flex gap-2 hover:cursor-pointer shadow-lg hover:scale-102 hover:bg-blue-600 px-3" onClick={()=>naviguate("/add_prod")}>
                                <p>+</p>
                                <p>Ajouter un produit </p>
                            </button></div>
                            </div>
            
                            <div className="grid grid-cols-4 gap-2 space-x-2 pb-10">
                                {dashboardTab.map((item, index)=>(
                                    <div key={index} className="rounded-xl bg-white border border-gray-300 shadow-xl p-10">
                                        <div className="flex flex-row justify-between">
                                            <div className="felx flex-col gap-2">
                                                <p className=" font-serif text-lg">
                                                    {item.titre}
                                                </p>
                                                <p className="font-bold text-2xl font-serif ">
                                                    {item.qte}
                                                </p>
                                                <p className=" text-gray-500 ">
                                                    {item.infos}
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
            
                        <section className={`container mx-auto `}>
                            <div className="w-full border border-gray-300 shadow-xl rounded-lg p-4 bg-white">
                                <div className="flex justify-between pb-10">
                                    <p className=" font-bold text-2xl font-serif">
                                    Commandes récentes
                                    </p>
                                    <div className="relative">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                    <input type="text" className="border border-gray-300 rounded-lg p-2 w-70 font-serif px-10" placeholder="Rechercher..." onChange={handleSearch} value={searchItem}/>
                                    </div>
                                    
                                </div>
                                
                                {!error ? <table className="w-full mx-auto">
                                    <thead>
                                        <tr className="border border-gray-300">
                                            {titre_tab.map((item, index)=>(
                                               <td  key={index} className={`pb-2 px-2 ${item === "Action" || item === "Populaire" ? "text-center" : ""}`}>{item}</td>
                                            ))
                                                }
                                        </tr>
                                    </thead>
            
                                    <tbody className="">
                                        {elementActuel.map((item, index)=>(
                                            <tr key={index} className="border border-gray-300 hover:bg-gray-50 hover:cursor-pointer" >
                                                {index_tab.map((val, idx)=>(
                                                   val ==="src" ? (<td key={idx} onClick={()=>handlModalProdToVisible(item)}  className="px-2 py-1"><img src={item[val]} className="size-10"/></td>) : val === "" ? 
                                                        <td  key={idx} className="w-30 px-2 mx-auto">
                                                            <div className="flex flex-row justify-start items-center gap-2"> 
                                                            {icone_tab.map((icone, index)=>(
                                                                
                                                                <button key={index} className="hover : cursor-pointer">
                                                                    <img src={icone} alt="" onClick={() => {
                                                                    if (icone === del_img) handleDel(item)
                                                                    else if (icone === crayon) {
                                                                        naviguate("/modif_prod", {
                                                                            state : item,
                                                                        })
                                                                    
                                                                }else{handlModalProdToVisible(item)}
                                                                }}/>
                                                                </button>
                                                               
                                                            ))} </div>
                                                        </td>
                                                   : (<td key={idx} onClick={()=>handlModalProdToVisible(item)} className={`pb-3 pl-2 ${val === "pop" ? "text-center flex justify-center items-center mt-2" : ""}`}>
                                                    <p className={`${val === "pop" ? item.pop ==="oui" ? "bg-yellow-500 rounded-lg text-center w-10" :"text-center" : ""}`}> 
                                                        {item[val]}</p>
                                                   {/*${val === "pop" ? item.pop ==="oui" ? "bg-blue-500 rounded-lg text-center" :"text-center" : ""*/}
                                                    
                                                    </td> )
                                                ))}
                                                
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                : <div className="container mx-auto text-center text-5xl my-auto min-h-[50vh]  flex items-center justify-center"> 
                                    <p>{error}</p>
                                    </div>
                                }
            
                                <div className="flex flex-row justify-between pt-5 items-center">
                                
                                <button disabled={currentPage === 1} className="disabled:bg-gray-200 p-2 rounded-lg border border-gray-300 hover:cursor-pointer px-5 hover:bg-gray-100 " onClick={()=> setCurrentPage(currentPage - 1)}>
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
            
                                <button disabled={currentPage === nbPage} className="disabled:bg-gray-200 p-2 rounded-lg border border-gray-300 hover:cursor-pointer px-10 hover:bg-gray-100" onClick={()=> setCurrentPage(currentPage + 1)}>
                                    Suivant
                                </button>
                            </div>
                            </div>

                            {// Modale de suppression
                            }

                            
                                {modalDel && (
                                    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
                                        <div className="bg-white rounded-lg p-6 shadow-lg w-auto">
                                        <h2 className="text-lg font-semibold mb-4">Confirmer la suppression</h2>
                                        <p className="mb-4">Voulez-vous vraiment supprimer le produit "{prodToDel?.nom}" ?</p>
                                        <p className="mb-4">Cette action est irréversible <b>{prodToDel?.name}</b> ?</p>
                                        <div className="flex justify-end gap-4">
                                            <button
                                            className="px-4 py-2 bg-gray-300 rounded hover:cursor-pointer"
                                            onClick={() => setModalDel(false)}
                                            >
                                            Annuler
                                            </button>
                                            <button
                                            className="px-4 py-2 bg-red-500 text-white rounded hover:cursor-pointer"
                                            onClick={()=>del(prodToDel.id)}
                                            >
                                            Supprimer
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                    )
    }


{/* {
      id : 1,
      src : carte_visite ,
      nom : "Carte de visite 200x400",
      prix : "3000 FCFA",
      description : "petite description du modèle cité",
      cat : "Carte de visite",
      qte_min : "100",
      dur_prod : "7",
      format : [{
        Nom : "A5",
        Largeur : "148",
        Hauteur : "210",
        unit : "mm"
      },{
        Nom : "A6",
        Largeur : "105",
        Hauteur : "148",
        unit : "mm"]},
        pop :  "oui",
      finition : ["Mat", "Brillant"]
    },
      }*/}

    
        {modalProdToVisible && (
    <AfficherProduitChoisi
    prodToVisible={prodToVisible}
    handlModalProdToVisible={handlModalProdToVisible}
    prod_tab = {prod_tab}
    setProd_tab = {setProd_tab}
    nomPage = {nomPage}
  />
)}
    </section>
            
            
                      
        </>)

}
export default Gest_prod;
