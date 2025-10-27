import React , {useState, useEffect, useRef} from "react"
import { Nav_bar_with_searchbar } from "../composants"
import crayon from "./img/icone/icone_crayon.webp"
import oeil from "./img/icone/icone_oeil.webp"
import del_img from "./img/icone/icone_poubelle.webp"
import total_com_img from "../img/icone/icone_total_commande.webp"
import icone_erreur from "../img/icone/icone_erreur.webp"
import icone_termine from "../img/icone/icone_termine.webp"
import icone_attent from "../img/icone/icone_en_attente.webp"
import { Search, User, Mail, Phone, Building2, Key, Calendar } from "lucide-react"
import { useCompte } from "./hookPersonnaliseCompte"
import { useNavigate } from "react-router-dom"


function Gest_compte(){
    const [compte, setCompte] = useCompte()
    const tab_role = ["Tous les rôles", "Admin", "Client","Invité"]
    const tab_statut = ["Actif", "Inactif", "Suspendu"]
    const naviguate = useNavigate()
    /*id : 1,
        Nom : "koffi jean paul",
        Email : "jeanpaulkoffi@test.com",
        Entreprise : "Particulier",
        Role : "Client",
        Statut : "Actif",
        inscription : "10/02/2025",
        Photo : "https://randomuser.me/api/portraits/men/1.jpg"*/

    const entete_tab =["Photo", "Nom", "Email", "Entreprise", "Role", "Statut", "Login", "Mot de passe","Inscription", "Action"]
    const indice_tab =["Photo", "Nom", "Email", "Entreprise", "Role", "Statut", "Login", "MotDePasse", "inscription"]

    const useractif = ()=>{
        const actif = compte.filter((p)=>(p.Statut === "Actif"))
        return (actif)
    }

    const userInactif = ()=>{
        const actif = compte.filter((p)=>(p.Statut === "Inactif"))
        return (actif)
    }

    const userSuspendu = ()=>{
        const actif = compte.filter((p)=>(p.Statut === "Suspendu"))
        return (actif)
    }

    const icone_tab = [oeil, crayon, del_img]
    const dashboardTab = [
                {
                    titre : "Total utilisateurs",
                    qte : compte.length,
                    icone :total_com_img,
                },
                {
                    titre : "Utilisateurs actifs",
                    qte : useractif().length,
                    icone :icone_erreur,
                },
                {
                    titre : "Utilisateurs inactifs",
                    qte : userInactif().length,
                    icone : icone_attent,
                },
                {
                    titre : "Utilisateurs suspendu  ",
                    qte : userSuspendu().length,
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

        {//fonction de recherche
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

            const [userToDel, setUserToDel]=useState(null)
            const [modalToDel, setModalToDel] = useState(false)

            const addUserToDel = (user)=>{
                setUserToDel(user)
                setModalToDel(!modalToDel)
            }

            const onDel = (id) => {
            setCompte((prev) => prev.filter((val) => val.id !== id));
            setModalToDel(false);
}
            useEffect(()=>setElementTrouve(compte), [compte])
            
            const [modalInfos, setModalInfos]=useState(false)
            const [userToView, setUserToView]= useState(null)
            const modalRef = useRef(null)
            
            const onDisplay = (user)=>{
                setUserToView(user)
                setModalInfos(!modalInfos)
            }

            useEffect(()=>{
                const handleClickOutside = (e)=>{
                    if (modalRef.current && !modalRef.current.contains(e.target)) setModalInfos(false)
                }
                document.addEventListener("mousedown", handleClickOutside)
                return ()=> document.removeEventListener("mouseclick", handleClickOutside)
            },[])

            const [roleSearch, setRoleSearch] = useState("")
            const [statutSearch, setStatutSearch] = useState("")

            const handleChangeRole = (e)=>{
                const {name, value} = e.target
                if (name === "role") setRoleSearch(value)
                    else setStatutSearch(value)    

                if (name === "role" && value === "Tous les rôles") setElementTrouve(compte)
                    else if(name ==="role" && value === "Admin") setElementTrouve(compte.filter((p)=> p.Role === "Admin"))
                        else if(name === "role" && value === "Client") setElementTrouve(compte.filter((p)=> p.Role === "Client"))
                            else if (name === "role" && value === "Invité") setElementTrouve(compte.filter((p)=> p.Role === "Invité"))
                
                if (name === "statut" && value === "Actif") setElementTrouve(compte.filter((p)=> p.Statut === "Actif"))
                    else if (name === "statut" && value === "Inactif") setElementTrouve(compte.filter((p)=> p.Statut === "Inactif"))
                        else if (name === "statut" && value === "Suspendu") setElementTrouve(compte.filter((p)=> p.Statut === "Suspendu"))
        }
                
                
        useEffect(()=> console.log(roleSearch, statutSearch), [roleSearch, statutSearch])
        
        
            

            

        return(

            <section className="min-h-screen bg-green-50">
            {//dashboard et haut de la page
            }
            <section className="pb">
                <Nav_bar_with_searchbar/>
            </section>

            <section className="container mx-auto pt-20">
                
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col gap-1 pb-10">
                    <h1 className="text-3xl font-bold font-serif text-blue-700">Gestion des Comptes</h1>
                    <p className="text-gray-500 font-serif">Administration des comptes clients</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col gap-1 pb-10">
                            <button className="border border-gray-300 bg-blue-700 text-white rounded-lg p-2 flex gap-2 hover:cursor-pointer shadow-lg hover:scale-102 hover:bg-blue-600 px-3" onClick={()=>naviguate("/addCompte")}>
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
                        <select name="role" id="" value={roleSearch} className="border border-gray-300 p-2 px-5 rounded-lg text-left" onChange={(handleChangeRole)}>
                            {tab_role.map((item, index)=>(
                                <option key={index}>{item}</option>
                            ))}
                        </select>

                        <select name="statut" id="" value={statutSearch} onChange={handleChangeRole} className="border border-gray-300 p-2 px-5 rounded-lg text-left">
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
                        <tr className="border-b border-gray-300">
                    {entete_tab.map((item, index)=>(
                        <td key={index} className="text-left px-2 py-2">{item}</td>
                        ))}
                    </tr></thead>

                    <tbody>
                        {elementActuel.map((item, index)=>(
                            <tr key={index} className="hover:bg-gray-100 hover:cursor-pointer">
                                {indice_tab.map((val, idx)=>(
                                    idx === 0 ? <td key={idx}><img src={item[val]} alt="" className="px-2 size-15 py-1 rounded-full" onClick={()=>onDisplay(item)}/></td> :
                                    <td className="" key={idx} onClick={idx !==9 ? ()=>onDisplay(item) : null}>
                                        {item[val]}
                                    </td>
                                ))}
                                <td>
                                    <div className=" flex  gap-2 ">
                                    {icone_tab.map((icone, index)=>(
                                        
                                            <button key={index} className="hover:cursor-pointer">
                                                <img src={icone} alt="" className="w-8" onClick={()=>{
                                                    if(icone === oeil) onDisplay(item)
                                                    else if(icone ===crayon){
                                                        naviguate("/modCompte",
                                                            {state : item}
                                                        )
                                                    }
                                                    else{
                                                        addUserToDel(item)
                                                    }
                                                }}/>
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
            
            {
                modalToDel && <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
                <div className="bg-white rounded-lg p-6 shadow-lg w-auto">
                <h2 className="text-lg font-semibold mb-4">Confirmer la suppression</h2>
                <p className="mb-4">Voulez-vous vraiment supprimer le produit "{userToDel?.nom}" ?</p>
                <p className="mb-4">Cette action est irréversible <b>{userToDel?.name}</b> ?</p>
                <div className="flex justify-end gap-4">
                    <button
                    className="px-4 py-2 bg-gray-300 rounded hover:cursor-pointer"
                    onClick={() => setModalToDel(false)}
                    >
                    Annuler
                    </button>
                    <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:cursor-pointer"
                    onClick={()=>onDel(userToDel.id)}
                    >
                    Supprimer
                    </button>
                </div>
                </div>
            </div>
            }

                {modalInfos && <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
                <div ref={modalRef} className="fixed bg-white rounded-lg p-6 shadow-lg min-w-1/4 min-h-3/4">
                    <div className="absolute top-2 right-5 hover:border hover:border-gray-300 hover:px-2 rounded-lg hover:cursor-pointer" onClick={()=>setModalInfos(false)}>
                        x
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col border-b border-gray-300">
                            <div className="flex flex-col gap-2 items-center"> 
                                <img src={userToView.Photo} alt="" className="border border-gray-300 rounded-full size-30"/>
                                <h1 className="font-bold text-xl">
                                    {userToView.Nom}
                                </h1>
                            </div>
                            <div className="flex gap-2 items-center justify-center mt-2 pb-2">
                                <p className={`${userToView.Role === "Client" ? "bg-gray-100 p-1 px-3 rounded-lg" : userToView.Role === "Admin" ? "bg-blue-700 p-1 px-3 rounded-lg text-white" : "bg-white p-1 px-3 rounded-lg border border-gray-300"}`}>
                                    {userToView.Role}
                                </p>
                                <p className={`${userToView.Statut === "Actif" ? "bg-blue-700 p-1 px-3 text-white rounded-lg" : userToView.Statut === "Inactif" ? "bg-gray-100 p-1 px-3 rounded-lg" : "bg-red-700 text-white border border-gray-300 p-1 px-3 rounded-lg"}`}>
                                    {userToView.Statut}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 pb-2 border-b border-gray-300">
                            <h1 className="font-bold text-xl">
                                Informations de contact
                            </h1>
                            <div className="flex gap-2 items-start">
                                <Mail />
                                <p className="">
                                    {userToView.Email}
                                </p>
                            </div >
                                
                            <div className="flex gap-2 items-start">
                                <Building2 />
                                <p>
                                    {userToView.Entreprise}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 border-b pb-2 border-gray-300">
                            <h1 className="font-bold text-xl">
                                Informations de Connection
                            </h1>

                            <div className="flex flex-col items-start">
                                <h2 className="font-medium text-lg">Login</h2>
                                <p className="">
                                    {userToView.Login}
                                </p>
                            </div >
                            <div className="flex flex-col items-start">
                                <h2 className="font-medium text-lg">Numéro</h2>
                                <p className="">
                                    {userToView.Tel}
                                </p>
                            </div >
                            <div className="flex flex-col items-start">
                                <h2 className="font-medium text-lg">Mot de passe</h2>
                                <p className="">
                                    {userToView.MotDePasse}
                                </p>
                            </div >
                        </div>

                        <div className="flex gap-3 border-b pb-2 border-gray-300">
                            <Calendar />
                            <p>Inscrit le {userToView.inscription}</p>
                        </div>


                    </div>
                </div>
                </div>} 

            </section>
            

        )

}
export default Gest_compte;