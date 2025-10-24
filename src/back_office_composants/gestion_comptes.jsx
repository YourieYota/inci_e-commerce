import React , {useState, useEffect} from "react"
import { Nav_bar_with_searchbar } from "../composants"
import crayon from "./img/icone/icone_crayon.webp"
import oeil from "./img/icone/icone_oeil.webp"
import del_img from "./img/icone/icone_poubelle.webp"
import total_com_img from "../img/icone/icone_total_commande.webp"
import icone_erreur from "../img/icone/icone_erreur.webp"
import icone_termine from "../img/icone/icone_termine.webp"
import icone_attent from "../img/icone/icone_en_attente.webp"
import { Search, User } from "lucide-react"
import { useCompte } from "./hookPersonnaliseCompte"


function Gest_compte(){
    const [compte, setCompte] = useCompte()
    const tab_role = ["Tous les rôles", "Admin", "Client","Invité"]
    const tab_statut = ["Actif", "Inactif", "Suspendu"]

    /*id : 1,
        Nom : "koffi jean paul",
        Email : "jeanpaulkoffi@test.com",
        Entreprise : "Particulier",
        Role : "Client",
        Statut : "Actif",
        inscription : "10/02/2025",
        Photo : "https://randomuser.me/api/portraits/men/1.jpg"*/

    const entete_tab =["Photo", "Nom", "Email", "Entreprise", "Role", "Statut", "Inscription", "Action"]
    const indice_tab =["Photo", "Nom", "Email", "Entreprise", "Role", "Statut", "inscription"]
    const icone_tab = [oeil, crayon, del_img]
    const dashboardTab = [
                {
                    titre : "Total Produits",
                    qte : "6",
                    infos : "Produits actifs",
                    icone :total_com_img,
                },
                {
                    titre : "Catégorie",
                    qte : "5",
                    infos : "Catégorie utilisées",
                    icone :icone_erreur,
                },
                {
                    titre : "Prix de base moyen",
                    qte : "7200",
                    infos : "Prix de départ moyen",
                    icone : icone_attent,
                },
                {
                    titre : "Produits populaires",
                    qte : "2",
                    infos : "mis en avant",
                    icone :icone_termine,
                }
            ]
    /*pour paginer la page */

    const [elementTrouve, setElementTrouve] = useState(compte)
    const [currentPage, setCurrentPage] = useState(1)
    const elementParPage = 10
    const indexDernier = currentPage * elementParPage
    const indexPremier = indexDernier - elementParPage
    const elementActuel = elementTrouve.slice(indexPremier, indexDernier)
    const nbPage = Math.ceil(elementTrouve.length / elementParPage)

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

        {//fonction de rechercher 
            }
            const [error, setError] = useState("")
            const [search, setSearch] = useState("")
            const handleSearch = (e)=>{
                const value = e.target.value
               setSearch(value)
                    if(value.trim() === "")  {setElementTrouve(compte) 
                        setError("")}
                        else{
                            const resultat = compte.filter((item)=>
                            [item.Nom, item.Email, item.Entreprise, item.Role, item.Statut, item.inscription].some((val)=>(val?.toLowerCase().includes(value.toLowerCase()))))
                        if(resultat.length > 0){setElementTrouve(resultat) 
                            setError("")}
                        else{setError("Aucun resultat trouvé")}
            }}

        return(

            <section className="min-h-screen bg-green-50">
            {//dashboard et haut de la page
            }
            <section className="pb">
                <Nav_bar_with_searchbar/>
            </section>

            <section className="container mx-auto">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col gap-1 pb-10">
                    <h1 className="text-3xl font-bold font-serif text-blue-700">Gestion des Comptes</h1>
                    <p className="text-gray-500 font-serif">Administration des comptes clients</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col gap-1 pb-10">
                            <button className="border border-gray-300 bg-blue-700 text-white rounded-lg p-2 flex gap-2 hover:cursor-pointer shadow-lg hover:scale-102 hover:bg-blue-600 px-3">
                                <p>+</p>
                                <p>Ajouter un compte </p>
                            </button>
                        </div>
                    </div>
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
            {
                //section pour le crud
            }                
            <section>
                <div className="flex gap-2 items-center justify-between container mx-auto">
                    <div className="flex gap-2 font-bold text-2xl items-center">
                    <User />
                    <h1 className="font-bold text-3xl">Liste des utilisateurs</h1>
                    </div>

                    <div className="flex gap-3">
                    <div className="flex relative">
                        <input type="text" className="border rounded-lg border-gray-300 p-2 px-8 w-75 *:" placeholder="Rechercer..." onChange={handleSearch} value={search}/>
                        <Search className="text-gray-400 w-5 absolute right-68 top-5 -translate-y-1/2"/>
                    </div>

                    <div className="flex gap-3">
                        <select name="" id="" className="border border-gray-300 p-2 px-5 rounded-lg text-left">
                            {tab_role.map((item, index)=>(
                                <option key={index}>{item}</option>
                            ))}
                        </select>

                        <select name="" id="" className="border border-gray-300 p-2 px-5 rounded-lg text-left">
                            {tab_statut.map((item, index)=>(
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                </div>
                </div>
                {
                    //pour le tableau
                }
                {!error ? <div className="bg-white container mx-auto mt-5 rounded-lg border border-gray-300 overflow-auto">
                    <table className="w-full ">
                        <thead>
                        <tr className="border-b border-gray-300 ">
                    {entete_tab.map((item, index)=>(
                        <td key={index} className="text-left px-2 py-2">{item}</td>
                        ))}
                    </tr></thead>

                    <tbody>
                        {elementActuel.map((item, index)=>(
                            <tr key={index}>
                                {indice_tab.map((val, idx)=>(
                                    idx === 0 ? <td key={idx}><img src={item[val]} alt="" className="px-2 w-15 py-1 rounded-full"/></td> :
                                    <td className="" key={idx}>
                                        {item[val]}
                                    </td>
                                ))}
                                <td>
                                    <div className=" flex  gap-2 ">
                                    {icone_tab.map((icone, index)=>(
                                        
                                            <button className="hover:cursor-pointer">
                                                <img src={icone} alt="" className="w-8"/>
                                            </button>
                                       
                                    ))}
                                     </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                    </table>
                </div> :
                    <div className="container mx-auto text-center text-5xl my-auto min-h-[50vh]  flex items-center justify-center"> 
                        <p>{error}</p>
                    </div>}
                
                
                 <section className="container mx-auto pb-5">
                <div className="flex flex-row justify-between pt-5 items-center">
                    <button disabled={currentPage === 1} className="disabled:bg-gray-200 p-2 rounded-lg border border-gray-300 hover:cursor-pointer px-5" onClick={()=> setCurrentPage(currentPage - 1)}>
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

                    <button disabled={currentPage === nbPage} className="disabled:bg-gray-200 p-2 rounded-lg border border-gray-300 hover:cursor-pointer px-10" onClick={()=> setCurrentPage(currentPage + 1)}>
                        Suivant
                    </button>
                </div>
                </section>
            </section>   
            </section>

        )

}
export default Gest_compte;